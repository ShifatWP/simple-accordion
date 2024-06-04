import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
registerBlockType( 'task-block/simple-accordion-item', {
	title: __('Accordion Item', 'simple-accordion'),
    description: __('An Accordion Card Item', 'simple-accordion'),
    parent: ['task-block/simple-accordion'],
    icon: 'menu',
    supports: {
        reusable: false,
        html: false
    },
	attributes: {
		title: {
			type: 'string',
			source: "html",
			selector: 'h4'
		}
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
