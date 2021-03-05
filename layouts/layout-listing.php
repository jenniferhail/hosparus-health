<?php
    $content = get_sub_field('content');
	$background_color = get_sub_field('background_color');

    $content_type = get_sub_field('content_type');
    $view = get_sub_field('view');
    $order = get_sub_field('order');
    $amount = get_sub_field('amount');
    $posts_per_page = '12';
    $order_by = 'title';
	$filter = get_sub_field('enable_filters');
    $filter_by = get_sub_field('filter_by');

	$post_category = get_sub_field('post_category');
	$faq_category = get_sub_field('faq_category');
	$event_category = get_sub_field('event_category');
    $tax_query = [];
    $meta_query = [];
    $custom_ids = '';

    $custom_events = get_sub_field('custom_events');
    $custom_posts = get_sub_field('custom_posts');
    $custom_people = get_sub_field('custom_people');
    $custom_faqs = get_sub_field('custom_faqs');
	$custom_locations = get_sub_field('custom_locations');

	if ($content_type == 'post') {
		$order_by = 'date';
	}

	if ($post_category) {
		array_push( $tax_query, array(
			'taxonomy'	=>	'category',
			'field'		=>	'term_id',
			'terms'		=>	$post_category,
		));
	}

	if ($faq_category) {
		array_push( $tax_query, array(
			'taxonomy'	=>	'faq_topics',
			'field'		=>	'term_id',
			'terms'		=>	$faq_category,
		));
	}

	if ($event_category) {
		array_push( $tax_query, array(
			'taxonomy'	=>	'event_categories',
			'field'		=>	'term_id',
			'terms'		=>	$event_category,
		));
	}

    if ($amount == 'custom') {
        $order_by = 'post__in';
    } elseif ($amount == 'some') {
        $posts_per_page = get_sub_field('posts_per_page');
    }

    if ($amount == 'custom' && $content_type == 'events') {
        $custom_ids = get_sub_field('custom_events', false, false);
    } elseif ($amount == 'custom' && $content_type == 'post') {
        $custom_ids = get_sub_field('custom_posts', false, false);
    } elseif ($amount == 'custom' && $content_type == 'faqs') {
        $custom_ids = get_sub_field('custom_faqs', false, false);
    } elseif ($amount == 'custom' && $content_type == 'people') {
        $custom_ids = get_sub_field('custom_people', false, false);
    } elseif ($amount == 'custom' && $content_type == 'locations') {
        $custom_ids = get_sub_field('custom_locations', false, false);
    }

    $posts = get_sub_field('select_items');

    $classes = 'layout listing ' . $content_type . ' ' . $view;

	if ($content_type == 'people' && $view == 'grid' && $background_color || $content_type == 'post' && $view == 'grid' || $view == 'carousel') {
		$classes .= ' background';
	}

    if ($content_type == 'faqs') {
        $classes .= ' accordion list';
    }

	if ($filter) {
		$facetwp = true;
	} else {
		$facetwp = false;
	}

?>

<section id="<?php echo $layout_index; ?>" class="<?php echo $classes; ?>">
	<?php include(locate_template('layouts/component-intro.php')); ?>
	<?php if($filter) : ?>
		<div class="filters wrapper" data-aos="fade" data-aos-once="true" data-aos-delay="500" data-aos-anchor="#<?php echo $layout_index; ?> .intro">
			<div class="row">
				<div class="fieldset search-bar">
						<?php
							switch ($content_type) {
					            case 'faqs':
									echo '<div class="col col-category">';
						                echo facetwp_display( 'facet', 'faq_categories' );
									echo '</div>';
									echo '<div class="col col-search">';
										echo facetwp_display( 'facet', 'site_search' );
									echo '</div>';
					                break;
					            case 'events':
									echo '<div class="col col-category">';
						                echo facetwp_display( 'facet', 'event_type' );
									echo '</div>';
									echo '<div class="col col-category">';
										echo facetwp_display( 'facet', 'event_location' );
									echo '</div>';
									echo '<div class="col col-search">';
										echo facetwp_display( 'facet', 'event_date' );
									echo '</div>';
									echo '<button class="btn reset" onclick="FWP.reset()">Reset</button>';
					                break;
					            case 'people':
									echo '<div class="col col-category">';
						                echo facetwp_display( 'facet', 'people_categories' );
									echo '</div>';
									echo '<div class="col col-search">';
										echo facetwp_display( 'facet', 'site_search' );
									echo '</div>';
					                break;
					            case 'post':
									echo '<div class="col col-category">';
						                echo facetwp_display( 'facet', 'post_categories' );
									echo '</div>';
									echo '<div class="col col-search">';
										echo facetwp_display( 'facet', 'site_search' );
									echo '</div>';
					                break;
					            default:
					                break;
					        }
						?>
				</div>
			</div>
		</div>
	<?php endif; ?>

	<?php if ($content): ?>
		<div class="description">
			<div class="wrapper">
				<div data-aos="fade" data-aos-once="true">
					<?php echo $content; ?>
				</div>
			</div>
		</div>
	<?php endif; ?>

	<?php
		if ($content_type == 'events') {
			// WP_Query arguments
			$args = array(
				'post_type'         => array($content_type),
				'facetwp'       	=> $facetwp,
				'posts_per_page'    => $posts_per_page,
				'post__in'          => $custom_ids,
				'tax_query'         => $tax_query,
				'meta_key'			=> 'start_date',
				// compare meta value to todays date. needs to match format returned by acf
				// 'meta_value'        => date("Ymd"),
				'meta_value' 		=> date("Ymd", time() - 60 * 60 * 24),
				'meta_compare'      => '>=',
				'orderby'			=> 'meta_value',
				'order'				=> 'ASC'
			);
		} else {
			// WP_Query arguments
			$args = array(
				'post_type'         => array($content_type),
				'facetwp'       	=> $facetwp,
				'posts_per_page'    => $posts_per_page,
				'post__in'          => $custom_ids,
				'order'             => $order,
				'orderby'           => $order_by,
				'tax_query'         => $tax_query,
				'meta_key'			=> $meta_query,
			);
		}

		// The Query
		$query = new WP_Query($args);
	?>

	<div class="wrapper">
		<?php if($query->have_posts()): ?>
			<div class="row">
				<ul class="item-list">
					<?php
						while ($query->have_posts()): $query->the_post();
						switch ($content_type) {
				            case 'faqs':
				                require('list-types/faq.php');
				                break;
				            case 'events':
				                require('list-types/event.php');
				                break;
				            case 'people':
				                require('list-types/person.php');
				                break;
				            case 'post':
				                require('list-types/post.php');
				                break;
				            case 'locations':
				                require('list-types/locations.php');
				                break;
				            default:
				                break;
				        } ?>
					<?php endwhile;?>
					<?php wp_reset_postdata(); ?>
				</ul>
			</div>
			<?php if ($filter): ?>
				<?php echo facetwp_display( 'pager' ); // Display pagination ?>
			<?php endif; ?>
		<?php else: ?>
			<h3 class="h4 align-text-center">No <?php echo $content_type; ?> found.</h3>
		<?php endif; ?>
	</div>

    <div class="wrapper layout-btns">
        <?php include(locate_template('layouts/component-button.php')); ?>
    </div>

</section>
