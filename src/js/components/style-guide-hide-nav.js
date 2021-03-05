var sghn,
styleGuideHideNav = {
	settings: {

	},
	init: function() {
		sghn = this.settings;
		this.bindUIActions();
		console.log('loaded style guide hide nav');
	},
	bindUIActions: function() {
		$('.toggle-style-guide-nav').on('click', function(e) {
			e.preventDefault();
			$('body').toggleClass('hide-style-guide-nav');
		});
	}
};
