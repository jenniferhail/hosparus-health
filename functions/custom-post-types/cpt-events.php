<?php
    function events() {
        $labels = [
            'name'                  => _x('Events', 'Post Type General Name', 'text_domain'),
            'singular_name'         => _x('Event', 'Post Type Singular Name', 'text_domain'),
            'menu_name'             => __('Events', 'text_domain'),
            'name_admin_bar'        => __('Events', 'text_domain'),
            'archives'              => __('Item Archives', 'text_domain'),
            'attributes'            => __('Item Attributes', 'text_domain'),
            'parent_item_colon'     => __('Parent Event:', 'text_domain'),
            'all_items'             => __('All Events', 'text_domain'),
            'add_new_item'          => __('Add New Event', 'text_domain'),
            'add_new'               => __('Add Event', 'text_domain'),
            'new_item'              => __('New Event', 'text_domain'),
            'edit_item'             => __('Edit Event', 'text_domain'),
            'update_item'           => __('Update Event', 'text_domain'),
            'view_item'             => __('View Event', 'text_domain'),
            'view_items'            => __('View Events', 'text_domain'),
            'search_items'          => __('Search Events', 'text_domain'),
            'not_found'             => __('Not found', 'text_domain'),
            'not_found_in_trash'    => __('Not found in Trash', 'text_domain'),
            'featured_image'        => __('Featured Image', 'text_domain'),
            'set_featured_image'    => __('Set featured image', 'text_domain'),
            'remove_featured_image' => __('Remove featured image', 'text_domain'),
            'use_featured_image'    => __('Use as featured image', 'text_domain'),
            'insert_into_item'      => __('Insert into item', 'text_domain'),
            'uploaded_to_this_item' => __('Uploaded to this item', 'text_domain'),
            'items_list'            => __('Items list', 'text_domain'),
            'items_list_navigation' => __('Items list navigation', 'text_domain'),
            'filter_items_list'     => __('Filter items list', 'text_domain'),
        ];
        $args = [
            'label'                 => __('Event', 'text_domain'),
            'description'           => __('A collection of events.', 'text_domain'),
            'labels'                => $labels,
            'supports'              => [ 'title', 'editor', 'thumbnail' ],
            'taxonomies'            => [ 'event_categories' ],
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 20,
            'menu_icon'             => 'dashicons-format-chat',
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'show_in_rest'          => true,
            'can_export'            => true,
            'has_archive'           => false,
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'capability_type'       => 'page',
            'rewrite'               => array(
				'slug' => 'events',
				'with_front' => false
			),
        ];
        register_post_type('events', $args);
    }
    add_action('init', 'events', 0);
