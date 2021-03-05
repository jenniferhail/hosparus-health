<?php
    $images = get_sub_field('gallery');
    $size = 'full'; // (thumbnail, medium, large, full or custom size)
?>

<section id="<?php echo $layout_index; ?>" class="layout gallery slider">
	<?php include(locate_template('layouts/component-intro.php')); ?>
    <div class="wrapper">
        <div class="row">
			<div class="col">
				<div class="content">
					<ul class="slider viewer">

                        <?php if ($images): ?>

                            <?php foreach ($images as $image): ?>
                                <li class="slide">
                                    <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                                </li>
                            <?php endforeach; ?>

                        <?php endif; ?>
                    </ul>
				</div>
			</div>
		</div>
        <div class="row">
            <div class="col">
                <div class="content">
                    <ul class="slider index">

                        <?php if ($images): ?>

                            <?php foreach ($images as $image): ?>
                                <li class="slide">
                                    <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                                </li>
                            <?php endforeach; ?>

                        <?php endif; ?>

                    </ul>
				</div>
			</div>
		</div>
	</div>
</section>
