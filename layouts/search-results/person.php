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
		$full_name .= ' ' . $credential;
	}

	if ($positions) {
		foreach($positions as $position) {
			$positions_names .= $position->name . ' ';
		}
	}
?>

<li class="item">
	<div class="icon">
		<svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 563.4 563.4" width="512" height="512"><path d="M280.8 314.6c83.3 0 150.8-67.5 150.8-150.8S364.1 13.4 280.8 13.4 130 81 130 163.8 197.5 314.6 280.8 314.6zM280.8 52.7c61.1 0 111 50 111 111S341.9 274.8 280.8 274.8s-111-50-111-111S219.7 52.7 280.8 52.7z" data-original="#000000" class="active-path" data-old_color="#b58d37"/><path d="M19.9 550h523.6c11.1 0 19.9-8.8 19.9-19.9 0-104.1-84.7-189.2-189.2-189.2H189.2C85.1 340.9 0 425.6 0 530.1 0 541.2 8.8 550 19.9 550zM189.2 380.7h185c75.9 0 138.3 56.4 148 129.5H41.2C50.9 437.6 113.3 380.7 189.2 380.7z" data-original="#000000" class="active-path" data-old_color="#b58d37"/></svg>
	</div>
	<div class="content">
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
		<div class="footer">
			<div class="buttons">
				<a href="<?php the_permalink(); ?>" class="btn"><span>View Profile</span></a>
			</div>
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
		</div>
	</div>
</li>
