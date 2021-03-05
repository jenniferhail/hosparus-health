var lm,
locationsMap = {
	settings: {

	},
	init: function() {
		lm = this.settings;
		this.bindUIActions();
		console.log('locations map loaded!');
	},
	bindUIActions: function() {
	}
};

// Initialize and add the map
function initMap() {
	var map = document.getElementById('map');
	var uluru = {lat: -25.344, lng: 131.036};
	var googleMap = new google.maps.Map(map, {
		zoom: 13,
		center: uluru
		// disableDefaultUI: true,
	});
};
