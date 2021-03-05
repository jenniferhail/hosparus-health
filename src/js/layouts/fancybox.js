var fb,
fancybox = {
	settings: {
		callLink: $('.menu-item.call-hosparus a'),
		callLightbox: $('#call-hosparus'),
		searchLink: $('.menu-item.search a'),
		searchLightbox: $('#search-lightbox')
	},
	init: function() {
		fb = this.settings;
		this.bindUIActions();
		console.log('fancybox loaded!');
	},
	bindUIActions: function() {
		var windowSize = $(window).width();
		// Get width of window on load or resize
		$(window).on('load resize', function() {
			windowSize = $(window).width();
		});
		fb.callLink.on('click', function(evt) {
			// console.log('You clicked the phone icon.');
			if ( windowSize >= 1060 ) {
				evt.preventDefault();
				$.fancybox.open(fb.callLightbox);
			}
		});
		fb.searchLink.on('click', function(evt) {
			// console.log('You clicked the search icon.');
			if ( windowSize < 1060 ) {
				evt.preventDefault();
				$.fancybox.open(fb.searchLightbox);
			}
		});
	}
};
