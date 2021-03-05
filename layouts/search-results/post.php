<li id="post-<?php the_ID(); ?>" class="item">
	<div class="icon">
		<svg class="svg" xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 512 512" width="512"><path d="m457 0h-402c-30.3 0-55 24.7-55 55v402c0 30.3 24.7 55 55 55h402c30.3 0 55-24.7 55-55v-402c0-30.3-24.7-55-55-55zm-402 30h402c13.8 0 25 11.2 25 25v66h-452v-66c0-13.8 11.2-25 25-25zm402 452h-402c-13.8 0-25-11.2-25-25v-306h452v306c0 13.8-11.2 25-25 25zm0 0" data-original="#000000" class="active-path" data-old_color="#b58d37"/><path d="m451 76c0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15 15 6.7 15 15zm0 0" data-original="#000000" class="active-path" data-old_color="#b58d37"/><path d="m391 76c0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15 15 6.7 15 15zm0 0" data-original="#000000" class="active-path" data-old_color="#b58d37"/><path d="m331 76c0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15 15 6.7 15 15zm0 0" data-original="#000000" class="active-path" data-old_color="#b58d37"/><path d="m77.3 331h358.6c8.3 0 15-6.7 15-15v-120c0-8.3-6.7-15-15-15h-358.6c-8.3 0-15 6.7-15 15v120c0 8.3 6.7 15 15 15zm15-120h328.6v90h-328.6zm0 0" data-original="#000000" class="active-path" data-old_color="#b58d37"/><path d="m76 391h149c8.3 0 15-6.7 15-15s-6.7-15-15-15h-149c-8.3 0-15 6.7-15 15s6.7 15 15 15zm0 0" data-original="#000000" class="active-path" data-old_color="#b58d37"/><path d="m226 421h-150c-8.3 0-15 6.7-15 15s6.7 15 15 15h150c8.3 0 15-6.7 15-15s-6.7-15-15-15zm0 0" data-original="#000000" class="active-path" data-old_color="#b58d37"/><path d="m435 361h-149c-8.3 0-15 6.7-15 15s6.7 15 15 15h149c8.3 0 15-6.7 15-15s-6.7-15-15-15zm0 0" data-original="#000000" class="active-path" data-old_color="#b58d37"/><path d="m436 421h-150c-8.3 0-15 6.7-15 15s6.7 15 15 15h150c8.3 0 15-6.7 15-15s-6.7-15-15-15zm0 0" data-original="#000000" class="active-path" data-old_color="#b58d37"/></svg>
	</div>
	<div class="content">
		<div class="heading">
			<ul class="details one-line">
				<li><h2 class="h4 title"><?php the_title(); ?></h2></li>
				<li><time class="p" datetime=""><?php echo get_the_date(); ?></time></li>
				<?php $authors = get_field('author'); ?>
				<?php if ($authors): ?>
					<?php foreach ($authors as $author): ?>
						<li><a href="<?php echo get_permalink( $author ); ?>" class="p"><?php echo get_the_title( $author ); ?></a></li>
					<?php endforeach; ?>
				<?php endif; ?>
				<?php $post_terms = wp_get_post_terms(get_the_ID(), 'category'); ?>
				<?php foreach ($post_terms as $term) : ?>
					<li><a href="/blog/?fwp_categories=<?php echo $term->slug; ?>" class="p"><?php echo $term->name; ?></a></li>
				<?php endforeach; ?>
			</ul>
		</div>
		<div class="content">
			<?php echo wp_trim_words(get_the_excerpt(), $num_words = 40, $more = null); ?>
		</div>
		<div class="footer">
			<div class="buttons">
				<a href="<?php the_permalink(); ?>" class="btn"><span>View Article</span></a>
			</div>
			<?php social_sharing('Share'); ?>
		</div>
	</div>
</li>
