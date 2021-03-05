<?php
	$content = get_sub_field('content');
    $col = get_sub_field('columns');
    $text_align = get_sub_field('text_align');
    $classes = $col . ' ' . $text_align . ' background';
?>

<section id="<?php echo $layout_index; ?>" class="layout cards <?php echo $classes; ?>">
    <?php include(locate_template('layouts/component-intro.php')); ?>
	<div class="wrapper">
		<div class="row">
			<div class="col">
                <div class="content-wrapper">
					<?php if ($content): ?>
						<div class="description" data-aos="fade" data-aos-once="true">
							<div class="wrapper">
								<?php echo $content; ?>
							</div>
						</div>
					<?php endif; ?>
                    <ul class="item-list">
                        <?php while (have_rows('cards')) : the_row(); ?>
                            <?php $link = get_sub_field('link'); ?>
                            <li class="item" data-aos="fade" data-aos-once="true">
								<div class="item-wrapper">
									<?php if (get_sub_field('title')): ?>
										<h3 class="title"><?php the_sub_field('title'); ?></h3>
									<?php endif; ?>
									<?php if (get_sub_field('subtitle')): ?>
	                                    <span class="date"><?php the_sub_field('subtitle'); ?></span>
									<?php endif; ?>
									<?php if (get_sub_field('copy')): ?>
	                                    <div class="content">
	                                        <?php the_sub_field('copy'); ?>
	                                    </div>
									<?php endif; ?>
									<?php if ($link): ?>
										<div class="buttons">
	                                        <a href="<?php echo $link['url']; ?>" class="btn" target="<?php echo $link['target']; ?>"><span><?php echo $link['title']; ?></span></a>
	                                    </div>
									<?php endif; ?>
								</div>
                            </li>
                        <?php endwhile; ?>
                    </ul>
                </div>
            </div>
		</div>
	</div>
</section>
