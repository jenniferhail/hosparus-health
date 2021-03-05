<?php
    function faq_topics() {
        $labels = array(
            'name'                       => 'FAQ Topics',
            'singular_name'              => 'FAQ Topic',
            'menu_name'                  => 'FAQ Topics',
            'all_items'                  => 'All FAQ Topics',
            'parent_item'                => 'Parent FAQ Topic',
            'parent_item_colon'          => 'Parent FAQ Topic:',
            'new_item_name'              => 'New FAQ Topic',
            'add_new_item'               => 'Add FAQ Topic',
            'edit_item'                  => 'Edit FAQ Topic',
            'update_item'                => 'Update FAQ Topic',
            'view_item'                  => 'View FAQ Topic',
            'separate_items_with_commas' => 'Separate items with commas',
            'add_or_remove_items'        => 'Add or remove items',
            'choose_from_most_used'      => 'Choose from the most used',
            'popular_items'              => 'Popular Items',
            'search_items'               => 'Search Items',
            'not_found'                  => 'Not Found',
            'no_terms'                   => 'No items',
            'items_list'                 => 'Items list',
            'items_list_navigation'      => 'Items list navigation',
        );
        $args = array(
            'labels'                     => $labels,
            'hierarchical'               => true,
            'public'                     => true,
            'show_ui'                    => true,
            'show_admin_column'          => true,
            'show_in_nav_menus'          => false,
            'show_tagcloud'              => false,
        );
        register_taxonomy( 'faq_topics', array( 'faqs' ), $args );
    
    }
    add_action( 'init', 'faq_topics', 0 );
    