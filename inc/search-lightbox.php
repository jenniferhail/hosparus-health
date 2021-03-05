<form method="get" id="nav-search" class="nav-search" action="<?php echo esc_url( home_url( '/search-results/' ) ); ?>">
	<div class="fieldset search-bar">
		<label for="search-field">
			<label for="fwp_site_search" class="text visually-hide-label assistive-text"><?php _e( 'Search' ); ?></label>
			<input type="text" class="search-field" name="fwp_site_search" id="fwp_site_search" placeholder="<?php esc_attr_e( 'Search' ); ?>" />
		</label>
		<input type="submit" class="search-submit" name="submit" id="searchsubmit" value="<?php esc_attr_e( 'Search' ); ?>" />
		<button class="close-btn" type="close"><i class="fal fa-plus"></i></button>
	</div>
</form>
