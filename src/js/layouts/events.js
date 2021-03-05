var ev,
events = {
	settings: {
		backBtn: $('#back-to-events')
	},
	init: function() {
		ev = this.settings;
		this.bindUIActions();
		console.log('events loaded!');
	},
	bindUIActions: function() {
		if ( ev.backBtn.length > 0 ) {
			var backUrl = document.referrer;
			// console.log('Back url: ' + backUrl);
			if ( backUrl.length > 0 ) {
				// console.log('The back url is not empty.');
				// Check to see if query strings exist in the back url
				if ( backUrl.indexOf('fwp_event_type') != -1 ) {
					// console.log('The back url contains fwp_event_type');
					events.changeLink(backUrl);
				} else if ( backUrl.indexOf('fwp_event_location') != -1 ) {
					// console.log('The back url contains fwp_event_location');
					events.changeLink(backUrl);
				} else if ( backUrl.indexOf('fwp_event_date') != -1 ) {
					// console.log('The back url contains fwp_event_date');
					events.changeLink(backUrl);
				}
			}
		}
	},
	changeLink: function(newUrl) {
		ev.backBtn.attr('href', newUrl);
	}
};
