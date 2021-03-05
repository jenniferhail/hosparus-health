<?php
/* Template Name: Search Results */
get_header();

?>

<section class="layout listing search events post list">
	<div class="component intro">
		<h1 class="h2 subtitle">Search Results</h1>
	</div>
	<div class="wrapper">
		<div class="filter-wrapper">
			<div class="fieldset search-bar">
				<div class="col col-search">
					<?php echo facetwp_display( 'facet', 'site_search' ); ?>
				</div>
			</div>
		</div>

		<?php
            $query = new WP_Query(
                array(
                    'post_type'         => array('faqs', 'events', 'people', 'post', 'locations', 'page'),
                    'posts_per_page'    => 12,
                    'facetwp'           => true,
                    'order'             => 'DESC',
                    'orderby'           => 'publish_date',
                )
            );
        ?>

		<div>
		<?php if ($query->have_posts()) : ?>

			<ul class="item-list">

				<?php while ($query->have_posts()) : $query->the_post(); ?>

					<?php
						$post_type = get_post_type($post);

						switch ($post_type) {
				            case 'faqs':
								// echo 'faqs post';
				                include(locate_template('layouts/search-results/faq.php'));
				                break;
				            case 'events':
								// echo 'events post';
				                include(locate_template('layouts/search-results/event.php'));
				                break;
				            case 'people':
								// echo 'people post';
				                include(locate_template('layouts/search-results/person.php'));
				                break;
				            case 'post':
								// echo 'normal post';
				                include(locate_template('layouts/search-results/post.php'));
				                break;
				            case 'locations':
								// echo 'locations post';
				                include(locate_template('layouts/search-results/locations.php'));
				                break;
							case 'page':
								// echo 'page';
				                include(locate_template('layouts/search-results/page.php'));
				                break;
				            default:
				                break;
				        }
					?>

				<?php endwhile; ?>

			</ul>

			<?php echo facetwp_display( 'pager' ); // Display pagination ?>
			<?php get_template_part('nav'); ?>

		<?php else : ?>

			<h3 class="h4 align-text-center">No results found.</h3>

		<?php endif; ?>
		</div>

	</div>
</section>

<?php get_footer(); ?>
