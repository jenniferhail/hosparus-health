<li class="item">
	<?php if ($view == 'carousel'): ?><div class="item-wrapper"><?php endif; ?>
	<?php if ($view != 'carousel'): ?>
		<div class="icon">
			<i class="fas fa-map-marker-alt"></i>
		</div>
	<?php endif ?>
	<div class="content">
		<div class="heading">
			<h2 class="h4"><?php the_title(); ?></h2>
		</div>
		<?php if ($view == 'carousel'): ?><div class="details-wrapper"><?php endif; ?>
			<?php if ( get_field('address_line_1') ): ?>
				<p class="address"><?php the_field('address_line_1'); ?>, <?php the_field('address_line_2'); ?></p>
			<?php endif; ?>
			<?php if ( get_field('office_phone_1') ): ?>
				<p class="phone">Phone: <?php the_field('office_phone_1'); ?><?php if ( get_field('office_phone_2') ): ?> or <?php the_field('office_phone_2'); ?><?php endif; ?></p>
			<?php endif; ?>
			<?php if ( get_field('fax') ): ?>
				<p class="fax">Fax: <?php the_field('fax'); ?></p>
			<?php endif; ?>
			<?php if ( get_field('grief_counseling_phone_1') ): ?>
				<p class="counseling">Grief Counseling: <?php the_field('grief_counseling_phone_1'); ?><?php if ( get_field('grief_counseling_phone_2') ): ?> or <?php the_field('grief_counseling_phone_2'); ?><?php endif; ?></p>
			<?php endif; ?>
		<?php if ($view == 'carousel'): ?></div><?php endif; ?>
		<div class="footer">
			<div class="buttons">
				<a href="<?php the_permalink(); ?>" class="btn"><span>View Location</span></a>
			</div>
		</div>
	</div>
	<?php if ($view == 'carousel'): ?></div><?php endif; ?>
</li>
