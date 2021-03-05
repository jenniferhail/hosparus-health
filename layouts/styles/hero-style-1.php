<div class="wrapper">
    <div class="row">
        <div class="col">
            <div class="content-wrapper">
				<?php include(locate_template('layouts/component-intro.php')); ?>
                <div class="image-wrapper">
                    <div class="background-image" style="background-image: url(<?php echo $image_1['sizes']['large']; ?>);">
                        <?php echo wp_get_attachment_image($image_1['ID'], 'large', 'false', ['class' => 'visually-hide-image']); ?>
                    </div>
                </div>
				<?php if ($layout_index == 'layout-1' && is_front_page()): ?>
					<div class="content" data-aos="fade" data-aos-once="true">
				<?php else: ?>
					<div class="content" data-aos="fade" data-aos-once="true">
				<?php endif; ?>
					<?php echo $content; ?>
                    <?php include(locate_template('layouts/component-button.php')); ?>
                </div>
            </div>
        </div>
    </div>
</div>
