import React from 'react';
import { SelectControl, Button } from "@wordpress/components";

const SettingsPage = () => {
    // Dummy data for demonstration
    const dummyBlockCategory = "widgets";
    const dummyBlockIcon = "smiley";

    // Dummy function for demonstration
    const updateSetting = (key, value) => {
        console.log(`Setting ${key} updated to:`, value);
    };

    return (
        <div className="wrap">
            <h2>Uzair Block Settings</h2>
            <form>
                {/* Category Setting */}
                <SelectControl
                    label="Category"
                    value={dummyBlockCategory}
                    options={[
                        { label: "Widgets", value: "widgets" },
                        { label: "Common Blocks", value: "common" },
                        // Add more options as needed
                    ]}
                    onChange={(newValue) => updateSetting("blockCategory", newValue)}
                />

                {/* Icon Setting */}
                <SelectControl
                    label="Icon"
                    value={dummyBlockIcon}
                    options={[
                        { label: "Smiley", value: "smiley" },
                        { label: "Star", value: "star" },
                        // Add more options as needed
                    ]}
                    onChange={(newValue) => updateSetting("blockIcon", newValue)}
                />

                <Button isPrimary onClick={() => alert("Settings saved!")}>
                    Save Settings
                </Button>
            </form>
        </div>
    );
};

export default SettingsPage;
