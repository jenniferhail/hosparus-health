<?php

	//======================================================================
	// FACETWP - ADDING SUBMIT BUTTON TO FACETWP
	//======================================================================
	add_action('wp_footer', 'add_facetwp_submit', 100);

	function add_facetwp_submit() {
	?>
	<script>(function($) {
	$(document).on('facetwp-loaded', function() {
	   $('.facetwp-search-wrap').each(function() {
		   if ($(this).find('.facetwp-search-submit').length < 1) {
			   $(this).find('.facetwp-search').after('<button onclick="FWP.reset()">Reset</button>');
			   $(this).find('.facetwp-search').after('<button class="facetwp-search-submit" onclick="FWP.refresh()">Submit</button>');
		   }
	   });
	});
	})(jQuery);
	</script>
	<?php
	}

	//======================================================================
	// FACETWP - ADDING NEXT/PREV buttons to FACETWP PAGER
	//======================================================================
	add_filter( 'facetwp_pager_html', function( $output, $params ) {
		$output = '';
		$page = $params['page'];
		$total_pages = $params['total_pages'];

		if ( 1 < $total_pages ) {

			// Previous page (NEW)
			if ( $page > 1 ) {
				$output .= '<a class="facetwp-page" data-page="' . ($page - 1) . '">Previous</a>';
			}

			// Current page
			$output .= '<a class="facetwp-page active" data-page="' . $page . '">' . $page . '</a>';

			for ( $i = 1; $i <= 2; $i++ ) {
				if ( $total_pages >= ( $page + $i ) ) {
					$output .= '<a class="facetwp-page" data-page="' . ($page + $i) . '">' . ($page + $i) . '</a>';
				}
			}

			// Next page (NEW)
			if ( $page < $total_pages ) {
				$output .= '<a class="facetwp-page" data-page="' . ($page + 1) . '">Next</a>';
			}
		}

		return $output;
	}, 10, 2 );

    //======================================================================
    // ADDING LABELS TO FACETWP
    //======================================================================
    function fwp_add_facet_labels() {
    ?>
    <script>
    (function($) {
        $(document).on('facetwp-loaded', function() {
            $('.facetwp-facet').each(function() {
                var $facet = $(this);
                var facet_name = $facet.attr('data-name');
                var facet_label = FWP.settings.labels[facet_name];

                if ($facet.closest('.facet-wrap').length < 1 && $facet.closest('.facetwp-flyout').length < 1) {
                    $facet.wrap('<div class="facet-wrap"></div>');
                    $facet.before('<h3 class="h6 facet-label">' + facet_label + '</h3>');
                }
            });
        });
    })(jQuery);
    </script>
    <?php
    }
    add_action( 'wp_footer', 'fwp_add_facet_labels', 100 );

    //======================================================================
    // ADDING FACETWP SUPPORT FOR WP QUERY
    //======================================================================
    add_filter( 'facetwp_is_main_query', function( $bool, $query ) {
        return ( true === $query->get( 'facetwp' ) ) ? true : $bool;
    }, 10, 2 );

    //======================================================================
    // ADD AN ADMIN SCRIPT TO MANAGE JS
    //======================================================================
    function admin_resources() {
        wp_register_script('admin_script', get_stylesheet_directory_uri() . '/app/assets/js/admin-scripts.min.js');
        wp_enqueue_script('admin_script');
    }
    add_action('admin_enqueue_scripts', 'admin_resources');

    //======================================================================
    // Add responsive container to embeds
    //======================================================================
    function video_embed_wrapper($html) {
        return '<div class="video-wrapper">' . $html . '</div>';
    }

    // =========================================================================
    // REGISTERING SIDEBAR
    // =========================================================================
    if (function_exists('register_sidebar')) {
        register_sidebar([
            'name' => 'Sidebar Widgets',
            'id'   => 'sidebar-widgets',
            'description'   => 'These are widgets for the sidebar.',
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h2>',
            'after_title'   => '</h2>'
        ]);
    }

    // =========================================================================
    // ENABLES 100% JPEG QUALITY
    // =========================================================================
    // Wordpress will compress uploads to 90% of their original size
    function high_jpg_quality() {
        return 100;
    }

    // =========================================================================
    // ADD APP OPTIONS FOR VARIOUS SITE COMPONENTS
    // =========================================================================
    if(function_exists('acf_add_options_page')) {
    	acf_add_options_page();
    }
