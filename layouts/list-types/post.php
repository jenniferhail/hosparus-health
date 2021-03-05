<?php
	$post_type = get_field('post_type');

	if ($post_type == 'video') {
		$video = get_field('video');
		$cover_image = get_field('cover_image');

		if ($cover_image != NULL) {
			$video_image = $cover_image['sizes']['large'];
		} else {
			$video_image = urlToThumbnail($video);
		}
	}

	if ($view == 'grid') {
		$aos = ' data-aos="fade" data-aos-once="true"';
	} else {
		$aos = NULL;
	}
?>
<li id="post-<?php the_ID(); ?>" class="item<?php if ($post_type == 'video'): ?> video<?php endif; ?>"<?php echo $aos; ?>>
	<div class="item-wrapper" <?php if ($view != 'list' && $post_type == 'video' && $video):?>style="background-image: url('<?php echo $video_image; ?>');"<?php endif; ?>>
		<div class="heading">
			<ul class="details one-line">
				<li><h3 class="title"><?php the_title(); ?></h3></li>
				<?php if ($post_type == 'default' || $post_type == 'video' && $view == 'list'): ?>
					<li><time class="p" datetime=""><?php echo get_the_date(); ?></time></li>
					<?php $post_terms = wp_get_post_terms(get_the_ID(), 'category'); ?>
					<?php foreach ($post_terms as $term) : ?>
						<li><a href="/blog/?fwp_categories=<?php echo $term->slug; ?>" class="p"><?php echo $term->name; ?></a></li>
					<?php endforeach; ?>
				<?php endif; ?>
			</ul>
		</div>
		<?php if ($post_type == 'default' || $post_type == 'video' && $view == 'list'): ?>
			<div class="content">
				<p><?php echo wp_trim_words(get_the_excerpt(), $num_words = 20, $more = null); ?></p>
			</div>
		<?php endif; ?>
		<div class="footer">
			<div class="buttons">
				<a href="<?php the_permalink(); ?>" class="btn"><span><?php if ($post_type == 'video'): ?>View Video<?php else: ?>Read Article<?php endif; ?></span></a>
			</div>
			<?php if ($view == 'list'): ?>
				<?php social_sharing('Share'); ?>
			<?php endif; ?>
		</div>
	</div>
</li>
<?php $delay += 250; ?>
