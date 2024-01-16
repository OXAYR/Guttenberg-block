import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { text, tag, content, contentColor, padding } = attributes;
	return (
		<p {...useBlockProps.save()}>
			<RichText.Content
				tagName={tag} // The tag here is the element output and editable in the admin
				className="New-tag"
				multiline="p"
				value={content}
				style={{
					color: contentColor,
					padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
				}}
			/>
			<InnerBlocks.Content />
			{text}
		</p>
	);
}
