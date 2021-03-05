var rl,
rellax = {
	settings: {

	},
	init: function() {
		rl = this.settings;
		this.bindUIActions();
		console.log('rellax loaded!');
	},
	bindUIActions: function() {
		var windowSize = $(window).width();
		// Get width of window on load or resize
		$(window).on('load resize', function() {
			windowSize = $(window).width();
		});
		if (windowSize > 760) {
			if (document.getElementsByClassName('rellax').length != 0) {
				var rellax = new Rellax('.rellax', {
					speed: 1,
					center: false,
					wrapper: null,
					round: true,
					vertical: true,
					horizontal: false
				});
			}
		}
	}
};
