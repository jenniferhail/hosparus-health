<?php
	$image = get_field('image');
	$mobile_number = get_field('mobile_number');
	$office_number = get_field('office_number');
	$fax_number = get_field('fax_number');
	$email = get_field('email');
	$facebook = get_field('facebook');
	$twitter = get_field('twitter');
	$positions = get_the_terms(get_the_ID(), 'position');
	$positions_names = '';

	if ($positions) {
		foreach($positions as $position) {
			$positions_names .= $position->name . ' ';
		}
	}

	$name = get_field('name');
	$first_name = $name['first_name'];
	$middle_name = $name['middle_name'];
	$last_name = $name['last_name'];
	$credential = $name['credential'];
	$full_name = '';

	if ($first_name) {
		$full_name = $first_name;
	}
	if ($middle_name) {
		$full_name .= ' ' . $middle_name;
	}
	if ($last_name) {
		$full_name .= ' ' . $last_name;
	}
	if ($credential) {
		$full_name .= ', ' . $credential;
	}

	if ($view == 'grid' && $background_color) {
		$aos = ' data-aos="fade" data-aos-once="true"';
	} else {
		$aos = NULL;
	}

?>

<li class="item"<?php echo $aos; ?>>
	<?php if ($view == 'carousel'): ?><div class="item-wrapper"><?php endif; ?>
	<?php if($image && $view == 'grid' || $image && $view == 'carousel') : ?>
		<div class="image-wrapper">
			<div class="image" style="background-image: url(<?php echo $image['url']; ?>);"></div>
		</div>
	<?php endif; ?>
	<div class="content">
		<?php if ($view == 'list'): ?>
			<div class="heading">
				<ul class="details one-line">
					<li><h2 class="h4 title">
						<?php if ($full_name != ''): ?>
							<?php echo $full_name ?>
						<?php else: ?>
							<?php the_title(); ?>
						<?php endif; ?>
					</h2></li>
					<?php if($positions) : ?>
						<li><span class="p"><?php echo $positions_names; ?></span></li>
					<?php endif; ?>
					<?php if ($mobile_number): ?>
						<li><span class="p">Mobile: </span><a class="p" href="tel:<?php echo $mobile_number; ?>"><?php echo $mobile_number; ?></a></li>
					<?php endif; ?>
					<?php if ($office_number): ?>
						<li><span class="p">Office: </span><a class="p" href="tel:<?php echo $office_number; ?>"><?php echo $office_number; ?></a></li>
					<?php endif; ?>
					<?php if ($fax_number): ?>
						<li><span class="p">Fax: <?php echo $fax_number; ?></span></li>
					<?php endif; ?>
					<?php if($email) : ?>
						<li><a class="p" href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a></li>
					<?php endif; ?>
				</ul>
			</div>
		<?php else: ?>
			<h2 class="h4 title">
				<?php if ($full_name != ''): ?>
					<?php echo $full_name ?>
				<?php else: ?>
					<?php the_title(); ?>
				<?php endif; ?>
			</h2>
			<?php if($positions) : ?>
				<h3 class="p"><?php echo $positions_names; ?></h3>
			<?php endif; ?>
		<?php endif; ?>
	</div>
	<div class="footer">
		<div class="buttons">
			<a href="<?php the_permalink(); ?>" class="btn"><span>View Profile</span></a>
		</div>
		<?php if ($view == 'list'): ?>
			<?php if ($email || $facebook || $twitter): ?>
				<ul class="social">
					<li class="label">Connect</li>
					<?php if ($email): ?>
						<li><a href="mailto:<?php echo $email;?>" target="_blank"><i class="fas fa-envelope"></i></a></li>
					<?php endif; ?>
					<?php if ($facebook): ?>
						<li><a href="<?php echo $facebook;?>" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
					<?php endif; ?>
					<?php if ($twitter): ?>
						<li><a href="<?php echo $twitter;?>" target="_blank"><i class="fab fa-twitter"></i></a></li>
					<?php endif; ?>
				</ul>
			<?php endif; ?>
		<?php endif; ?>
	</div>
	<?php if ($view == 'carousel'): ?></div><?php endif; ?>
</li>
<?php $delay += 250; ?>
