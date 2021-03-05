<?php
	$intro = get_field('intro');
	$display_intro = $intro['display_intro'];
	$title_tag = $intro['title_tag'];
	$title = $intro['title'];
	$subtitle_tag = $intro['subtitle_tag'];
	$subtitle = $intro['subtitle'];

	if (!$title_tag) {
		$title_tag = 'h1';
	}
	if (!$subtitle_tag) {
		$subtitle_tag = 'h2';
	}

    $content = get_field('content');
    $button = get_field('button');

	$imgPath = '/public/wp-content/themes/hosparus-health/dist/assets/img/';

    $classes = 'layout hero style-cards more-space';
?>

<section id="hero-cards" class="<?php echo $classes; ?>">
	<div class="wrapper">
		<div class="row">
			<div class="col">
				<div class="intro">
					<div class="intro-wrapper">
						<?php if ($display_intro): ?>
							<?php if ($title): ?>
					            <<?php echo $title_tag; ?> class="title" data-aos="fade" data-aos-once="true" data-aos-offset="-1000"><?php echo $title; ?></<?php echo $title_tag; ?>>
							<?php endif; ?>
				            <?php if ($subtitle): ?>
				                <<?php echo $subtitle_tag; ?> class="h2 subtitle" data-aos="fade" data-aos-once="true" data-aos-offset="-1000"><?php echo $subtitle; ?></<?php echo $subtitle_tag; ?>>
				            <?php endif; ?>
						<?php endif; ?>
						<?php if ($content): ?>
							<div class="content">
								<div class="line-anchor" data-aos="fade" data-aos-once="true" data-aos-delay="500" data-aos-anchor="#hero-cards .subtitle" data-aos-offset="-1000">
									<?php echo $content; ?>
								</div>
								<div class="story-line" data-aos="draw" data-aos-once="true" data-aos-duration="1000" data-aos-delay="500" data-aos-ancho="#hero-cards .line-anchor" data-aos-offset="-1000"></div>
							</div>
						<?php endif; ?>
						<?php if ($button): ?>
							<div class="buttons" data-aos="fade" data-aos-once="true" data-aos-delay="1300" data-aos-anchor="#hero-cards .story-line" data-aos-offset="-1000">
								<a href="javascript:void(0)" class="btn btn-start"><span><?php echo $button; ?></span></a>
							</div>
						<?php endif; ?>
					</div>
				</div>
				<div class="item-wrapper hide focus">
					<div class="nav-link">
						<a class="back-btn" href="javascript:void(0)">Back</a>
					</div>
					<ul class="item-list">
						<?php while (have_rows('card')) : the_row(); ?>
							<?php
								$image = get_sub_field('image');
								$title = get_sub_field('title');
								$copy = get_sub_field('copy');
								$button = get_sub_field('button');
							?>
							<li class="item">
								<div class="link">
									<button class="close-btn" type="close"><i class="fal fa-plus"></i></button>
									<div class="item-content">
										<div class="image-wrapper">
											<div class="background-image" style="background-image: url('<?php echo $image['sizes']['large']; ?>');">
												<?php echo wp_get_attachment_image($image['ID'], 'large', 'false', ['class' => 'visually-hide-image']); ?>
											</div>
										</div>
										<div class="content-wrapper">
											<div class="content">
												<?php if ($title): ?>
													<h1 class="h2 subtitle"><?php echo $title; ?></h1>
												<?php endif; ?>
												<?php if ($copy): ?>
													<p><?php echo $copy; ?></p>
												<?php endif; ?>
												<?php
									                if ($button) {
														echo '<div class="buttons">';
									                    $button_url = $button['url'];
									                    $button_title = $button['title'];
									                    $button_target = $button['target'];

									                    if ($button_target == null) {
									                        $button_target = '_self';
									                    }
									                    echo '<a href="' . $button_url . '" target="' . $button_target . '" class="btn"><span>' . $button_title . '</span></a>';
														echo '</div>';
									                }
									            ?>
											</div>
										</div>
									</div>
									<div class="item-footer">
										<div class="link-name">
											<?php if ($title): ?>
												<?php
								                    $button_url = $button['url'];
								                    $button_title = $button['title'];
								                    $button_target = $button['target'];

								                    if ($button_target == null) {
								                        $button_target = '_self';
								                    }
								                    echo '<a href="' . $button_url . '" target="' . $button_target . '"><span class="title">' . $title . '</span></a>';
									            ?>
											<?php endif; ?>
										</div>
									</div>
								</div>
							</li>
						<?php endwhile; ?>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
