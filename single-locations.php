<?php get_header(); ?>

<div class="page">
    <?php if (have_posts()) : while(have_posts()) : the_post(); ?>

		<?php
			$address_line_1 = get_field('address_line_1');
			$address_line_2 = get_field('address_line_2');
			$google_map = get_field('google_map');

			if ($google_map) {
				$address = $google_map['address'];
				$directions_link = 'https://www.google.com/maps/search/?api=1&query=' . urlencode( str_replace( '% ', ' ' , $address ) );
			}

			$office_phone_1 = get_field('office_phone_1');
			$office_phone_2 = get_field('office_phone_2');
			$fax = get_field('fax');
			$grief_counseling_phone_1 = get_field('grief_counseling_phone_1');
			$grief_counseling_phone_2 = get_field('grief_counseling_phone_2');
			$zip_codes = get_field('zip_codes');
			$counties_served = get_field('counties_served');
			$staff = get_field('staff');
		?>

        <section class="layout locations map">
            <div class="wrapper">
				<div class="row">
					<div class="col">
						<div class="intro">
							<h1 class="h2 subtitle"><?php the_title(); ?></h1>
						</div>
						<div class="content">
							<?php if ($address_line_1): ?>
								<p class="italic">
									<?php if ($directions_link): ?>
										<a href="<?php echo $directions_link; ?>" target="_blank">
									<?php endif; ?>
										<?php echo $address_line_1; ?><?php if ($address_line_2): ?>, <?php echo $address_line_2; ?><?php endif; ?>
									<?php if ($directions_link): ?></a><?php endif; ?>
								</p>
							<?php endif; ?>
							<?php if ($office_phone_1): ?>
								<p class="italic">Phone: <?php echo $office_phone_1; ?><?php if ($office_phone_2): ?> or <?php echo $office_phone_2; ?><?php endif; ?></p>
							<?php endif; ?>
							<?php if ($fax): ?>
								<p class="italic">Fax: <?php echo $fax; ?></p>
							<?php endif; ?>
							<?php if ($grief_counseling_phone_1): ?>
								<p class="italic">Grief Counseling: <?php echo $grief_counseling_phone_1; ?><?php if ($grief_counseling_phone_2): ?> or <?php echo $grief_counseling_phone_2; ?><?php endif; ?></p>
							<?php endif; ?>
							<?php the_content(); ?>
						</div>
						<?php

						    $buttons = get_field('buttons');
						    $display_button = $buttons['display_button'];
						    $align_buttons = $buttons['align_buttons'];
						    $button = $buttons['button'];

						    $classes = 'buttons ' . $align_buttons;
						?>
						<?php if ( $display_button ) : ?>
						    <?php if ($button) : ?>
						        <div class="<?php echo $classes; ?>">
						        <?php foreach($button as $item): ?>
						            <?php
						                $link = $item['link'];
						                if ($link) {
						                    $link_url = $link['url'];
						                    $link_title = $link['title'];
						                    $link_target = $link['target'];

						                    if ($link_target == null) {
						                        $link_target = '_self';
						                    }
						                    echo '<a href="' . $link_url . '" target="' . $link_target . '" class="btn"><span>' . $link_title . '</span></a>';
						                }
						            ?>
						        <?php endforeach; ?>
						        </div>
						    <?php endif; ?>
						<?php endif; ?>
					</div>
					<div class="col">
						<div class="map-wrapper">
							<div id="map" class="map-canvas">
							</div>
						</div>
						<?php if ($counties_served): ?>
							<div class="caption italic">
								<p><?php echo $counties_served; ?></p>
							</div>
						<?php endif; ?>
					</div>
				</div>
            </div>
        </section>

		<?php
	        // WP_Query arguments
	        $args_events = array(
	            'post_type'         => 'events',
	            'posts_per_page'    => '-1',
				'meta_query'        => array(
					array(
						'key'		=> 'location',
						'value'		=> '"' . get_the_ID() . '"',
						'compare'	=> 'LIKE'
					)
				)
	        );

	        // The Query
	        $query_events = new WP_Query($args_events);
		?>

		<?php if($query_events->have_posts()): ?>
			<section class="layout listing events list">
				<div class="component intro">
					<div class="wrapper">
						<h1 class="h2 subtitle">Location’s Events</h1>
					</div>
				</div>
				<div class="wrapper">
					<div class="row">
						<ul class="item-list">
							<?php while ($query_events->have_posts()): $query_events->the_post(); ?>
								<?php
									$start_date_raw = get_field('start_date', false, false);
									$start_date_formatted = new DateTime($start_date_raw);
									$start_date = get_field('start_date');
									$start_time = get_field('start_time');
									$end_time = get_field('end_time');
									$location = get_field('location');
								?>
								<li class="item">
									<div class="icon">
										<time class="date" datetime="<?php echo $start_date_formatted->format('Y-m-d'); ?>">
											<?php echo $start_date_formatted->format('M'); ?></br >
											<?php echo $start_date_formatted->format('d'); ?>
										</time>
									</div>
									<div class="content">
										<div class="heading">
											<ul class="details one-line">
												<li><h2 class="h4 title"><?php the_title(); ?></h2></li>
												<?php if ($start_date): ?>
													<li><time class="p" datetime="<?php echo $start_date_formatted->format('Y-m-d'); ?>"><?php echo $start_date; ?></time></li>
												<?php endif; ?>
												<?php if ($start_time): ?>
													<li><time class="p" datetime="<?php echo $start_time; ?>"><?php echo $start_time; ?><?php if($end_time){echo ' &ndash; ' . $end_time;}; ?></time></li>
												<?php endif; ?>
												<?php if($location) : ?>
													<?php foreach($location as $location) : ?>
														<li><a class="p" href="<?php echo $location->guid; ?>"><?php echo $location->post_title; ?></a></li>
													<?php endforeach; ?>
												<?php endif; ?>
											</ul>
										</div>
										<?php echo wp_trim_words(get_the_excerpt(), $num_words = 20, $more = null); ?>
										<div class="footer">
											<div class="buttons">
												<a href="<?PHP the_permalink(); ?>" class="btn"><span>View Event</span></a>
											</div>
										</div>
									</div>
								</li>
							<?php endwhile;?>
							<?php wp_reset_postdata(); ?>
						</ul>
					</div>
				</div>
				<div class="pagination buttons center">
					<a class="btn" href="/events"><span>More Events</span></a>
				</div>
			</section>
		<?php endif; ?>

		<?php if ($staff): ?>
			<section class="layout listing people grid background">
				<div class="component intro">
					<div class="wrapper">
						<h1 class="h2 subtitle">Location Team</h1>
					</div>
				</div>
				<div class="wrapper">
					<div class="row">
						<ul class="item-list">
							<?php foreach( $staff as $post): // variable must be called $post (IMPORTANT) ?>
						        <?php
									setup_postdata($post);
									$positions = get_the_terms(get_the_ID(), 'position');
									$positions_names = '';

									if ($positions) {
										foreach($positions as $position) {
											$positions_names .= $position->name . ' ';
										}
									}
								?>
								<li class="item">
									<div class="content">
										<h2 class="h4 title"><?php the_title(); ?></h2>
										<?php if ($positions): ?>
											<h3 class="p"><?php echo $positions_names; ?></h3>
										<?php endif; ?>
									</div>
								</li>
							<?php endforeach; ?>
						</ul>
					</div>
				</div>
			</section>
		<?php endif; ?>

		<div class="breadcrumb buttons center">
			<a class="btn" href="/locations"><span>Back to Locations</span></a>
		</div>

    <?php endwhile; endif; ?>

</div>

<?php get_footer(); ?>
