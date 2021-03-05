var sg,
styleGuide = {
	settings: {

	},
	init: function() {
		sg = this.settings;
		this.bindUIActions();
		console.log('loaded style guide');
	},
	bindUIActions: function() {
		$('section.layout').each(function () {
	        var id = $(this).attr('id');
			var title = $(this).find('.style-title').text();
	        $('.style-guide-nav ul').append('<li><a href="#' + id + '">' + title + '</a></li>');
	    });
	}
};
