<?php get_header(); ?>

<?php
	$image = get_field('image');
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
	// if ($credential) {
	// 	$full_name .= ' ' . $credential;
	// }

    $email = get_field('email');
    $facebook = get_field('facebook');
    $twitter = get_field('twitter');
	$bio = get_field('bio');
	$display_bio = $bio['display_bio'];
	$bio_content = $bio['bio_content'];
?>

<div class="page">
    <?php if (have_posts()) : while(have_posts()) : the_post(); ?>
        <section class="layout single profile">
            <div class="wrapper">

                <article id="post-<?php the_ID(); ?>" <?php post_class('row'); ?>>

                    <?php if($image): ?>
                        <div class="float">
                            <div class="image-wrapper">
                                <!-- <div class="background-image" style="background-image: url(<?php // echo $image['sizes']['medium']; ?>);">
                                    <?php // echo wp_get_attachment_image($image['ID'], 'medium', 'false', ['class' => 'visually-hide-image']); ?>
                                </div> -->
								<?php echo wp_get_attachment_image($image['ID'], 'medium', 'false'); ?>
                            </div>
                        </div>
                    <?php endif; ?>

                    <div class="heading">
                        <ul class="details one-line">
                            <li><h1 class="h3 title">
								<?php if ($full_name != ''): ?>
									<?php echo $full_name ?>
								<?php else: ?>
									<?php the_title(); ?>
								<?php endif; ?>
							</h1></li>
							<?php if ($credential): ?>
								<li><span class="p"><?php echo $credential; ?></span></li>
							<?php endif; ?>
                            <?php $post_terms = wp_get_post_terms(get_the_ID(), 'position'); ?>
                            <?php foreach ($post_terms as $term) : ?>
                                <li><span class="p"><?php echo $term->name; ?></span></li>
                            <?php endforeach; ?>
                        </ul>
						<?php if ($email || $facebook || $twitter): ?>
	                        <ul class="social">
	                            <li class="label">Connect</li>
	                            <?php if($email) : ?>
	                                <li><a href="mailto:<?php echo $email; ?>"><i class="fas fa-envelope"></i></a></li>
	                            <?php endif; ?>
	                            <?php if($facebook) : ?>
	                                <li><a href="<?php echo $facebook; ?>" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
	                            <?php endif; ?>
	                            <?php if($twitter) : ?>
	                                <li><a href="<?php echo $twitter; ?>" target="_blank"><i class="fab fa-twitter"></i></a></li>
	                            <?php endif; ?>
	                        </ul>
						<?php endif; ?>
                    </div>

					<?php if ($display_bio): ?>
						<div class="content">
							<?php echo $bio_content; ?>
						</div>
					<?php endif; ?>

                </article>

            </div>
        </section>
    <?php endwhile; endif; wp_reset_postdata(); ?>

	<?php
		// WP_Query arguments
		$args = array(
			'post_type'         => 'post',
			'posts_per_page'    => -1,
			// 'order'             => $order,
			// 'orderby'           => $order_by,
			'meta_query'        => array(
				array(
					'key'		=> 'author',
					'value'		=> '"' . get_the_ID() . '"',
					'compare'	=> 'LIKE'
				)
			)
		);

		// The Query
		$query = new WP_Query($args);
	?>

	<?php if($query->have_posts()): ?>
		<section class="layout listing post carousel background">
			<div class="component intro">
				<h1 class="h2 subtitle">Articles by <?php echo $first_name; ?></h1>
			</div>
			<div class="wrapper">
				<div class="row">
					<ul class="item-list">
						<?php while ($query->have_posts()): $query->the_post(); ?>
							<li id="post-<?php the_ID(); ?>" class="item">
								<div class="item-wrapper">
									<div class="heading">
										<ul class="details one-line">
											<li><h3 class="title"><?php the_title(); ?></h3></li>
											<li><time class="p" datetime=""><?php echo get_the_date(); ?></time></li>
										</ul>
									</div>
									<div class="content">
										<?php echo wp_trim_words(get_the_excerpt(), $num_words = 20, $more = null); ?>
									</div>
									<div class="buttons">
										<a href="<?php the_permalink(); ?>" class="btn"><span>Read Article</span></a>
									</div>
								</div>
							</li>
						<?php endwhile;?>
						<?php wp_reset_postdata(); ?>
					</ul>
					<div class="buttons center">
						<a href="<?php echo get_page_link('1472'); ?>" class="btn"><span>More Articles</span></a>
					</div>
				</div>
			</div>
		</section>
	<?php else: ?>
		<!-- // Do nothing -->
	<?php endif; ?>

</div>

<?php get_footer(); ?>
