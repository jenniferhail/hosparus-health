<!doctype html>
<?php $site_url = site_url(); ?>

<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head>
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-N8DCFLB');</script>
	<!-- End Google Tag Manager -->

	<?php if (is_search()) { ?>
		<meta name="robots" content="noindex, nofollow">
	<?php } ?>

	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>">

	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/favicon/favicon-16x16.png">
	<link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/favicon/site.webmanifest">
	<link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/favicon/safari-pinned-tab.svg" color="#ac8435">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="theme-color" content="#ffffff">

	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>

	<?php wp_head(); ?>

	<?php if ( is_page('locations') ): ?>
		<?php
			// WP_Query arguments
			$map_args = array(
				'post_type'         => 'locations',
				'posts_per_page'    => '-1'
			);

			// The Query
			$map_query = new WP_Query($map_args);
		?>
		<?php if($map_query->have_posts()): ?>
			<?php
				$location_title = get_the_title();
				$count = 1;
			?>
			<script type="text/javascript">
				locationData = [
				<?php while ($map_query->have_posts()): $map_query->the_post(); ?>
					<?php
						$location = get_field('google_map');
						$address = $location['address'];
						$directions_link = 'https://www.google.com/maps/search/?api=1&query=' . urlencode( str_replace( '% ', ' ' , $address ) );
						$location_title = get_the_title();
						$location_link = get_permalink();
						$location_address_1 = get_field('address_line_1');
						$location_address_2 = get_field('address_line_2');
						$location_zipcodes = get_field('zip_codes');

						if ($location_zipcodes) {
							$location_zipcodes = str_replace(' ', '', $location_zipcodes);
							$location_zipcodes = explode(',', $location_zipcodes);
						}

						if ( !empty($location) ): ?>
						{
							id: '<?php echo $count; ?>',
							name: '<?php echo $location_title; ?>',
							link: '<?php echo $location_link; ?>',
							directions: '<?php echo $directions_link; ?>',
							address_1: '<?php echo $location_address_1; ?>',
							address_2: '<?php echo $location_address_2; ?>',
							lat: '<?php echo $location['lat']; ?>',
							lng: '<?php echo $location['lng']; ?>',
							<?php if ($location_zipcodes): ?>
								zipCodes: [
								<?php foreach ($location_zipcodes as $location_zipcode): ?>
									'<?php echo $location_zipcode; ?>',
								<?php endforeach; ?>
								]
							<?php endif; ?>
						},
					<?php $count++; endif; ?>

				<?php endwhile; ?>
				];
			</script>
		<?php endif; ?>
	<?php elseif ( get_post_type() == 'locations' ) : ?>
		<?php
			$location = get_field('google_map');
			$address = $location['address'];
			$directions_link = 'https://www.google.com/maps/search/?api=1&query=' . urlencode( str_replace( '% ', ' ' , $address ) );
			$location_title = get_the_title();
			$location_link = get_permalink();
			$location_address_1 = get_field('address_line_1');
			$location_address_2 = get_field('address_line_2');
			$location_zipcodes = get_field('zip_codes');

			if ($location_zipcodes) {
				$location_zipcodes = str_replace(' ', '', $location_zipcodes);
				$location_zipcodes = explode(',', $location_zipcodes);
			}
		?>
		<?php if ( !empty($location) ): ?>
				<script type="text/javascript">
					locationData = [
						{
							id: '1',
							name: '<?php echo $location_title ?>',
							link: '<?php echo $location_link; ?>',
							directions: '<?php echo $directions_link; ?>',
							address_1: '<?php echo $location_address_1; ?>',
							address_2: '<?php echo $location_address_2; ?>',
							lat: '<?php echo $location['lat']; ?>',
							lng: '<?php echo $location['lng']; ?>',
							<?php if ($location_zipcodes): ?>
								zipCodes: [
								<?php foreach ($location_zipcodes as $location_zipcode): ?>
									'<?php echo $location_zipcode; ?>',
								<?php endforeach; ?>
								]
							<?php endif; ?>
						}
					];
				</script>
		<?php endif; ?>
	<?php else: ?>
		<script type="text/javascript">
			var locationData = [
				{
					lat: '38.2527',
					lng: '-85.7585'
				}
			];
		</script>
	<?php endif; ?>
	<style>
		.item-list.slick-initialized.slick-slider {
			transform: translate3d(0,0,0) !important;
		}
	</style>
</head>

<body <?php body_class(); ?>>

	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N8DCFLB"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->

	<a class="skipnav" href="#main">Skip to main content</a>
	<header class="header">
		<div class="wrapper">
			<div class="row">
				<div class="logo">
					<a href="<?php echo home_url(); ?>">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258.6 137.1" preserveAspectRatio="xMinYMin meet">
							<style type="text/css">
								.st0{fill:#B78E37;}
								.st1{fill:#906326;}
								.st2{fill:#FFFFFF;}
								.st3{fill:#5A6268;}
								.st4{fill:#596268;}
							</style>
							<path class="st0" d="M104 18.4c0 0 2.4 0 2.4-0.9 0 0 0.1-0.8-0.8-1.9 0 0-1.5-1.8-0.1-2.4 0 0 0.7-0.4 2.3-0.1 0 0 2.9 0.6 7.3 2.3 0 0 2.7 0.9 4.1 0.3 0 0 2.8-1.3 0.8-3.1 -0.8-0.7-0.7-0.6-1.5-1.2 -1.9-1.4-5-3.7-5.8-4.6 0 0-2.4-2.2-0.7-4 0 0 2.1-3.2 7.9 1.7 0 0 7 7.1 8.4 7.2 0 0 2.3 0.7 3-1.1 0 0 0.6-1.4-1.1-2.6 0 0-5.7-3.4-5-5.4 0 0 0.7-2 4.2-1.2 0 0 3.5 1 7.7 3.5 0 0 1.8 1.1 2.5 0.6 0 0 0.3-0.2 0.2-0.7 -0.1-0.6-0.5-2.2 0.5-2.9 0 0 1.8-1.3 5.1 0.7 0 0 2.3 1.3 4.3 0.3 0 0 6.2-3.5 20.7-0.7 0 0 3.8 0.9 3.3 2.1 0 0-0.5 2.4-2.4 1 0 0-2.4-2.2-6.7-2.4 0 0-6-0.2-8.3 3.1 0 0-2.7 3.8-3.3 5 0 0-1.9 3.2-4 1.9 0 0-0.8-0.4-1.5-1.3 0 0-1.7-1.7-2.8 0.4 0 0-1.2 1.7-1.8 3.2 0 0-1.3 3.2-4.8 5.5 0 0-2.5 1.1-4.2-0.3 0 0-1.4-1.2-1.5-2.7 0 0-1.4 0-2.5 4.6 0 0-1 4.9-3.6 6.6 0 0-3.4 2.7-6.9 2.3 0 0-2.6-0.7-2.1-2.9 0 0 0.6-3.3 4.9-2 0 0 2.3-1.8 0.8-5.3 0 0-1.4-3-4.9-0.4 0 0-2.8 2.5-3.9 4 0 0-2.7 3.5-4.8 3.5 0 0-3.1 0.4-2.8-2.5 0 0 1.6-1 1.8-1.9 0 0 0.3-0.9-0.5-1.5 0 0-1-0.7-2.8 0.2 0 0-3.8 1.7-3.6-1.6C101.4 20.9 101.6 18.5 104 18.4z"/><path class="st1" d="M128.8 25.6c-0.6 1.4-1.3 2.6-2.6 3.4 -0.4 0.3-3.8 2.9-6.9 2.3 0 0-2.6-0.5-2.1-2.9 0 0 0.6-3.3 5-2 0 0 3.4 1.3 5.3 0.4C127.4 26.8 128.3 26.3 128.8 25.6"/><path class="st1" d="M113.8 25.2c-0.5 1.1-1.8 2.1-2.8 2.7 -0.3 0.2-2.9 1.7-5.3 1.3 0 0-2-0.5-1.6-2.3 0 0 0.7-2.4 4.2-1.4 0 0 2.7 1.1 4.3 0.5C112.7 26.1 113.3 25.8 113.8 25.2"/><path class="st1" d="M142.9 15.1c0 0-2 4.4-4.8 5.6 0 0-2.4 1.1-4.2-0.2 0 0-1.4-0.9-1.6-2.6 0 0-0.1-2.8 2.2-3.1 0 0 1.6-0.2 3.1 0.9 0 0 1.7 1.1 3.2 0.9C140.9 16.6 141.7 16.7 142.9 15.1z"/><path class="st2" d="M153.5 4.2c0 0-0.2 0.1-0.5 0.3 -0.3 0.2-0.8 0.4-1.4 0.8 -0.6 0.3-1.4 0.7-2.2 1.2 -0.9 0.4-1.8 0.9-2.9 1.5 -1.1 0.5-2.2 1.1-3.4 1.7 -1.2 0.6-2.5 1.2-3.9 1.8 -0.7 0.3-1.4 0.6-2.1 0.9 -0.7 0.3-1.4 0.6-2.1 0.9 -0.7 0.3-1.5 0.6-2.2 0.9 -0.7 0.3-1.5 0.6-2.2 0.9 -0.7 0.3-1.5 0.6-2.2 0.8 -0.7 0.3-1.5 0.5-2.2 0.8 -0.4 0.1-0.7 0.2-1.1 0.4 -0.4 0.1-0.7 0.2-1.1 0.3 -0.7 0.2-1.5 0.4-2.2 0.6 -0.7 0.2-1.4 0.4-2.1 0.5 -0.7 0.2-1.4 0.3-2 0.5 -0.3 0.1-0.7 0.2-1 0.2 -0.3 0.1-0.6 0.1-1 0.2 -0.6 0.1-1.2 0.2-1.8 0.3 -1.2 0.2-2.2 0.4-3.2 0.5 -1 0.1-1.8 0.3-2.5 0.3 -1.4 0.2-2.2 0.3-2.2 0.3 -0.1 0-0.1 0-0.1-0.1 0-0.1 0-0.1 0.1-0.1l0 0c0 0 0.8-0.1 2.1-0.3 0.7-0.1 1.5-0.3 2.5-0.4 0.9-0.2 2-0.4 3.2-0.6 0.6-0.1 1.2-0.2 1.8-0.4 0.3-0.1 0.6-0.1 1-0.2 0.3-0.1 0.6-0.2 1-0.2 0.7-0.2 1.3-0.3 2-0.5 0.7-0.2 1.4-0.4 2.1-0.6 0.7-0.2 1.4-0.4 2.2-0.6 0.4-0.1 0.7-0.2 1.1-0.3 0.4-0.1 0.7-0.2 1.1-0.4 0.4-0.1 0.7-0.2 1.1-0.4 0.4-0.1 0.7-0.3 1.1-0.4 0.7-0.3 1.5-0.5 2.2-0.8 0.7-0.3 1.5-0.6 2.2-0.9 0.7-0.3 1.5-0.6 2.2-0.9 0.7-0.3 1.4-0.6 2.1-0.9 0.7-0.3 1.4-0.6 2.1-0.9 1.4-0.6 2.7-1.2 3.9-1.7 1.2-0.6 2.4-1.1 3.5-1.6 2.2-1 4-1.8 5.2-2.4 0.6-0.3 1.1-0.5 1.5-0.7 0.3-0.2 0.5-0.2 0.5-0.2 0 0 0.1 0 0.1 0C153.6 4.1 153.6 4.2 153.5 4.2z"/><path class="st2" d="M132.6 5.6c0 0 0.4 0.4 1.1 0.9 0.3 0.3 0.7 0.6 1.2 0.9 0.2 0.2 0.5 0.3 0.7 0.5 0.2 0.1 0.5 0.3 0.7 0.4 0.2 0.1 0.5 0.3 0.7 0.4 0.3 0.1 0.5 0.3 0.7 0.4 0.2 0.1 0.5 0.2 0.7 0.3 0.2 0.1 0.4 0.2 0.6 0.2 0.2 0.1 0.4 0.1 0.5 0.2 0.2 0 0.3 0.1 0.4 0.1 0.2 0.1 0.4 0.1 0.4 0.1l0 0c0.2 0 0.2 0.2 0.2 0.3 0 0.2-0.2 0.3-0.3 0.2 0 0 0 0 0 0 0 0-0.1 0-0.4-0.1 -0.1 0-0.3-0.1-0.5-0.1 -0.2-0.1-0.4-0.1-0.6-0.2 -0.2-0.1-0.4-0.2-0.7-0.3 -0.2-0.1-0.5-0.2-0.7-0.3 -0.2-0.1-0.5-0.3-0.7-0.4 -0.3-0.1-0.5-0.3-0.8-0.4 -0.2-0.2-0.5-0.3-0.7-0.5 -0.2-0.2-0.5-0.3-0.7-0.5 -0.4-0.3-0.8-0.6-1.2-0.9 -0.7-0.6-1.1-1-1.1-1l0 0c-0.1-0.1-0.1-0.2 0-0.2C132.4 5.5 132.5 5.5 132.6 5.6z"/><path class="st2" d="M118.6 7.1c0 0 0.1 0.2 0.4 0.4 0.2 0.3 0.6 0.6 1 1.1 0.8 0.9 2 2 3.3 3 0.3 0.3 0.6 0.5 0.9 0.7 0.3 0.2 0.6 0.5 0.9 0.7 0.2 0.1 0.3 0.2 0.5 0.3 0.2 0.1 0.3 0.2 0.5 0.3 0.2 0.1 0.3 0.2 0.4 0.2 0.1 0.1 0.3 0.1 0.4 0.2 0.3 0.1 0.5 0.2 0.7 0.3 0.2 0.1 0.4 0.2 0.6 0.2 0.2 0.1 0.3 0.1 0.4 0.1 0.1 0 0.1 0.2 0.1 0.2l0 0c0 0.1 0 0.2-0.1 0.3 0 0-0.1 0.1-0.2 0.1 -0.1 0-0.2-0.1-0.4-0.1 -0.2-0.1-0.4-0.1-0.6-0.2 -0.2-0.1-0.5-0.2-0.8-0.4 -0.1-0.1-0.3-0.1-0.4-0.2 -0.1-0.1-0.3-0.2-0.5-0.3 -0.2-0.1-0.3-0.2-0.5-0.3 -0.2-0.1-0.3-0.2-0.5-0.3 -0.3-0.2-0.6-0.5-1-0.7 -0.3-0.2-0.6-0.5-1-0.8 -0.6-0.5-1.2-1.1-1.8-1.6 -0.3-0.3-0.5-0.5-0.8-0.8 -0.2-0.3-0.5-0.5-0.7-0.7 -0.8-0.9-1.3-1.6-1.3-1.6 -0.1-0.1 0-0.2 0-0.2C118.5 7.1 118.5 7.1 118.6 7.1z"/><path class="st2" d="M127.5 15.7c0 0 0 0 0 0.1 0 0.1 0 0.2 0 0.3 0 0.1 0 0.3 0 0.5 0 0.2 0 0.4 0 0.6 0 0.2 0 0.5 0 0.7 0 0.2 0 0.5 0 0.8 0 0.3 0 0.5-0.1 0.8 0 0.3-0.1 0.6-0.1 0.9 0 0.3-0.1 0.6-0.2 0.8 0 0.1-0.1 0.3-0.1 0.4 0 0.1-0.1 0.3-0.1 0.4 0 0.1-0.1 0.3-0.1 0.4 0 0.1-0.1 0.2-0.1 0.4 -0.1 0.2-0.2 0.5-0.3 0.6 -0.1 0.2-0.2 0.4-0.3 0.5 -0.1 0.2-0.2 0.3-0.2 0.4 -0.1 0.2-0.2 0.3-0.2 0.3 0 0.1-0.1 0.1-0.2 0.1 -0.1 0-0.1-0.1-0.1-0.2l0 0c0 0 0.1-0.1 0.2-0.3 0.1-0.1 0.1-0.2 0.2-0.4 0.1-0.2 0.1-0.3 0.2-0.5 0.1-0.2 0.2-0.4 0.2-0.6 0-0.1 0.1-0.2 0.1-0.3 0-0.1 0.1-0.2 0.1-0.4 0-0.1 0.1-0.3 0.1-0.4 0-0.1 0.1-0.3 0.1-0.4 0.1-0.3 0.1-0.5 0.1-0.8 0-0.3 0.1-0.6 0.1-0.8 0-0.3 0-0.5 0-0.8 0-0.3 0-0.5 0-0.8 0-0.2 0-0.5 0-0.7 0-0.2 0-0.4-0.1-0.6 0-0.2 0-0.3-0.1-0.4 0-0.1 0-0.2 0-0.3 0-0.1 0-0.1 0-0.1l0 0c0-0.2 0.1-0.3 0.2-0.3C127.4 15.4 127.5 15.5 127.5 15.7 127.5 15.7 127.5 15.7 127.5 15.7z"/><path class="st2" d="M142.3 9.8C142.3 9.8 142.3 9.8 142.3 9.8c0 0.1-0.1 0.2-0.1 0.3 -0.1 0.2-0.1 0.4-0.3 0.7 -0.1 0.3-0.3 0.6-0.4 0.9 -0.1 0.2-0.2 0.3-0.3 0.5 -0.1 0.2-0.2 0.3-0.3 0.5 -0.1 0.2-0.2 0.3-0.3 0.5 -0.1 0.2-0.2 0.3-0.3 0.4 -0.1 0.1-0.2 0.3-0.3 0.4 -0.1 0.1-0.1 0.1-0.2 0.2 -0.1 0.1-0.1 0.1-0.2 0.2 -0.1 0.1-0.2 0.2-0.3 0.3 -0.1 0.1-0.2 0.1-0.2 0.2 -0.1 0.1-0.2 0.2-0.2 0.2 -0.1 0.1-0.2 0.1-0.2 0 -0.1-0.1-0.1-0.2 0-0.2l0 0c0 0 0.1-0.1 0.2-0.2 0.1-0.1 0.1-0.1 0.2-0.2 0.1-0.1 0.2-0.2 0.3-0.3 0-0.1 0.1-0.1 0.1-0.2 0-0.1 0.1-0.1 0.1-0.2 0.1-0.1 0.2-0.3 0.3-0.4 0.1-0.1 0.2-0.3 0.3-0.4 0.1-0.2 0.2-0.3 0.3-0.5 0.1-0.2 0.2-0.3 0.3-0.5 0.1-0.2 0.2-0.3 0.2-0.5 0.1-0.3 0.3-0.6 0.4-0.9 0.1-0.3 0.2-0.5 0.2-0.6 0-0.1 0-0.1 0-0.2 0 0 0-0.1 0-0.1l0 0c0-0.2 0.2-0.2 0.4-0.2C142.3 9.5 142.4 9.6 142.3 9.8 142.3 9.8 142.3 9.8 142.3 9.8z"/><path class="st3" d="M25.3 51.8h-1c-0.4 0-0.7 0.3-0.7 0.7v14.1H3.8V52.6c0-0.4-0.3-0.7-0.7-0.7h-1c-0.4 0-0.7 0.3-0.7 0.7v31.6c0 0.4 0.3 0.7 0.7 0.7h1c0.4 0 0.7-0.3 0.7-0.7V69h19.8v15.2c0 0.4 0.3 0.7 0.7 0.7h1c0.4 0 0.7-0.3 0.7-0.7V52.6C26.1 52.2 25.7 51.8 25.3 51.8z"/><path class="st3" d="M64.8 55.9c-1.5-1.5-3.3-2.8-5.4-3.6 -2.1-0.9-4.3-1.3-6.8-1.3 -2.4 0-4.7 0.4-6.8 1.3 -2.1 0.9-3.9 2.1-5.4 3.6 -1.5 1.5-2.7 3.4-3.5 5.5 -0.8 2.1-1.3 4.5-1.3 7 0 2.5 0.4 4.9 1.3 7 0.9 2.1 2 4 3.5 5.5 1.5 1.5 3.3 2.8 5.4 3.6 2.1 0.9 4.3 1.3 6.8 1.3 2.4 0 4.7-0.4 6.8-1.3 2.1-0.9 3.9-2.1 5.4-3.6 1.5-1.5 2.7-3.4 3.5-5.5 0.8-2.1 1.3-4.5 1.3-7 0-2.5-0.4-4.9-1.3-7C67.5 59.3 66.3 57.4 64.8 55.9zM52.7 83.4c-2.2 0-4.2-0.4-6-1.2 -1.8-0.8-3.3-1.9-4.6-3.2 -1.3-1.4-2.3-3-3-4.8 -0.7-1.8-1-3.8-1-5.9 0-2.1 0.4-4.1 1.1-5.9 0.7-1.8 1.7-3.4 3-4.8 1.3-1.4 2.8-2.4 4.6-3.2 1.8-0.8 3.8-1.2 5.9-1.2 2.1 0 4.1 0.4 5.9 1.2 1.8 0.8 3.3 1.9 4.6 3.2 1.3 1.4 2.3 3 3 4.8 0.7 1.8 1.1 3.8 1.1 5.9 0 2.1-0.4 4.1-1 5.9 -0.7 1.8-1.7 3.4-3 4.8 -1.3 1.3-2.8 2.4-4.6 3.2C56.9 83.1 54.9 83.4 52.7 83.4z"/><path class="st3" d="M95.2 70.2c-0.9-0.7-2-1.3-3.2-1.8 -1.2-0.5-2.4-0.9-3.8-1.4 -1-0.3-1.9-0.7-2.8-1.1 -0.9-0.4-1.7-0.8-2.3-1.4 -0.7-0.5-1.2-1.2-1.6-1.9C81 62 80.8 61 80.8 59.9c0-1.1 0.2-2.1 0.7-2.9 0.5-0.8 1.1-1.5 1.8-2.1 0.8-0.6 1.6-1 2.6-1.3 2.3-0.7 4.8-0.5 6.9 0.4 1.2 0.5 2.2 1.3 2.9 2.2 0.1 0.2 0.3 0.3 0.5 0.3 0.2 0 0.4 0 0.5-0.2l0.8-0.7c0.3-0.3 0.3-0.7 0.1-1 -1-1.2-2.3-2.2-3.8-2.8 -2.8-1.2-6-1.3-8.8-0.4 -1.3 0.4-2.4 1-3.3 1.7 -1 0.8-1.8 1.7-2.3 2.8 -0.6 1.1-0.9 2.4-0.9 3.8 0 1.4 0.2 2.7 0.7 3.7 0.5 1 1.2 1.9 2 2.7 0.8 0.7 1.8 1.3 3 1.8 1.1 0.5 2.3 0.9 3.7 1.3 1 0.3 2.1 0.7 3.1 1.1 1 0.4 1.8 0.8 2.6 1.4 0.7 0.5 1.3 1.2 1.8 1.9 0.4 0.7 0.7 1.6 0.7 2.7 0 1.1-0.2 2.1-0.6 2.9 -0.4 0.8-1 1.5-1.7 2.1 -0.7 0.6-1.6 1-2.5 1.4 -2.3 0.8-5.1 0.6-7.5-0.4 -1.4-0.6-2.6-1.4-3.7-2.6 -0.3-0.3-0.7-0.3-1-0.1L78 80.6c-0.1 0.1-0.2 0.3-0.2 0.5 0 0.2 0.1 0.4 0.2 0.5 1.1 1.3 2.6 2.3 4.3 3 1.7 0.7 3.6 1.1 5.7 1.1 1.3 0 2.7-0.2 3.9-0.6 1.3-0.4 2.4-1 3.3-1.8 0.9-0.8 1.7-1.8 2.3-2.9 0.6-1.2 0.9-2.5 0.9-3.9 0-1.5-0.3-2.7-0.8-3.8C96.9 71.8 96.1 70.9 95.2 70.2z"/><path class="st3" d="M125.1 53.6c-1-0.6-2.1-1.1-3.4-1.4 -1.2-0.3-2.4-0.4-3.6-0.4h-8.6c-0.4 0-0.7 0.3-0.7 0.7v31.6c0 0.4 0.3 0.7 0.7 0.7h1c0.4 0 0.7-0.3 0.7-0.7V69.4h7.4c1.3 0 2.6-0.2 3.8-0.6 1.2-0.4 2.3-1 3.2-1.7 0.9-0.7 1.6-1.7 2.2-2.8 0.5-1.1 0.8-2.4 0.8-3.9 0-1.6-0.3-3-1-4.2C127 55.1 126.1 54.3 125.1 53.6zM118.7 67.1h-7.5V54.1h7.3c0.9 0 1.9 0.1 2.8 0.3 0.9 0.2 1.7 0.6 2.5 1.1 0.7 0.5 1.3 1.1 1.7 1.9 0.4 0.8 0.7 1.8 0.7 3 0 1.2-0.2 2.2-0.6 3 -0.4 0.8-1 1.5-1.7 2.1 -0.7 0.5-1.5 0.9-2.4 1.2C120.6 66.9 119.6 67.1 118.7 67.1z"/><path class="st3" d="M146.8 52.3c-0.1-0.3-0.4-0.4-0.7-0.4h-1.2c-0.3 0-0.5 0.2-0.7 0.4l-13.7 31.6c-0.1 0.2-0.1 0.5 0.1 0.7 0.1 0.2 0.4 0.3 0.6 0.3h1.1c0.3 0 0.6-0.2 0.7-0.4l3.7-8.6H154l3.6 8.6c0.1 0.3 0.4 0.4 0.7 0.4h1.1c0.2 0 0.5-0.1 0.6-0.3 0.1-0.2 0.2-0.5 0.1-0.7L146.8 52.3zM137.5 73.5l7.9-18.5 7.6 18.5H137.5z"/><path class="st3" d="M181.2 68.9c0.7-0.1 1.4-0.2 2.1-0.4 1.2-0.3 2.2-0.8 3.2-1.4 1-0.7 1.8-1.6 2.4-2.6 0.6-1.1 0.9-2.5 0.9-4.1 0-1.7-0.3-3.2-1-4.3 -0.7-1.1-1.5-2-2.5-2.6 -1-0.6-2.2-1.1-3.4-1.3 -1.2-0.2-2.5-0.3-3.7-0.3h-8.8c-0.4 0-0.7 0.3-0.7 0.7v31.6c0 0.4 0.3 0.7 0.7 0.7h1c0.4 0 0.7-0.3 0.7-0.7V69h6.3l9.3 15.6c0.1 0.2 0.4 0.4 0.6 0.4h1.1c0.3 0 0.5-0.1 0.6-0.4 0.1-0.2 0.1-0.5 0-0.7L181.2 68.9zM172.2 54.1h6.5c1.1 0 2.3 0.1 3.4 0.3 1.1 0.2 2 0.5 2.8 1 0.8 0.5 1.4 1.1 1.9 1.9 0.5 0.8 0.7 1.8 0.7 3 0 2-0.7 3.5-2 4.6 -1.4 1.1-3.5 1.7-6.2 1.7h-7V54.1z"/><path class="st3" d="M225.7 51.8h-1c-0.4 0-0.7 0.3-0.7 0.7V72c0 1.3-0.1 2.6-0.4 4 -0.2 1.3-0.8 2.5-1.5 3.7 -0.7 1.1-1.8 2-3.1 2.7 -1.3 0.7-3.1 1.1-5.4 1.1 -2.3 0-4.1-0.4-5.4-1.1 -1.3-0.7-2.4-1.7-3.1-2.8 -0.7-1.1-1.2-2.3-1.5-3.7 -0.2-1.4-0.4-2.7-0.4-3.9V52.6c0-0.4-0.3-0.7-0.7-0.7h-1c-0.4 0-0.7 0.3-0.7 0.7v19.6c0 1.8 0.2 3.6 0.7 5.2 0.4 1.7 1.2 3.1 2.2 4.4 1 1.2 2.4 2.2 4 3 1.6 0.7 3.6 1.1 5.9 1.1 2.3 0 4.3-0.4 5.9-1.1 1.6-0.7 3-1.7 4-3 1-1.2 1.8-2.7 2.2-4.4 0.4-1.6 0.7-3.4 0.7-5.2V52.6C226.4 52.2 226.1 51.8 225.7 51.8z"/><path class="st3" d="M254.2 70.2c-0.9-0.7-2-1.3-3.2-1.8 -1.2-0.5-2.4-0.9-3.8-1.4 -1-0.3-1.9-0.7-2.8-1.1 -0.9-0.4-1.7-0.8-2.3-1.4 -0.7-0.5-1.2-1.2-1.6-1.9 -0.4-0.7-0.6-1.7-0.6-2.8 0-1.1 0.2-2.1 0.7-2.9 0.5-0.8 1.1-1.5 1.8-2.1 0.8-0.6 1.6-1 2.6-1.3 2.3-0.7 4.8-0.5 6.9 0.4 1.2 0.5 2.2 1.3 2.9 2.2 0.1 0.2 0.3 0.3 0.5 0.3 0.2 0 0.4 0 0.5-0.2l0.8-0.7c0.3-0.3 0.3-0.7 0.1-1 -1-1.2-2.3-2.2-3.8-2.8 -2.8-1.2-6-1.3-8.8-0.4 -1.3 0.4-2.4 1-3.3 1.7 -1 0.8-1.8 1.7-2.3 2.8 -0.6 1.1-0.9 2.4-0.9 3.8 0 1.4 0.2 2.7 0.7 3.7 0.5 1 1.2 1.9 2 2.7 0.8 0.7 1.9 1.3 3 1.8 1.1 0.5 2.3 0.9 3.7 1.3 1 0.3 2.1 0.7 3.1 1.1 1 0.4 1.8 0.8 2.6 1.4 0.7 0.5 1.3 1.2 1.8 1.9 0.4 0.7 0.7 1.6 0.7 2.7 0 1.1-0.2 2.1-0.6 2.9 -0.4 0.8-1 1.5-1.7 2.1 -0.7 0.6-1.6 1-2.5 1.4 -2.3 0.8-5.1 0.6-7.5-0.4 -1.4-0.6-2.6-1.4-3.7-2.6 -0.3-0.3-0.7-0.3-1-0.1l-0.8 0.7c-0.1 0.1-0.2 0.3-0.2 0.5 0 0.2 0.1 0.4 0.2 0.5 1.1 1.3 2.6 2.3 4.3 3 1.7 0.7 3.6 1.1 5.7 1.1 1.3 0 2.7-0.2 3.9-0.6 1.3-0.4 2.4-1 3.3-1.8 0.9-0.8 1.7-1.8 2.3-2.9 0.6-1.2 0.9-2.5 0.9-3.9 0-1.5-0.3-2.7-0.8-3.8C255.9 71.8 255.1 70.9 254.2 70.2z"/><path class="st3" d="M58.4 102.9h-1c-0.4 0-0.7 0.3-0.7 0.7v14.1H36.8v-14.1c0-0.4-0.3-0.7-0.7-0.7h-1c-0.4 0-0.7 0.3-0.7 0.7v31.6c0 0.4 0.3 0.7 0.7 0.7h1c0.4 0 0.7-0.3 0.7-0.7v-15.2h19.8v15.2c0 0.4 0.3 0.7 0.7 0.7h1c0.4 0 0.7-0.3 0.7-0.7v-31.6C59.1 103.3 58.8 102.9 58.4 102.9z"/><path class="st3" d="M89.9 133.6H72.5V120h15.7c0.4 0 0.7-0.3 0.7-0.7v-0.9c0-0.4-0.3-0.7-0.7-0.7H72.5v-12.4h16.7c0.4 0 0.7-0.3 0.7-0.7v-0.9c0-0.4-0.3-0.7-0.7-0.7H70.8c-0.4 0-0.7 0.3-0.7 0.7v31.6c0 0.4 0.3 0.7 0.7 0.7h19.2c0.4 0 0.7-0.3 0.7-0.7v-0.9C90.6 134 90.3 133.6 89.9 133.6z"/><path class="st3" d="M114.4 103.4c-0.1-0.3-0.4-0.4-0.7-0.4h-1.2c-0.3 0-0.5 0.2-0.7 0.4L98.1 135c-0.1 0.2-0.1 0.5 0.1 0.7 0.1 0.2 0.4 0.3 0.6 0.3h1.1c0.3 0 0.6-0.2 0.7-0.4l3.7-8.6h17.4l3.6 8.6c0.1 0.3 0.4 0.4 0.7 0.4h1.1c0.2 0 0.5-0.1 0.6-0.3 0.1-0.2 0.2-0.5 0.1-0.7L114.4 103.4zM105.1 124.6l7.9-18.5 7.6 18.5H105.1z"/><path class="st3" d="M153.8 133.6h-15v-30c0-0.4-0.3-0.7-0.7-0.7h-1c-0.4 0-0.7 0.3-0.7 0.7v31.6c0 0.4 0.3 0.7 0.7 0.7h16.7c0.4 0 0.7-0.3 0.7-0.7v-0.9C154.5 134 154.2 133.6 153.8 133.6z"/><path class="st3" d="M179.3 102.9h-22.5c-0.4 0-0.7 0.3-0.7 0.7v0.9c0 0.4 0.3 0.7 0.7 0.7h10v30c0 0.4 0.3 0.7 0.7 0.7h1c0.4 0 0.7-0.3 0.7-0.7v-30h10c0.4 0 0.7-0.3 0.7-0.7v-0.9C180 103.3 179.7 102.9 179.3 102.9z"/><path class="st3" d="M211.8 102.9h-1c-0.4 0-0.7 0.3-0.7 0.7v14.1h-19.8v-14.1c0-0.4-0.3-0.7-0.7-0.7h-1c-0.4 0-0.7 0.3-0.7 0.7v31.6c0 0.4 0.3 0.7 0.7 0.7h1c0.4 0 0.7-0.3 0.7-0.7v-15.2h19.8v15.2c0 0.4 0.3 0.7 0.7 0.7h1c0.4 0 0.7-0.3 0.7-0.7v-31.6C212.5 103.3 212.2 102.9 211.8 102.9z"/><path class="st4" d="M220.6 103.1c2 0 3.6 1.5 3.6 3.6 0 2.1-1.6 3.6-3.6 3.6 -2 0-3.6-1.5-3.6-3.6C217 104.7 218.7 103.1 220.6 103.1zM220.6 109.8c1.6 0 3-1.3 3-3.1 0-1.7-1.3-3.1-3-3.1 -1.7 0-3 1.3-3 3.1C217.7 108.5 219 109.8 220.6 109.8zM219.3 104.6h1.6c1 0 1.5 0.4 1.5 1.2 0 0.8-0.5 1.1-1.1 1.2l1.2 1.9h-0.7l-1.1-1.8h-0.7v1.8h-0.6V104.6zM219.9 106.5h0.7c0.6 0 1.1 0 1.1-0.7 0-0.6-0.5-0.6-0.9-0.6h-0.8V106.5z"/>
						</svg>
					</a>
				</div>
				<nav class="menu-center">
					<ul class="nav">
						<?php
							$args = array(
								'theme_location'	=> 'header',
								'container'			=> 'false',
								'items_wrap'		=> '%3$s'
							);
						?>
						<?php wp_nav_menu($args); ?>
					</ul>
				</nav>
				<nav class="menu-right">
					<ul class="nav">
						<li class="menu-item search">
							<a class="open-search" href="javascript:void(0)"><i class="far fa-search"></i></a>
							<?php include(locate_template('inc/search-advanced.php')); ?>
						</li>
						<?php if (get_field('call_link', 'option')): ?>
							<?php
								$call_link = get_field('call_link', 'option');
								$call_link_url = $call_link['url'];
							?>
							<li class="menu-item call-hosparus"><a id="call-hosparus-btn" href="<?php echo $call_link_url; ?>"><i class="fas fa-phone"></i></a></li>
						<?php endif; ?>
						<li class="menu-item drawer">
							<a href="javascript:void(0)">Menu</a>
						</li>
					</ul>
				</nav>
			</div>
			<div id="menu-drawer" class="row">
				<nav class="menu-drawer">
					<ul class="nav desktop">
						<li class="menu-title">Menu</li>
						<?php
							$args = array(
								'theme_location'	=> 'drawer',
								'container'			=> 'false',
								'items_wrap'		=> '%3$s'
							);
						?>
						<?php wp_nav_menu($args); ?>
					</ul>
					<ul class="nav mobile">
						<?php
							$args = array(
								'theme_location'	=> 'header',
								'container'			=> 'false',
								'items_wrap'		=> '%3$s'
							);
						?>
						<?php wp_nav_menu($args); ?>
						<?php
							$args = array(
								'theme_location'	=> 'drawer',
								'container'			=> 'false',
								'items_wrap'		=> '%3$s'
							);
						?>
						<?php wp_nav_menu($args); ?>
					</ul>
					<?php if ( have_rows( 'footer_social_links', 'option' ) ) : ?>
						<ul class="social header-social">
							<?php while ( have_rows( 'footer_social_links', 'option' ) ) : the_row(); ?>
								<?php
									$network = get_sub_field('network');
									$link = get_sub_field('link');
									if ($link) {
										$link_url = $link['url'];
										$link_title = $link['title'];
										$link_target = $link['target'];
										if ($link_target == NULL) {
											$link_target = '_self';
										}
									}
								?>
								<li class="social-item">
									<?php if ($network == 'facebook' && $link): ?>
										<a href="<?php echo $link_url; ?>" target="<?php echo $link_target; ?>"><span class="visually-hide-text"><?php echo $link_title; ?></span><i class="fab fa-facebook-f icon"></i></a>
									<?php elseif ($network == 'twitter' && $link): ?>
										<a href="<?php echo $link_url; ?>" target="<?php echo $link_target; ?>"><span class="visually-hide-text"><?php echo $link_title; ?></span><i class="fab fa-twitter icon"></i></a>
									<?php elseif ($network == 'instagram' && $link): ?>
										<a href="<?php echo $link_url; ?>" target="<?php echo $link_target; ?>"><span class="visually-hide-text"><?php echo $link_title; ?></span><i class="fab fa-instagram icon"></i></a>
									<?php elseif ($network == 'snapchat' && $link): ?>
										<a href="<?php echo $link_url; ?>" target="<?php echo $link_target; ?>"><span class="visually-hide-text"><?php echo $link_title; ?></span><i class="fab fa-snapchat icon"></i></a>
									<?php elseif ($network == 'pinterest' && $link): ?>
										<a href="<?php echo $link_url; ?>" target="<?php echo $link_target; ?>"><span class="visually-hide-text"><?php echo $link_title; ?></span><i class="fab fa-pinterest icon"></i></a>
									<?php elseif ($network == 'googleplus' && $link): ?>
										<a href="<?php echo $link_url; ?>" target="<?php echo $link_target; ?>"><span class="visually-hide-text"><?php echo $link_title; ?></span><i class="fab fa-googleplus icon"></i></a>
									<?php elseif ($network == 'linkedin' && $link): ?>
										<a href="<?php echo $link_url; ?>" target="<?php echo $link_target; ?>"><span class="visually-hide-text"><?php echo $link_title; ?></span><i class="fab fa-linkedin-in icon"></i></a>
									<?php elseif ($network == 'youtube' && $link): ?>
										<a href="<?php echo $link_url; ?>" target="<?php echo $link_target; ?>"><span class="visually-hide-text"><?php echo $link_title; ?></span><i class="fab fa-youtube icon"></i></a>
									<?php elseif ($network == 'vimeo' && $link): ?>
										<a href="<?php echo $link_url; ?>" target="<?php echo $link_target; ?>"><span class="visually-hide-text"><?php echo $link_title; ?></span><i class="fab fa-vimeo icon"></i></a>
									<?php endif; ?>
								</li>
							<?php endwhile; ?>
						</ul>
					<?php endif; ?>
				</nav>
			</div>
		</div>
	</header>

	<main id="main">
