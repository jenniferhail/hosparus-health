<?php

    function register_theme_menus() {
        register_nav_menus(
        array(
                'header' => __( 'Header' ),
                'drawer' => __( 'Drawer' ),
                'footer' => __( 'Footer' )
            )
        );
    }
    add_action( 'init', 'register_theme_menus' );

    // =========================================================================
    // ADD RSS LINKS TO HEAD SECTION
    // =========================================================================
    add_theme_support('automatic-feed-links');

    // =========================================================================
    // ENABLES FEATURED IMAGES FOR PAGES AND POSTS
    // =========================================================================
    // This enables post thumbnails for all post types,
    // if you want to enable this feature for specific post types,
    // use the array to include the type of post
    ## add_theme_support('post-thumbnails', array('post', 'page'));
    add_theme_support('post-thumbnails');

    // =========================================================================
    // TITLE TAG - RECOMMENDED
    // =========================================================================
    // Since Version 4.1, themes should use add_theme_support() in the functions.php
    // file in order to support title tag
    function theme_slug_setup() {
        add_theme_support('title-tag');
    }
