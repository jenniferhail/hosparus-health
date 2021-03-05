<form method="get" id="nav-search" class="nav-search" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<div class="fieldset search-bar">
		<label for="search-field">
			<label for="s" class="text assistive-text"><?php _e( 'Search' ); ?></label>
			<input type="text" class="search-field" name="s" id="s" placeholder="<?php esc_attr_e( 'Search' ); ?>" />
		</label>
		<input type="submit" class="search-submit" name="submit" id="searchsubmit" value="<?php esc_attr_e( 'Search' ); ?>" />
	</div>
</form>
