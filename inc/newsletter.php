<section id="newsletter" class="layout newsletter">
	<div class="component intro" data-aos="fade" data-aos-once="true">
		<div class="wrapper">
			<?php
				$news = get_field('footer_news', 'option');
				$news_title_tag = $news['news_title_tag'];
				$news_title = $news['news_title'];
				$news_subtitle_tag = $news['news_subtitle_tag'];
				$news_subtitle = $news['news_subtitle'];

				if (!$news_title_tag) {
					$news_title_tag = 'h1';
				}
				if (!$news_subtitle_tag) {
					$news_subtitle_tag = 'h2';
				}
			?>
			<?php if ($news_title): ?>
				<<?php echo $news_title_tag; ?> class="title"><?php echo $news_title; ?></<?php echo $news_title_tag; ?>>
			<?php endif; ?>
			<?php if ($news_subtitle): ?>
				<<?php echo $news_subtitle_tag; ?> class="h2 subtitle"><?php echo $news_subtitle; ?></<?php echo $news_subtitle_tag; ?>>
			<?php endif; ?>
		</div>
	</div>
	<div class="wrapper">
		<div class="row">
			<div class="content" data-aos="fade" data-aos-once="true">
				<div class="form">
					<?php gravity_form( '7', false, false); ?>
				</div>
				<!-- <div class="story-line news" data-aos="draw-ltor" data-aos-once="true" data-aos-delay="500"></div> -->
			</div>
		</div>
	</div>
</section>
