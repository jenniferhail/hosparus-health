<div class="story-line" data-aos="draw"></div>
<div class="wrapper">
	<div class="row">
		<div class="col one">
			<?php include(locate_template('layouts/component-intro.php')); ?>
			<div class="content" data-aos="fade" data-aos-once="true">
				<?php echo $content; ?>
			</div>
		</div>
		<div class="col two">
			<?php if ($link_1): ?>
				<div class="buttons" data-aos="fade" data-aos-once="true">
					<a href="<?php echo $link_1['url']; ?>" target="<?php echo $link_1['target']; ?>" class="btn"><span><?php echo $link_1['title']; ?></span></a>
				</div>
			<?php endif; ?>
		</div>
		<div class="image-1"<?php if ($image_1): ?> style="background-image: url(<?php echo $image_1['sizes']['large']; ?>);"<?php endif; ?>></div>
		<div class="col three">
			<?php if ($link_2): ?>
				<div class="buttons" data-aos="fade" data-aos-once="true">
					<a href="<?php echo $link_2['url']; ?>" target="<?php echo $link_2['target']; ?>" class="btn"><span><?php echo $link_2['title']; ?></span></a>
				</div>
			<?php endif; ?>
		</div>
		<div class="image-2"<?php if ($image_2): ?> style="background-image: url(<?php echo $image_2['sizes']['large']; ?>);"<?php endif; ?>></div>
	</div>
</div>
<div class="story-line" data-aos="draw"></div>
