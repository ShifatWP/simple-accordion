import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const Edit = ({ attributes, setAttributes }) => {
    
    const { title } = attributes;

    return(
        // <div { ...useBlockProps()} >
        //     <div className='accordion__title'>
        //         <RichText
		// 	        className='accordion__title-text'
		// 	        tagName='h3'
        //             value={title}
        //             onChange={(value) => setAttributes({ title: value })}
        //         />
        //         <div class="accordion__arrow"><span class="accordion__arrow-item ">+</span></div>
        //         <div className='accordion__content'>content</div>
        //     </div>
        // </div>
        <div { ...useBlockProps()}>
			<div class="accordion__item">
					<div class="accordion__title">
						<div class="accordion__arrow"><span class="accordion__arrow-item ">+</span></div> 
                        <RichText
			                className='accordion__title-text'
							placeholder= {__('Title', 'simple-accordion')}
			                tagName='h4'
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                        />
					</div>
					<div class="accordion__content">
                        <InnerBlocks 
							template={[
								[
									"core/paragraph",
									{
										placeholder: "Write accordion content here or add block.",
									},
								],
							]}
						/>
					</div>
		</div>
</div>
    )
};

export default Edit;
