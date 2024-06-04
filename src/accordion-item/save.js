import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { title } = attributes;

    return (
        // <div {...useBlockProps.save()}>
        //     <div className='accordion__title'>
        //         <RichText.Content
		// 	        className='accordion__title-text'
		// 	        tagName='h3'
        //             value={title}
        //         />
        //         <div class="accordion__arrow"><span class="accordion__arrow-item ">+</span></div>
        //         <div className='accordion__content'>contents area</div>
        //     </div>
        // </div>
        <div {...useBlockProps.save()}>

			<div class="accordion__item">
					<div class="accordion__title">
						<div class="accordion__arrow"><span class="accordion__arrow-item ">+</span></div> 
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
