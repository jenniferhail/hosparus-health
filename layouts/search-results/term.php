<div class="wrapper">
	<div class="row">
		<ul class="item-list">
			<?php foreach ($terms as $term) : ?>
				<li class="item">
					<div class="image">
						<div class="img-container">
							<?php
								$image = get_field('featured_image', $term->taxonomy . '_' . $term->term_id);
								if (is_array($image)) {
									$image_url = $image['url'];
									$image_alt = $image['alt'];
								}
							?>
							<?php if(is_array($image)) : ?>
								<img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>">
							<?php endif; ?>
						</div>
					</div>
					<div class="content">
						<a href="<?php echo get_term_link( $term ); ?>"><h2 class="title h5"><?php echo $term->name; ?></h2></a>
						<p class="excerpt"><?php echo $term->description; ?></p>
					</div>
				</li>
			<?php endforeach; ?>
		</ul>
	</div>
</div>
