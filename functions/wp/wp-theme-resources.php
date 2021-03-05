<?php
    // =========================================================================
    // REGISTER & ENQUEUE
    // =========================================================================
    function mightyResources() {
        $css_file = get_stylesheet_directory() . '/dist/assets/css/style.min.css';
        wp_enqueue_style('theme', get_stylesheet_directory_uri() . '/dist/assets/css/style.min.css', '', date('m.d.Y.H.i.s', filemtime($css_file)));
		wp_dequeue_style('wp-block-library');

        wp_deregister_script('jquery');
        wp_register_script('jquery', ('//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'), '', '2.2.4', false);
        wp_enqueue_script('jquery');

        // wp_enqueue_script('fontawesome-kit', '//kit.fontawesome.com/72e34829c8.js', '', '1.0', false);
		wp_enqueue_script('google-maps', '//maps.googleapis.com/maps/api/js?key=AIzaSyClqC80DXd3luWXcJZ-a0odx1q6ddTDVr0', '', '1.0', false);

		wp_enqueue_script('aos', '//unpkg.com/aos@2.3.1/dist/aos.js', '', '2.3.1', true);
        wp_enqueue_script('theme', get_stylesheet_directory_uri() . '/dist/assets/js/scripts.min.js', ['jquery'], '1.0.6', true);

		wp_localize_script('theme', 'globalVar', array(
		    'themePath' => get_template_directory_uri(),
		));
    }

    //======================================================================
    // META TAGS
    //======================================================================
    // Adding meta so that we can load it in non Wordpress pages i.e. Netforum
    function add_meta_tags() {
        echo '<meta name="viewport" content="width=device-width,initial-scale=1" />' . "\n";
    }

    //======================================================================
    // ACF Options Page
    //======================================================================
    if (function_exists('acf_add_options_page')) {
        acf_add_options_page([
            'page_title' 	=> 'App Options',
            'menu_title'	=> 'App Options',
            'menu_slug' 	=> 'app-options',
            'capability'	=> 'manage_sites',
            'redirect'		=> false
        ]);
    }
