<li id="post-<?php the_ID(); ?>" class="item">
	<div class="icon">
		<img class="leaf" src="<?php echo get_template_directory_uri(); ?>/dist/assets/img/leaf-logo.png">
	</div>
	<div class="content">
		<div class="heading">
			<ul class="details one-line">
				<li><h2 class="h4 title"><?php the_title(); ?></h2></li>
			</ul>
		</div>
		<div class="content">
			<?php if (get_the_excerpt()): ?>
				<?php echo wp_trim_words(get_the_excerpt(), $num_words = 40, $more = null); ?>
			<?php else: ?>
				<?php echo get_post_meta(get_the_ID(), '_yoast_wpseo_metadesc', true);  ?>
			<?php endif; ?>
		</div>
		<div class="footer">
			<div class="buttons">
				<a href="<?php the_permalink(); ?>" class="btn"><span>View Page</span></a>
			</div>
			<?php social_sharing('Share'); ?>
		</div>
	</div>
</li>
