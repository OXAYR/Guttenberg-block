import { __ } from "@wordpress/i18n";
import { useState } from "react";
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { ColorPicker } from "@wordpress/components";
import { TextControl, SelectControl, __experimentalBoxControl as BoxControl, ToggleControl } from "@wordpress/components";
import { InnerBlocks } from '@wordpress/block-editor';

const { Fragment } = wp.element;
import "./editor.scss";

export default function Edit({ setAttributes, attributes }) {
	const [text, setText] = useState(attributes.text || "");
	const { content, tag, contentColor, padding, useGridLayout } = attributes;
	const onChangeText = (newText) => {
		setText(newText);
		setAttributes({ text: newText });
	};

	return (
		<Fragment>
			<InspectorControls>
				<div>
					<TextControl
						label={__("Text")}
						value={text}
						onChange={onChangeText}
					/>
					<SelectControl
						label="Post Format"
						value={tag}
						options={[
							{ label: __("h1", "uzair-block"), value: "h1" },
							{ label: __("h2", "uzair-block"), value: "h2" },
							{ label: __("h3", "uzair-block"), value: "h3" },
							{ label: __("h4", "uzair-block"), value: "h4" },
							{ label: __("h5", "uzair-block"), value: "h5" },
							{ label: __("h6", "uzair-block"), value: "h6" },
							{ label: __("p", "uzair-block"), value: "p" },
							{ label: __("ol", "uzair-block"), value: "ol" },
							{ label: __("ul", "uzair-block"), value: "ul" },
						]}
						onChange={(newTag) => setAttributes({ tag: newTag })}
						__nextHasNoMarginBottom
					/>

					<ColorPicker
						color={contentColor}
						onChange={(newContentColor) =>
							setAttributes({ contentColor: newContentColor })
						}
						enableAlpha
						defaultValue="#000"
					/>

					<BoxControl
						values={padding}
						onChange={(newPadding) => setAttributes({ padding: newPadding })}
					/>

					{/* Switch control for grid layout */}
					<ToggleControl
						label={__("Use Grid Layout")}
						checked={useGridLayout}
						onChange={() => setAttributes({ useGridLayout: !useGridLayout })}
					/>
				</div>
			</InspectorControls>

			<div {...useBlockProps({ className: "blog-info" })}>
				<div className={`block-info ${useGridLayout ? 'grid-layout' : ''}`}>
					<RichText
						tagName={tag}
						className="New-tag"
						multiline="p"
						value={content}
						allowedFormats={["core/bold", "core/italic"]}
						onChange={(newContent) => setAttributes({ content: newContent })}
						placeholder={__("Add content......", "uzair-block")}
						style={{
							color: contentColor,
							padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
						}}
					/>
					<h1>{text}</h1>
				</div>
			</div>

			<div className={`inner-blocks-container ${useGridLayout ? 'horizontal-layout' : 'vertical-layout'}`}>
				<InnerBlocks orientation={useGridLayout ? 'horizontal' : 'vertical'} />
			</div>
		</Fragment>
	);
}
