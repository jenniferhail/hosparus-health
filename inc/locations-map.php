<?php
	$content = get_field('content');
	$intro = get_field('intro');
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

	$search = get_field('map_search');
	$label = $search['label'];
	$placeholder_text = $search['placeholder_text'];
	$search_btn = $search['search_btn'];
	$reset_btn = $search['reset_btn'];
?>

<section class="layout locations map">
	<div class="wrapper">
		<div class="row">
			<div class="col">
				<?php if ($display_intro): ?>
					<div class="<?php echo $classes; ?>">
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
				<?php if ($content): ?>
					<div class="content">
						<?php echo $content; ?>
					</div>
				<?php endif; ?>
				<div class="fieldset search-bar">
					<label for="search-field">
						<span class="text"><?php if ($label): ?><?php echo $label; ?><?php else: ?>Zipcode<?php endif; ?></span>
						<input class="search-zip" type="text" name="Search" value="" placeholder="<?php if ($placeholder_text): ?><?php echo $placeholder_text; ?><?php else: ?>Enter your zipcode to find the location near you.<?php endif; ?>">
					</label>
					<button class="btn search-btn" type="button" name="button"><?php if ($search_btn): ?><?php echo $search_btn; ?><?php else: ?>Search<?php endif; ?></button>
					<button class="btn reset-btn" type="reset"><?php if ($reset_btn): ?><?php echo $reset_btn; ?><?php else: ?>Reset<?php endif; ?></button>
				</div>
				<div class="error-message"></div>
			</div>
			<div class="col">
				<div class="map-wrapper">
					<div id="map" class="map-canvas">
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
