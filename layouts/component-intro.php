<?php
    $intro = get_sub_field('intro');
    $display_intro = $intro['display_intro'];
	$title_tag = $intro['title_tag'];
    $title = $intro['title'];
	$subtitle_tag = $intro['subtitle_tag'];
    $subtitle = $intro['subtitle'];

	if (!$title_tag) {
		$title_tag = 'h1';
	}
	if (!$subtitle_tag) {
		$subtitle_tag = 'h2';
	}

    $classes = 'component intro';
?>

<?php if ($display_intro): ?>
	<?php if ($layout_index == 'layout-1' && is_front_page()): ?>
		<div class="<?php echo $classes; ?>" data-aos="fade" data-aos-once="true">
	<?php else: ?>
		<div class="<?php echo $classes; ?>" data-aos="fade" data-aos-once="true">
	<?php endif; ?>
        <div class="wrapper">
			<?php if ($title): ?>
	            <<?php echo $title_tag; ?> class="title"><?php echo $title; ?></<?php echo $title_tag; ?>>
			<?php endif; ?>
            <?php if ($subtitle): ?>
                <<?php echo $subtitle_tag; ?> class="h2 subtitle"><?php echo $subtitle; ?></<?php echo $subtitle_tag; ?>>
            <?php endif; ?>
        </div>
    </div>
<?php endif; ?>
