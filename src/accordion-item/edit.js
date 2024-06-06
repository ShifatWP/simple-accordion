import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useEffect } from '@wordpress/element';

const Edit = ({ attributes, setAttributes, context }) => {
    
    const { title, icon } = attributes;
    const iconFromContext = context['simple-accordion/icon'];

	useEffect(()=>{
		setAttributes({icon: iconFromContext})
	},[iconFromContext]);

    return(
        <div { ...useBlockProps()}>
			<div class="accordion__item">
					<div class="accordion__title">
						<div class="accordion__arrow"><i class={`accordion__arrow-item ${iconFromContext}`}></i></div> 
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
