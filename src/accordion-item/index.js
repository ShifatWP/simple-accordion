import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
registerBlockType( 'task-block/simple-accordion-item', {
	title: __('Accordion Item', 'simple-accordion'),
    description: __('An Accordion Item', 'simple-accordion'),
    parent: ['task-block/simple-accordion'],
    icon: 'menu',
    supports: {
        reusable: false,
        html: false
    },
	usesContext: ['simple-accordion/icon'],
	attributes: {
		title: {
			type: 'string',
			source: "html",
			selector: 'h4'
		},
		icon: {
            type: 'string',
            default: 'fas fa-chevron-down'
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
