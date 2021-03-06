<?php get_header(); ?>

	<?php if (is_front_page()): ?>
		<?php include(locate_template('layouts/layout-hero-cards.php')); ?>
	<?php endif; ?>

	<?php if(have_rows('layouts')) : ?>
		<?php while (have_rows('layouts')) : the_row(); ?>
			<?php $layout_type = get_row_layout(); ?>
			<?php $layout_index = 'layout-' . get_row_index(); ?>
			<?php $layout_type = get_row_layout(); ?>
			<?php include(locate_template('layouts/layout-' . $layout_type . '.php')); ?>
		<?php endwhile; ?>
	<?php endif; ?>

	</div>

<?php get_footer(); ?>
