<?php

    $buttons = get_sub_field('buttons');
    $display_button = $buttons['display_button'];
    $align_buttons = $buttons['align_buttons'];
    $button = $buttons['button'];

    $classes = 'buttons ' . $align_buttons;
?>
<?php if ( $display_button ) : ?>
    <?php if ($button) : ?>
		<?php $i = 1; ?>
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
					$i++;
                }
            ?>
        <?php endforeach; ?>
        </div>
    <?php endif; ?>
<?php endif; ?>
