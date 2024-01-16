import React from 'react';
import { __ } from "@wordpress/i18n";
import { SelectControl, Button } from "@wordpress/components";
import { useDispatch } from "@wordpress/data";

const SettingsPage = () => {
    const dummyBlockCategory = "widgets";
    const dummyBlockIcon = "smiley";
    const dispatch = useDispatch();

    const updateSetting = (key, value) => {
        console.log(`Setting ${key} updated to:`, value);

        dispatch('core/editor').updateBlockSetting('custom-gtb/uzair-block', key, value);
    };

    return (
        <div className="wrap">
            <h2>Uzair Block Settings</h2>
            <form>
                <SelectControl
                    label="Category"
                    value={dummyBlockCategory}
                    options={[
                        { label: __("Widgets", "uzair-block"), value: "widgets" },
                        { label: __("Common Blocks", "uzair-block"), value: "common" },
                    ]}
                    onChange={(newValue) => updateSetting("category", newValue)}
                />

                <SelectControl
                    label="Icon"
                    value={dummyBlockIcon}
                    options={[
                        { label: __("Smiley", "uzair-block"), value: "smiley" },
                        { label: __("Star", "uzair-block"), value: "star" },
                    ]}
                    onChange={(newValue) => updateSetting("icon", newValue)}
                />

                <Button isPrimary onClick={() => alert("Settings saved!")}>
                    Save Settings
                </Button>
            </form>
        </div>
    );
};

export default SettingsPage;
