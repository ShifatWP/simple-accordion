import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ({attributes}) => {
    const { count, uniqueId, frontendCss } = attributes;
	const css = frontendCss?.substring(1, frontendCss.length - 1);
    return (
        
        <div {...useBlockProps.save()}>
            <style>{css}</style>
            <InnerBlocks.Content/>
        </div>
    );
};

export default Save;
