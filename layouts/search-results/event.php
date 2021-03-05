<?php
	$start_date_raw = get_field('start_date', false, false);
	$start_date_formatted = new DateTime($start_date_raw);
	$start_date = get_field('start_date');
	$start_time = get_field('start_time');
	$end_time = get_field('end_time');
	$location = get_field('location');
?>
<li class="item">
	<div class="icon">
		<time class="date" datetime="<?php echo $start_date_formatted->format('Y-m-d'); ?>">
			<?php echo $start_date_formatted->format('M'); ?></br >
			<?php echo $start_date_formatted->format('d'); ?>
		</time>
	</div>
	<div class="content">
		<div class="heading">
			<ul class="details one-line">
				<li><h2 class="h4 title"><?php the_title(); ?></h2></li>
				<?php if ($start_date): ?>
					<li><time class="p" datetime="<?php echo $start_date_formatted->format('Y-m-d'); ?>"><?php echo $start_date_formatted->format('F j, Y'); ?></time></li>
				<?php endif; ?>
				<?php if ($start_time): ?>
					<li><time class="p" datetime="<?php echo $start_time; ?>"><?php echo $start_time; ?><?php if($end_time){echo ' &ndash; ' . $end_time;}; ?></time></li>
				<?php endif; ?>
				<?php if($location) : ?>
					<?php foreach($location as $location) : ?>
						<li><a class="p" href="<?php echo $location->guid; ?>"><?php echo $location->post_title; ?></a></li>
					<?php endforeach; ?>
				<?php endif; ?>
			</ul>
		</div>
		<?php echo wp_trim_words(get_the_excerpt(), $num_words = 40, $more = null); ?>
		<div class="footer">
			<div class="buttons">
				<a href="<?PHP the_permalink(); ?>" class="btn"><span>View Event</span></a>
			</div>
			<?php social_sharing('Share'); ?>
		</div>
	</div>
</li>
