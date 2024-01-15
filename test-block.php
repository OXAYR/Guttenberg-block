<?php
/**
 * Plugin Name:       Test Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       test-block
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function test_block_test_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'test_block_test_block_block_init' );


/**
 * Test Block settings page
 */



function test_block_register_settings() {
    add_option('test_block_text', 'Hello, default text!');
    add_option('test_block_content_color', '#000000');
    add_option('test_block_padding', array(
        'top'    => '10px',
        'right'  => '10px',
        'bottom' => '10px',
        'left'   => '10px',
    ));
}

function test_block_settings_menu() {
    add_menu_page(
		//Page Title
        'Test Block Settings',
		//Settings Title 
        'Test Block',
		// Allowing the user to manage options
        'manage_options',

        'test_block_settings',
        // function which would render on the load of the settings page 
		'test_block_settings_page'
    );
}

function test_block_settings_page() {
    ?>
    <div class="wrap">
        <h2>Test Block Settings</h2>
        <form method="post" action="options.php">
            <?php
            settings_fields('test_block_options');
            do_settings_sections('test_block_settings');
            submit_button();
            ?>
        </form>
    </div>
    <?php
}

function test_block_init_settings() {
    register_setting('test_block_options', 'test_block_text');
    register_setting('test_block_options', 'test_block_content_color');
    register_setting('test_block_options', 'test_block_padding');
}

function test_block_settings_fields() {
    add_settings_section(
        'test_block_main_section',
        'Main Settings',
        'test_block_main_section_cb',
        'test_block_settings'
    );

    add_settings_field(
        'test_block_text',
        'Default Text',
        'test_block_text_cb',
        'test_block_settings',
        'test_block_main_section'
    );

    add_settings_field(
        'test_block_content_color',
        'Content Color',
        'test_block_content_color_cb',
        'test_block_settings',
        'test_block_main_section'
    );

    add_settings_field(
        'test_block_padding',
        'Padding',
        'test_block_padding_cb',
        'test_block_settings',
        'test_block_main_section'
    );
}

function test_block_main_section_cb() {
    echo '<p>Main settings for Test Block.</p>';
}

function test_block_text_cb() {
    $text = get_option('test_block_text', 'Hello, default text!');
    echo "<input type='text' name='test_block_text' value='{$text}' />";
}

function test_block_content_color_cb() {
    $content_color = get_option('test_block_content_color', '#000000');
    echo "<input type='text' name='test_block_content_color' value='{$content_color}' class='color-field' />";
}

function test_block_padding_cb() {
    $padding = get_option('test_block_padding', array(
        'top'    => '10px',
        'right'  => '10px',
        'bottom' => '10px',
        'left'   => '10px',
    ));

    foreach ($padding as $key => $value) {
        echo "<label>{$key}</label> <input type='text' name='test_block_padding[{$key}]' value='{$value}' /><br />";
    }
}

add_action('admin_init', 'test_block_init_settings');
add_action('admin_menu', 'test_block_settings_menu');
add_action('admin_init', 'test_block_register_settings');
add_action('admin_init', 'test_block_settings_fields');
