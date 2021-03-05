<li class="item">
	<div class="icon">
		<span class="icon-faq">FAQ</span>
	</div>
    <div class="content">
        <div class="heading">
			<ul class="details one-line">
				<li><h2 class="h4 title"><?php the_title(); ?></h2></li>
				<?php $post_terms = wp_get_post_terms(get_the_ID(), 'faq_topics'); ?>
                <?php foreach ($post_terms as $term) : ?>
                    <li><a href="/faqs/?fwp_faq_categories=<?php echo $term->slug; ?>" class="p"><?php echo $term->name; ?></a></li>
                <?php endforeach; ?>
			</ul>
        </div>
        <?php the_content(); ?>
		<?php
			// Temporary solution for displaying the buttons — Jen
		    $buttons = get_field('buttons');
		    $display_button = $buttons['display_button'];
		    $align_buttons = $buttons['align_buttons'];
		    $button = $buttons['button'];

		    $classes = 'buttons ' . $align_buttons;
		?>
		<?php if ( $display_button ) : ?>
		    <?php if ($button) : ?>
		        <div class="<?php echo $classes; ?>">
		        <?php foreach($button as $item): ?>
		            <?php
		                $link = $item['link'];
		                if ($link) {
		                    $link_url = $link['url'];
		                    $link_title = $link['title'];
		                    $link_target = $link['target'];

		                    if ($link_target == null) {
		                        $link_target = '_self';
		                    }
		                    echo '<a href="' . $link_url . '" target="' . $link_target . '" class="btn"><span>' . $link_title . '</span></a>';
		                }
		            ?>
		        <?php endforeach; ?>
		        </div>
		    <?php endif; ?>
		<?php endif; ?>
    </div>
</li>
