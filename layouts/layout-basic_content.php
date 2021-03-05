<?php
	$align_content = get_sub_field('align_content');
	$background_color = get_sub_field('background_color');
	$story_lines = get_sub_field('story_lines');
	$story_top = false;
	$story_bottom = false;

	$classes = '';

	if ( $background_color ) {
		$classes .= ' background';

		if ($story_lines) {
			foreach ($story_lines as $line) {
				if ($line == 'story-line-top') {
					$story_top = true;
				} elseif ($line == 'story-line-bottom') {
					$story_bottom = true;
				}
			}
		}
	}

    $i = 0;
    while (have_rows('columns')) : the_row();
        $i++;
    endwhile;

    switch ($i) {
        case '1':
            $classes .= ' col-1';
			if ($align_content) {
				$classes .= ' ' . $align_content;
			}
            break;
        case '2':
            $classes .= ' col-2';
            break;
        case '3':
            $classes .= ' col-3';
            break;

        default:
            // code...
            break;
    }

?>

<section id="<?php echo $layout_index; ?>" class="layout basic-content <?php echo $classes; ?>">
	<?php if ($story_top == true): ?>
		<div class="story-line" data-aos="draw"></div>
	<?php endif; ?>
	<div class="inner-wrapper">
		<?php include(locate_template('layouts/component-intro.php')); ?>
		<div class="wrapper">
			<div class="row">
				<?php if (have_rows('columns')) : ?>
					<?php while (have_rows('columns')) : the_row(); ?>
						<div class="col">
							<div class="content" data-aos="fade" data-aos-once="true">
								<?php the_sub_field('basic_content'); ?>
								<?php include(locate_template('layouts/component-button.php')); ?>
							</div>
						</div>
					<?php endwhile; ?>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<?php if ($story_bottom == true): ?>
		<div class="story-line" data-aos="draw"></div>
	<?php endif; ?>
</section>
