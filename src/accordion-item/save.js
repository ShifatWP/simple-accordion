import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { title, icon } = attributes;
	
    return (
        <div {...useBlockProps.save()}>

			<div class="accordion__item">
					<div class="accordion__title">
					    <div class="accordion__arrow"><i class={`accordion__arrow-item ${icon}`}></i></div> 
						<RichText.Content
			                className='accordion__title-text'
			                tagName='h4'
                            value={title || 'No Title'}
                        />
					</div>
					<div class="accordion__content">
                        <InnerBlocks.Content />
					</div>
		</div>
</div>
    );
};

export default Save;
