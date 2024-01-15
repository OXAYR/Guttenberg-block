/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';


import React from 'react';
// import ReactDOM from 'react-dom';
import SettingsPage from './settings';


// const { blockCategory, blockIcon } = wp.data.select('core/editor').getEditedPostAttribute('meta');



registerBlockType(metadata.name, {
	
	// category: blockCategory || 'common', // Default to 'common' if not set
	// icon: blockIcon || 'star',
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: save,
} );
	

document.addEventListener('DOMContentLoaded', function () {
		const settingsPageContainer = document.getElementById('custom-settings-page');
		ReactDOM.render(<SettingsPage />, settingsPageContainer);
	});
