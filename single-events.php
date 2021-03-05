<?php get_header(); ?>

<div class="page">
    <?php if (have_posts()) : while(have_posts()) : the_post(); ?>
        <?php
            $start_date_raw = get_field('start_date', false, false);
            $start_date_formatted = new DateTime($start_date_raw);
            $start_date = get_field('start_date');
            $start_time = get_field('start_time');
			$end_date = get_field('end_date');
            $end_time = get_field('end_time');
            $location = get_field('location');

            $flyer = get_field('flyer');
            $event_link = get_field('event_link');

			$show_carousel = get_field('show_carousel');
			$images = get_field('the_carousel');

            $buttons = [];

            if ($flyer) {
                array_push($buttons, array(
                    'title' 	=> 'Download Flyer',
                    'url'   	=> $flyer['url'],
					'target' 	=> '_blank',
                ));
            }

            if ($event_link) {
                array_push($buttons, array(
                    'title' 	=> $event_link['title'],
                    'url'   	=> $event_link['url'],
					'target' 	=> $event_link['target'],
                ));
            }

        ?>
        <section class="layout single article">
            <div class="wrapper">

                <article id="post-<?php the_ID(); ?>" <?php post_class('row'); ?>>

						<div class="float">
							<?php if ($show_carousel && $images): ?>
								<div class="slider-wrapper">
									<div class="blog-slider-1 blog-slider">
										<?php foreach ($images as $image): ?>
											<div class="slide">
												<a href="<?php echo $image['sizes']['large'] ?>" data-fancybox="images" data-caption="<?php echo $image['alt']; ?>">
													<img class="image" src="<?php echo $image['sizes']['large'] ?>" alt="<?php echo $image['alt']; ?>">
												</a>
											</div>
										<?php endforeach; ?>
									</div>
									<div class="blog-slider-nav-1 blog-slider-nav">
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

							<?php if($buttons) : ?>
	                            <div class="buttons">
	                                <?php foreach($buttons as $button) : ?>
	                                    <a href="<?php echo $button['url']; ?>" class="btn" target="<?php echo $button['target']; ?>"><span><?php echo $button['title']; ?></span></a>
	                                <?php endforeach; ?>
	                            </div>
	                        <?php endif; ?>
	                    </div>

                    <div class="heading">
                        <ul class="details one-line">
                            <li><h1 class="h2 title"><?php the_title(); ?></h1></li>
							<?php if ($start_date): ?>
	                            <li><time datetime="<?php echo $start_date_formatted->format('Y-m-d'); ?>" class="p"><?php echo $start_date_formatted->format('F j, Y'); ?><?php if ($end_date != '' && $end_date != $start_date): ?> – <?php echo $end_date; ?><?php endif; ?></time></li>
							<?php endif; ?>
							<?php if ($start_time): ?>
								<li><time datetime="<?php echo $start_time; ?>" class="p"><?php echo $start_time; ?><?php if ($end_time): ?> – <?php echo $end_time; ?><?php endif; ?></time></li>
							<?php endif; ?>
                            <?php if($location) : ?>
                                <?php foreach($location as $location) : ?>
                                    <li><a class="p" href="<?php echo $location->guid; ?>"><?php echo $location->post_title; ?></a></li>
                                <?php endforeach; ?>
                            <?php endif; ?>
                            <?php $post_terms = wp_get_post_terms(get_the_ID(), 'event_categories'); ?>
                            <?php foreach ($post_terms as $term) : ?>
                                <li><a href="/events/?fwp_event_type=<?php echo $term->slug; ?>" class="p"><?php echo $term->name; ?></a></li>
                            <?php endforeach; ?>
                        </ul>
						<?php social_sharing('Share'); ?>
                    </div>

                    <div class="content">
                        <?php the_content(); ?>
                    </div>

                </article>

                <div class="pagination buttons">
					<a id="back-to-events" class="btn" href="/events/"><span>Back to Events</span></a>
                </div>

            </div>
        </section>
    <?php endwhile; endif; ?>
</div>

<?php get_footer(); ?>
