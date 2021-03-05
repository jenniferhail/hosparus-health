<?php

    //======================================================================
    // Med Chat App
    //======================================================================
    function medchatapp_script() {
        echo '<script type="text/javascript" async src="https://medchatapp.com/widget/widget.js?api-key=1cn7ECe3sUGNQlzJgMQ8Gw"></script>';
    }

    //======================================================================
    // Used to generate social sharing links, should be used inside of a loop
    //======================================================================
    function social_sharing($label) {
        echo '<ul class="social">';
            echo '<li class="label">' . $label . '</li>';
            echo '<li><a href="https://www.facebook.com/sharer/sharer.php?u=' . get_the_permalink() . '" target="_blank"><i class="fab fa-facebook-f"></i></a></li>';
            echo '<li><a href="https://twitter.com/home?status=' . get_the_title() . ' Link: ' . get_the_permalink() . '" target="_blank"><i class="fab fa-twitter"></i></a></li>';
        echo '</ul>';
    }

    //======================================================================
    // ACF Responsive Image
    //======================================================================
    function acf_responsive_image($image_id, $image_size, $max_width) {

        // check the image ID is not blank
        if ($image_id != '') {

            // set the default src image size
            $image_src = wp_get_attachment_image_url($image_id, $image_size);

            // set the srcset with various image sizes
            $image_srcset = wp_get_attachment_image_srcset($image_id, $image_size);

            // get the img alt meta data
            $image_alt = get_post_meta($image_id, '_wp_attachment_image_alt', TRUE);

            // generate the markup for the responsive image
            echo '<img alt="' . $image_alt . '" src="' . $image_src . '" srcset="' . $image_srcset . '" sizes="(max-width: ' . $max_width . ') 100vw, ' . $max_width . '" />';
        }
    }
	//======================================================================
	// REGISTER GOOGLE MAP API FOR ACF
	//======================================================================
	function hosparus_acf_init() {
		acf_update_setting('google_api_key', 'AIzaSyClqC80DXd3luWXcJZ-a0odx1q6ddTDVr0');
	}

    //======================================================================
    // REPLACE EXCERPT
    //======================================================================
    // Replaces the excerpt "Read More" text with a link
    function new_excerpt_more($more) {
        global $post;
        return '...';
        // return '<a class="moretag" href="'. get_permalink($post->ID) . '"> ...read more.</a>';
    }

    //======================================================================
    // CUSTOM EXCERPT
    //======================================================================
    function custom_excerpt($limit) {
        $excerpt = explode(' ', get_the_excerpt(), $limit);
        if (count($excerpt)>=$limit) {
            array_pop($excerpt);
            $excerpt = implode(' ', $excerpt) . '...';
        } else {
            $excerpt = implode(' ', $excerpt);
        }
        $excerpt = preg_replace('`[[^]]*]`', '', $excerpt);
        return $excerpt;
    }

	// =========================================================================
    // GET VIDEO THUMBNAIL FROM URL
    // =========================================================================
    function urlToThumbnail($video) {

        // Stripping down to URL
        preg_match('/src="(.+?)"/', $video, $matches_url );
        $src = $matches_url[1];

        // Attempting to get Youtube
        preg_match('/embed(.*?)?feature/', $src, $matches_id );
        if ($matches_id != NULL) {
            $id = $matches_id[1];
            $id = str_replace( str_split( '?/' ), '', $id );

            $MaxResURL = 'https://img.youtube.com/vi/' . $id . '/maxresdefault.jpg';

            $curl = curl_init();
            curl_setopt_array($curl, array(    
            CURLOPT_URL => $MaxResURL,
            CURLOPT_HEADER => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_NOBODY => true));

            $response = explode("\n", curl_exec($curl));
            curl_close($curl);

            //var_dump($response);        

            //If maxres image exists do something with it.
            if (strpos($response[0], '200') !== false) {    
                return $MaxResURL;
            } else {
                // print 'Some Other IMG';
                return 'https://img.youtube.com/vi/' . $id . '/hqdefault.jpg';
            }
        } else {
            // Attempting to get Vimeo
            preg_match('/video(.*?)?app_id/', $src, $matches_id );

            $id = $matches_id[1];
            $id = str_replace( str_split( '?/' ), '', $id );

            $hash = unserialize(file_get_contents("https://vimeo.com/api/v2/video/$id.php"));

            return $hash[0]['thumbnail_large'];
        }

    }
