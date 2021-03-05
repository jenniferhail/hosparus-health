<?php

/* Template Name: Wizard */

get_header(); ?>

<?php include(locate_template('/layouts/layout-hero-wizard.php')); ?>

<section id="wizard" class="layout wizard" style="display: none;">
    <div class="wrapper">
        <div class="col">
            <div class="icon">
                <img class="leaf" src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/leaf-logo.png">
            </div>
            <?php $x = 1; while (have_rows('question', 'option')) : the_row(); ?>
                <div id="q<?php echo $x; ?>" class="question <?php echo($x == 1) ? 'active first' : ''; ?>">
                    <h2><?php echo get_sub_field('question'); ?></h2>
                    <ul class="buttons answers center">
                        <?php while (have_rows('answer')) : the_row(); ?>
                            <li>
                                <a
                                class="answer btn<?php echo(get_sub_field('target_type') == 'result') ? ' result' : ''; ?>"
                                href="#<?php echo(get_sub_field('target_type') == 'question') ? 'q'.get_sub_field('target_question') : get_sub_field('target_result'); ?>"
                                data-message="<?php echo get_sub_field('message'); ?>">
                                    <span><?php echo get_sub_field('answer'); ?></span>
                                </a>
                            </li>
                        <?php endwhile; ?>
                    </ul>
                </div>
            <?php $x++; endwhile; ?>
            <div class="controls">
                <div id="custom-message" class="message"></div>
                <div class="buttons center">
                    <button class="btn back" data-target-question="0"><span>Back</span></button>
                    <button class="btn next" data-target-question="0"><span>Next</span></button>
                </div>
            </div>
        </div>
    </div>
</section>

<div id="results" class="results">
	<?php while (have_rows('result', 'option')) : the_row(); ?>
		<?php
			$image = get_sub_field('image');
		?>
		<section id="<?php echo get_sub_field('unique_id'); ?>" class="layout hero style-2 active">
			<div class="wrapper">
				<div class="row">
					<div class="col">
						<div class="content-wrapper">
							<div class="component intro">
								<h3 class="h2 subtitle"><?php echo get_sub_field('title'); ?></h3>
							</div>
							<div class="image-wrapper">
								<div class="background-image" style="background-image: url('<?php echo $image['sizes']['large']; ?>');">
									<?php echo wp_get_attachment_image($image['ID'], 'large', 'false', ['class' => 'visually-hide-image']); ?>
								</div>
							</div>
							<div class="content">
								<p><?php echo get_sub_field('copy'); ?></p>
								<?php
									$button = get_sub_field('button');
									$link_url = $button['url'];
				                    $link_title = $button['title'];
				                    $link_target = $button['target'];
									if ($button): ?>
									<div class="buttons left">
										<a href="<?php echo $link_url; ?>" class="btn" target="<?php echo $link_target; ?>"><span><?php echo $link_title; ?></span></a>
									</div>
								<?php endif; ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	<?php endwhile; ?>
	<div class="buttons center restart">
		<a class="btn" href="<?php the_permalink(); ?>"><span>Restart</span></a>
	</div>
</div>

<?php get_footer(); ?>
