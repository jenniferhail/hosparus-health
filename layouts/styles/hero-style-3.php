<?php
$story_lines = get_sub_field('story_lines');
?>

<div class="wrapper">
	<div class="row">
		<div class="col">
			<div class="content-wrapper">
				<?php include(locate_template('layouts/component-intro.php')); ?>
				<div class="image-wrapper rellax">
					<div class="background-image" style="background-image: url(<?php echo $image_1['sizes']['large']; ?>);">
						<?php echo wp_get_attachment_image($image_1['ID'], 'large', 'false', ['class' => 'visually-hide-image']); ?>
					</div>
					<?php if ($story_lines): ?>
						<div class="story-line" data-aos="draw"></div>
					<?php endif; ?>
					<?php if ( $image_1['caption'] ) : ?>
						<p class="caption"><?php echo $image_1['caption']; ?></p>
					<?php endif; ?>
				</div>
				<div class="content" data-aos="fade" data-aos-once="true">
					<?php echo $content; ?>
					<?php include(locate_template('layouts/component-button.php')); ?>
				</div>
			</div>
		</div>
	</div>
</div>
