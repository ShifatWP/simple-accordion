<?php
/**
 * Plugin Name:       Simple Accordion
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Sifat
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       simple-accordion
 *
 * @package CreateBlock
 */

 if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function task_block_simple_accordion_block_init() {
    // Register block type from the build directory
    register_block_type( __DIR__ . '/build' );

    // Enqueue the frontend script
    $frontend_js = 'src/accordion.js';
    wp_enqueue_script(
        'accordion-block-frontend',
        plugins_url( $frontend_js, __FILE__ ),
        array('jquery'),
        filemtime( __DIR__ . '/' . $frontend_js ),
        true
    );

    // Enqueue the script specifically for the block editor
    add_action('enqueue_block_editor_assets', function() use ($frontend_js) {
        wp_enqueue_script(
            'accordion-block-accordion-editor',
            plugins_url( $frontend_js, __FILE__ ),
            array('jquery'),
            filemtime( __DIR__ . '/' . $frontend_js ),
            true
        );
    });
}
add_action( 'init', 'task_block_simple_accordion_block_init' );
