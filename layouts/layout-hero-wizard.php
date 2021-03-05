<?php
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

    $content = get_field('content');
    $button = get_field('button');

    $classes = 'layout hero style-cards active';
?>

<section class="<?php echo $classes; ?>">
	<div class="wrapper">
		<div class="row">
			<div class="col">
				<div class="intro">
					<div class="intro-wrapper">
						<?php if ($display_intro): ?>
							<?php if ($title): ?>
					            <<?php echo $title_tag; ?> class="title"><?php echo $title; ?></<?php echo $title_tag; ?>>
							<?php endif; ?>
				            <?php if ($subtitle): ?>
				                <<?php echo $subtitle_tag; ?> class="h2 subtitle"><?php echo $subtitle; ?></<?php echo $subtitle_tag; ?>>
				            <?php endif; ?>
						<?php endif; ?>
						<?php if ($content): ?>
							<div class="content">
								<?php echo $content; ?>
							</div>
						<?php endif; ?>
						<?php if ($button): ?>
							<div class="buttons">
								<a id="open-wizard" href="#wizard" class="btn btn-start open-wizard"><span><?php echo $button; ?></span></a>
							</div>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<?php
	$intro_results = get_field('intro_results');
	$display_intro_results = $intro_results['display_intro_results'];
	$title_tag_results = $intro_results['title_tag_results'];
	$title_results = $intro_results['title_results'];
	$subtitle_tag_results = $intro_results['subtitle_tag_results'];
	$subtitle_results = $intro_results['subtitle_results'];

	if (!$title_tag_results) {
		$title_tag_results = 'h1';
	}
	if (!$subtitle_tag_results) {
		$subtitle_tag_results = 'h2';
	}

    $content_results = get_field('content_results');

    $classes_results = 'layout hero style-cards results-content';
?>

<section class="<?php echo $classes_results; ?>">
	<div class="wrapper">
		<div class="row">
			<div class="col">
				<div class="intro">
					<div class="intro-wrapper">
						<?php if ($display_intro_results): ?>
							<?php if ($title_results): ?>
					            <<?php echo $title_tag_results; ?> class="title"><?php echo $title_results; ?></<?php echo $title_tag_results; ?>>
							<?php endif; ?>
				            <?php if ($subtitle_results): ?>
				                <<?php echo $subtitle_tag_results; ?> class="h2 subtitle"><?php echo $subtitle_results; ?></<?php echo $subtitle_tag_results; ?>>
				            <?php endif; ?>
						<?php endif; ?>
						<?php if ($content_results): ?>
							<div class="content">
								<p><?php echo $content_results; ?></p>
							</div>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
		<div class="story-line" data-aos="draw"></div>
	</div>

</section>
