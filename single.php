<?php get_header(); ?>

<div class="page">
    <?php if (have_posts()) : while(have_posts()) : the_post(); ?>

		<?php
			$post_type = get_field('post_type');
			$show_carousel = get_field('show_carousel');
			$images = get_field('the_carousel');
			$post_link = get_field('post_link');

			if ($post_type == 'video') {
				$video = get_field('video');
				$cover_image = get_field('cover_image');
				if ($cover_image != NULL) {
	                $video_image = $cover_image['sizes']['large'];
	            } else {
	                $video_image = urlToThumbnail($video);
	            }
			}

			if ($post_type == 'video') {
				$classes = 'layout single article video';
			} else {
				$classes = 'layout single article';
			}
		?>

		<section class="<?php echo $classes; ?>">
            <div class="wrapper">
				<article id="post-<?php the_ID(); ?>" <?php post_class('row'); ?>>
					<div class="float">
						<?php if ($post_type == 'video' && $video):?>
							<div class="image-wrapper">
								<div class="background-image" style="background-image: url(<?php echo $video_image; ?>);">
									<img class="visually-hide-image" src="<?php echo $video_image; ?>" alt="<?php the_title(); ?>">
									<a data-fancybox href="<?php echo the_field('video', false, false); ?>">
										<div class="play-btn-wrapper">
											<div class="play-btn-outer">
												<div class="play-btn-inner">
													<div class="play-btn">
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>
							</div>
						<?php elseif ($show_carousel && count($images) >= 1): ?>
							<div class="slider-wrapper">
								<div class="blog-slider">
									<?php foreach ($images as $image): ?>
										<div class="slide">
											<a href="<?php echo $image['sizes']['large'] ?>" data-fancybox="images" data-caption="<?php echo $image['alt']; ?>">
												<img class="image" src="<?php echo $image['sizes']['large'] ?>" alt="<?php echo $image['alt']; ?>">
											</a>
										</div>
									<?php endforeach; ?>
								</div>
								<div class="blog-slider-nav">
									<?php foreach ($images as $image): ?>
										<div class="slide">
											<img class="image" src="<?php echo $image['sizes']['thumbnail'] ?>" alt="<?php echo $image['alt']; ?>">
										</div>
									<?php endforeach; ?>
								</div>
							</div>
						<?php elseif (has_post_thumbnail()): ?>
							<div class="image-wrapper">
								<!-- <div class="background-image" style="background-image: url(<?php // the_post_thumbnail_url('large'); ?>);"> -->
									<?php // the_post_thumbnail('large', ['class' => 'visually-hide-image']); ?>
									<?php the_post_thumbnail('large'); ?>
								<!-- </div> -->
							</div>
						<?php endif; ?>
						<?php if($post_link) : ?>
							<div class="buttons">
								<a href="<?php echo $post_link['url']; ?>" class="btn" target="<?php echo $post_link['target']; ?>"><span><?php echo $post_link['title']; ?></span></a>
							</div>
						<?php endif; ?>
					</div>

					<div class="heading">
                        <ul class="details one-line">
                            <li><h1 class="h2 title"><?php the_title(); ?></h1></li>
                            <li><time datetime="<?php echo get_the_date(); ?>" class="p"><?php the_date(); ?></time></li>
							<?php $authors = get_field('author'); ?>
							<?php if ($authors): ?>
								<?php foreach ($authors as $author): ?>
									<li><a href="<?php echo get_permalink( $author ); ?>" class="p"><?php echo get_the_title( $author ); ?></a></li>
								<?php endforeach; ?>
							<?php endif; ?>
                            <?php $post_terms = wp_get_post_terms(get_the_ID(), 'category'); ?>
                            <?php foreach ($post_terms as $term) : ?>
                                <li><a href="/blog/?fwp_categories=<?php echo $term->slug; ?>" class="p"><?php echo $term->name; ?></a></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                    <div class="content">
                        <?php the_content(); ?>
                    </div>
				</article>

                <div class="pagination buttons">
					<div class="pager prev">
						<?php if (get_adjacent_post(false,'',true)): ?>
							<?php $prev_post_link_url = get_permalink( get_adjacent_post(false,'',true)->ID ); ?>
	                        <a class="btn prev" href="<?php echo $prev_post_link_url; ?>"><span>Previous Article</span></a>
						<?php endif; ?>
					</div>
                    <?php social_sharing('Share'); ?>
					<div class="pager next">
						<?php if (get_adjacent_post(false,'',false)): ?>
							<?php $next_post_link_url = get_permalink( get_adjacent_post(false,'',false)->ID ); ?>
	                        <a class="btn next" href="<?php echo $next_post_link_url; ?>"><span>Next Article</span></a>
						<?php endif; ?>
					</div>
                </div>

			</div>
		</section>

		<?php
	        $tags = wp_get_post_tags($post->ID);
	        $i = 0;
	        $x = 0;
	    ?>

	    <?php if ($tags) : ?>
	        <?php
	            $first_tag = $tags[0]->term_id;
	            $args=array(
	                'tag__in'           => array($first_tag),
	                'post__not_in'      => array($post->ID),
	                'posts_per_page'    => 6,
	                'caller_get_posts'  => 1
	            );
	        ?>
	        <?php $query = new WP_Query($args); ?>

	        <?php if( $query->have_posts() ) : ?>

	        <section id="listing-article-slider" class="layout listing post carousel background story-line-bottom">
				<div class="component intro">
					<h1 class="h2 subtitle">Related Posts</h1>
				</div>
				<div class="wrapper">
	                <div class="row">
                        <ul class="item-list">
                            <?php while ($query->have_posts()) : $query->the_post(); ?>
								<li id="post-<?php the_ID(); ?>" class="item<?php if ($post_type == 'video'): ?> video<?php endif; ?>" <?php if ($post_type == 'video' && $video):?>style="background-image: url('<?php echo $video_image; ?>');"<?php endif; ?>>
									<div class="item-wrapper">
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
												<p><?php echo wp_trim_words(get_the_excerpt(), $num_words = 20, $more = null); ?></p>
											</div>
										<?php endif; ?>
										<div class="footer">
											<div class="buttons">
												<a href="<?php the_permalink(); ?>" class="btn"><span><?php if ($post_type == 'video'): ?>View Video<?php else: ?>Read Article<?php endif; ?></span></a>
											</div>
										</div>
									</div>
								</li>
                                <?php $i++; ?>
                            <?php endwhile; ?>
                        </ul>
	                </div>
	            </div>
	        </section>

	        <?php wp_reset_query(); ?>
	        <?php endif; ?>
	    <?php endif; ?>

	<?php endwhile; endif; ?>
</div>

<?php get_footer(); ?>
