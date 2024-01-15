import { __ } from "@wordpress/i18n";
import { useState } from "react";
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { ColorPicker } from "@wordpress/components";
import { TextControl, SelectControl, __experimentalBoxControl as BoxControl } from "@wordpress/components";

const { Fragment } = wp.element;
import "./editor.scss";

export default function Edit({ setAttributes, attributes }) {
	const [text, setText] = useState(attributes.text || "");
	const { content, tag, contentColor, padding } = attributes;
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
						onChange={(tag) => setAttributes({ tag })}
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
				</div>
				<BoxControl
					values={padding}
					onChange={(newPadding) => setAttributes({ padding: newPadding })}
				/>

			</InspectorControls>

			<div {...useBlockProps({ className: "blog-info" })}>
				<div className="block-info">
					<RichText
						tagName={tag} // The tag here is the element output and editable in the admin
						className="New-tag"
						multiline="p"
						value={content} // Any existing content, either from the database or an attribute default
						allowedFormats={["core/bold", "core/italic"]} // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={(content) => setAttributes({ content })} // Store updated content as a block attribute
						placeholder={__("Add content......", "uzair-block")} // Display this text before any content has been added by the user
						style={{
							color: contentColor,
							padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
						}}
					/>
					<h1>{text}</h1>
				</div>
			</div>
		</Fragment>
	);
}
