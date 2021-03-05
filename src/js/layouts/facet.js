var ft,
facet = {
	settings: {
		query: $('.facet-query'),
		layouts: $('.blog-wrapper'),
		offset: 112,
	},
	init: function() {
		ft = this.settings;
		this.bindUIActions();
		console.log('facet loaded!');
	},
	bindUIActions: function() {

		// Add media query to tab view at ac.breakpoint
		var windowSize = $(window).width();

		$(document).on('facetwp-loaded', function() {
			// Get width of window on load or resize
			$(window).on('load resize', function() {
				windowSize = $(window).width();
			});
			// Scroll to top of listing layout after interacting with Facet
			if (FWP.loaded) {
				if (windowSize >= 1059) {
					ft.offset = 163;
				} else if (windowSize >= 500) {
					ft.offset = 133;
				}
				$('html, body').animate({
	                scrollTop: $('.facetwp-template').offset().top - ft.offset
	            }, 500);
	        }
		});

		$(document).on('facetwp-loaded', function() {
			// console.log( FWP.facets.blog_search );
			// console.log( FWP.facets.categories );
			if ( $('body').hasClass('page-template-blog') ) {
				if (FWP.facets.blog_search.length > 0 || FWP.facets.categories.length > 0) {
					ft.query.removeClass('hide');
					ft.layouts.addClass('hide');
				} else {
					ft.layouts.removeClass('hide');
					ft.query.addClass('hide');
				}
			}
        });

	}
};
