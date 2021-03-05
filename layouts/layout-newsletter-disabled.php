<?php
    $copy = get_sub_field('copy');
?>
<section id="newsletter" class="layout newsletter">
	<?php include(locate_template('layouts/component-intro.php')); ?>
	<?php if ($copy): ?>
		<div class="description" data-aos="fade" data-aos-once="true" data-aos-delay="500" data-aos-anchor="#<?php echo $layout_index; ?> .intro">
			<div class="wrapper">
				<?php echo $copy; ?>
			</div>
		</div>
	<?php endif; ?>
	<div class="wrapper">
		<div class="row">
			<div class="content" data-aos="fade" data-aos-once="true">
				<div class="form">
					<?php gravity_form( '7', false, false); ?>
				</div>
				<!-- <div class="story-line news" data-aos="draw-ltor" data-aos-once="true" data-aos-delay="500"></div> -->
			</div>
		</div>
	</div>
</section>
