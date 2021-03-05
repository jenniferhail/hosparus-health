<?php get_header(); ?>

<main id="main">

	<section class="layout listing search events post list">
		<div class="component intro">
			<h1 class="h2 subtitle">Search Results</h1>
		</div>
		<div class="wrapper">
			<div class="filter-wrapper">
				<?php // get_search_form(); ?>
				<div class="fieldset search-bar">
					<div class="col col-search">
						<?php echo facetwp_display( 'facet', 'blog_search' ); ?>
					</div>
				</div>
			</div>

			<?php if (have_posts()) : ?>

				<ul class="item-list">

					<?php while (have_posts()) : the_post(); ?>

						<?php
							$post_type = get_post_type($post);

							switch ($post_type) {
					            case 'faqs':
									// echo 'faqs post';
					                require('layouts/search-results/faq.php');
					                break;
					            case 'events':
									// echo 'events post';
					                require('layouts/search-results/event.php');
					                break;
					            case 'people':
									// echo 'people post';
					                require('layouts/search-results/person.php');
					                break;
					            case 'post':
									// echo 'normal post';
					                require('layouts/search-results/post.php');
					                break;
					            case 'locations':
									// echo 'locations post';
					                require('layouts/search-results/locations.php');
					                break;
								case 'page':
									// echo 'page';
					                require('layouts/search-results/page.php');
					                break;
					            default:
					                break;
					        }
						?>

					<?php endwhile; ?>

				</ul>

				<?php get_template_part('nav'); ?>

			<?php else : ?>

				<h1>No results found.</h1>

			<?php endif; ?>

		</div>
	</section>

</main>

<?php get_footer(); ?>
