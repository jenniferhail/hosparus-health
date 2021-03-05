<?php get_header(); ?>

<?php
$cat_id = $wp_query->get_queried_object_id();
$post = $posts[0]; // Hack. Set $post so that the_date() works.
$view = 'grid';
?>

<main id="main">

	<section class="layout listing post grid background">

		<div class="component intro">
			<div class="wrapper">
				<?php /* If this is a category archive */ if (is_category()) { ?>
					<h2 class="h2 subtitle"><?php single_cat_title(); ?></h2>

				<?php /* If this is a tag archive */ } elseif( is_tag() ) { ?>
					<h2 class="h2 subtitle">Posts Tagged &#8216;<?php single_tag_title(); ?>&#8217;</h2>

				<?php /* If this is a daily archive */ } elseif (is_day()) { ?>
					<h2 class="h2 subtitle">Archive for <?php the_time('F jS, Y'); ?></h2>

				<?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
					<h2 class="h2 subtitle">Archive for <?php the_time('F, Y'); ?></h2>

				<?php /* If this is a yearly archive */ } elseif (is_year()) { ?>
					<h2 class="h2 subtitle">Archive for <?php the_time('Y'); ?></h2>

				<?php /* If this is an author archive */ } elseif (is_author()) { ?>
					<h2 class="h2 subtitle">Author Archive</h2>

				<?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
					<h2 class="h2 subtitle">Blog Archives</h2>
				<?php } ?>
			</div>
		</div>

		<div class="wrapper">

			<?php if (have_posts()) : ?>
				<div class="row">
					<div class="item-list">
						<?php while (have_posts()) : the_post(); ?>
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
							<li id="post-<?php the_ID(); ?>" class="item<?php if ($post_type == 'video'): ?> video<?php endif; ?>" <?php if ($post_type == 'video' && $video):?>style="background-image: url('<?php echo $video_image; ?>');"<?php endif; ?>>
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
							</li>
						<?php endwhile; ?>
					</div>
				</div>
			<?php else : ?>
				<h1>No posts found.</h1>
			<?php endif; ?>

		</div>

	</section>

</main>

<?php get_footer(); ?>
