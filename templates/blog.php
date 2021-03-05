<?php
/* Template Name: Blog */
get_header();

$filters = false;
if ($_GET) {
	$filters = true;
}
?>

<section class="layout listing blog-filters">
	<div class="component intro">
		<div class="wrapper">
			<h2 class="h2 subtitle"><?php the_title(); ?></h2>
		</div>
	</div>
	<div class="wrapper">
		<div class="row">
			<div class="fieldset search-bar">
				<div class="col col-category">
					<?php echo facetwp_display( 'facet', 'categories' ); ?>
				</div>
				<div class="col col-search">
					<?php echo facetwp_display( 'facet', 'blog_search' ); ?>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="blog-wrapper<?php if ($filters = true): ?> hide<?php endif; ?>">
	<div class="blog-inner">

	<?php if(have_rows('layouts')) : ?>

		<?php while (have_rows('layouts')) : the_row(); ?>

			<?php $layout_type = get_row_layout(); ?>
			<?php $layout_index = 'layout-' . get_row_index(); ?>
			<?php $layout_type = get_row_layout(); ?>
			<?php include(locate_template('layouts/layout-' . $layout_type . '.php')); ?>

		<?php endwhile; ?>

	<?php endif; ?>

	</div>
</div>

<?php
	// WP_Query arguments
	$args = array(
		'post_type'         => 'post',
		'facetwp'           => true,
		'posts_per_page' 	=> 12
	);

	// The Query
	$query = new WP_Query($args);
?>

<section id="facet-query" class="facet-query layout listing post grid background<?php if ($filters = false): ?> hide<?php endif; ?>">
	<?php if ($query->have_posts()): ?>
		<div class="wrapper">
			<div class="row">
				<ul class="item-list">
					<?php while ($query->have_posts()): $query->the_post(); ?>
						<?php
							$post_type = get_field('post_type');

							if ($post_type == 'video') {
								$video = get_field('video');
								$cover_image = get_field('cover_image');

								if ($cover_image != NULL) {
					                $video_image = $cover_image['sizes']['large'];
					            } else {
					                $video_image = urlToThumbnail($video);
					            }
							}
						?>
						<li id="post-<?php the_ID(); ?>" class="item<?php if ($post_type == 'video'): ?> video<?php endif; ?>">
							<div class="item-wrapper" <?php if ($post_type == 'video' && $video):?>style="background-image: url('<?php echo $video_image; ?>');"<?php endif; ?>>
								<div class="heading">
									<ul class="details one-line">
										<li><h3 class="title"><?php the_title(); ?></h3></li>
										<?php if ($post_type == 'default'): ?>
											<li><time class="p" datetime=""><?php echo get_the_date(); ?></time></li>
											<?php $post_terms = wp_get_post_terms(get_the_ID(), 'category'); ?>
											<?php foreach ($post_terms as $term) : ?>
												<li><a href="<?php echo get_term_link($term->term_id, $term->taxonomy); ?>" class="p"><?php echo $term->name; ?></a></li>
											<?php endforeach; ?>
										<?php endif; ?>
									</ul>
								</div>
								<?php if ($post_type == 'default'): ?>
									<div class="content">
										<?php echo wp_trim_words(get_the_excerpt(), $num_words = 20, $more = null); ?>
									</div>
								<?php endif; ?>
								<div class="footer">
									<div class="buttons">
										<a href="<?php the_permalink(); ?>" class="btn"><span><?php if ($post_type == 'video'): ?>View Video<?php else: ?>Read Article<?php endif; ?></span></a>
									</div>
									<?php if ($view == 'list'): ?>
										<?php social_sharing('Share'); ?>
									<?php endif; ?>
								</div>
							</div>
						</li>
					<?php endwhile; wp_reset_postdata(); ?>
				</ul>
			</div>
			<?php echo facetwp_display( 'pager' ); // Display pagination ?>
		</div>
	<?php else: ?>
		<h3 class="h4 align-text-center">No posts found.</h3>
	<?php endif; ?>
</section>

<?php get_footer(); ?>
