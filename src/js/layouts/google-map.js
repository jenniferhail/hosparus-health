var gm,
googleMap = {
	settings: {
		mapMain: {},
		mapElement: $('.map-canvas')[0],
		mapOptions: {
			  // How zoomed in you want the map to start at (always required)
			  zoom: 11,
			  mapTypeControl: false,
			  scaleControl: false,
			  streetViewControl: false,
			  // The latitude and longitude to center the map (always required)
			  // Set to the coordinates of the first marker — fixes the zoom issue with only one marker
			  center: new google.maps.LatLng(locationData[0].lat, locationData[0].lng),
			  // Map styles from Snazzy Maps.
			  styles: [
			    {
			        "featureType": "water",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#e9e9e9"
			            },
			            {
			                "lightness": 17
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f5f5f5"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 17
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 29
			            },
			            {
			                "weight": 0.2
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 18
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 16
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f5f5f5"
			            },
			            {
			                "lightness": 21
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#dedede"
			            },
			            {
			                "lightness": 21
			            }
			        ]
			    },
			    {
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 16
			            }
			        ]
			    },
			    {
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "saturation": 36
			            },
			            {
			                "color": "#333333"
			            },
			            {
			                "lightness": 40
			            }
			        ]
			    },
			    {
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f2f2f2"
			            },
			            {
			                "lightness": 19
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#fefefe"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#fefefe"
			            },
			            {
			                "lightness": 17
			            },
			            {
			                "weight": 1.2
			            }
			        ]
			    }
			]
		 },
		mapMarkers: [],
		mapWindows: [],
		mapSearchBtn: $('.search-btn'),
		mapSearchField: $('.search-zip'),
		mapSearchVal: '',
		mapResults: [],
		mapResetBtn: $('.reset-btn'),
		mapError: $('.error-message'),
		markerPath: globalVar.themePath + '/app/assets/img/',
		// markerPath: '/app/themes/hosparus-health/app/assets/img/',
		// markerPath: '/wp-content/themes/hosparus-health/app/assets/img/',
		markerDefault: 'baseline-place-38px.svg',
		markerActive: 'baseline-place-navy.svg',
	},
	init: function(){
		gm = this.settings;
		this.bindUIActions();
		if (gm.mapElement) {
			gm.mapMain = new google.maps.Map(gm.mapElement, gm.mapOptions);
			console.log('Creating map...');
			googleMap.createMarkers();
		}
	},
	bindUIActions: function(){
		// Execute some methods when the search button is clicked.
		gm.mapSearchBtn.click(function(evt) {
			evt.preventDefault();
			googleMap.findLocations();
		});
		gm.mapSearchField.on('keyup', function(evt) {
			if (evt.which == 13) {
				evt.preventDefault();
				googleMap.findLocations();
			}
		});
		gm.mapSearchField.on('input', function(evt) {
			// Clear the error msg
			gm.mapError.html('');
		});
		gm.mapResetBtn.click(function(evt) {
			// evt.preventDefault();
			// Clear the error msg
			gm.mapError.html('');
			// Clear the input field
			gm.mapSearchField.val('');
			// Close all marker windows.
			$.each(gm.mapWindows, function(index, infoWindow){
				infoWindow.close();
			});
			// Create a new bounds object we will use to position the map. Needed to support multiple location results.
			var resetBounds = new google.maps.LatLngBounds();
			$.each(gm.mapMarkers, function(index, marker){
				// Reset active icons to default color
				marker.setIcon(gm.markerPath + gm.markerDefault);
				resetBounds.extend(marker.position);
			});
			// Position map using the bounds from the markers.
			gm.mapMain.fitBounds(resetBounds);
		});
	},
	createMarkers: function(){
		console.log('Creating markers...');
		// Create a new bounds object we will use to position the map.
		var bounds = new google.maps.LatLngBounds();
		// Loop through locations and create markers and info windows.
		$.each(locationData, function(index, location) {
			// Create the marker.
			var marker = new google.maps.Marker({
				id: location.id,
				position: new google.maps.LatLng(location.lat, location.lng),
				map: gm.mapMain,
				title: location.name,
				draggable: false,
				flat: true,
				icon: gm.markerPath + gm.markerDefault,
			});
			// Create the info window.
			var infoWindowContent = '<div class="marker-window"><span class="h6 marker-title">' + location.name + '</span><div class="links"><a href="' + location.link + '">View Location</a> | <a href="' + location.directions + '" target="_blank">Get Directions</a></div></div>';
			var infoWindow = new google.maps.InfoWindow({
				id: location.id,
				content: infoWindowContent
			});
			// Add the click handler for the marker
			marker.addListener('click', function() {
				gm.mapMain.panTo(marker.getPosition());
				infoWindow.open(gm.mapMain, marker);
			});
			// Push marker and info window data to their respective arrays.
			gm.mapMarkers.push(marker);
			gm.mapWindows.push(infoWindow);
			// Push the marker position to the bounds for correct map positioning.
			bounds.extend(marker.position);
		});
		// Reposition the map based on the locations present on the map
		// Position map using the bounds from the markers.
		if (locationData.length > 1) {
			gm.mapMain.fitBounds(bounds);
			gm.mapMain.panToBounds(bounds);
		} else {
			// console.log('Only one marker present.');
			// gm.mapMain.fitBounds(bounds);
		}

	},
	findMarkers: function(){
		console.log('Searching locations...');
		// Get the value of the search input field.
		gm.mapSearchVal = gm.mapSearchField.val();
		gm.mapResults = [];
		// Loop through all location data.
		$.each(locationData, function(index, location){
			// Loop through the zip codes of this location.
			$.each(location.zipCodes, function(zipIndex, zipCode){
				if(zipCode == gm.mapSearchVal){
					// If the search term matches a zip code in a location, push that locations marker to the mapResults array.
					var markerMatch = gm.mapMarkers.filter(function(obj) { return obj.id == locationData[index].id});
					// Push the first value of the match. There will only ever be one value matched since ids are unique.
					gm.mapResults.push(markerMatch[0]);
				}
			});
		});
	},
	gotoMarkers: function(){
		console.log('Found ' + gm.mapResults.length + ' location(s)...');
		// Close all marker windows.
		$.each(gm.mapWindows, function(index, infoWindow){
			infoWindow.close();
		});
		// Throw message if there are no results and stop this function.
		if(gm.mapResults.length == 0){
			gm.mapError.html('Sorry, there are no Hosparus Health locations in your area.');
			return;
		}
		// Create a new bounds object we will use to position the map. Needed to support multiple location results.
		var bounds = new google.maps.LatLngBounds();
		// Loop through each result marker and open it's info window.
		$.each(gm.mapResults, function(index, marker){
			marker.setIcon(gm.markerPath + gm.markerActive);
			// Extend the bounds object to include this markers position.
			bounds.extend(marker.position);
			// Open the info window associated with this marker.
			var activeWindow = gm.mapWindows.filter(function(obj) { return obj.id == marker.id });
			// console.log(activeWindow);
			activeWindow[0].open(gm.mapMain, marker);
		});
		// Position map using the bounds from the markers.
		gm.mapMain.fitBounds(bounds);
		gm.mapMain.panToBounds(bounds);
		//googleMap.smoothZoom(gm.mapMain, 18, gm.mapMain.getZoom());
		// Adjust zoom if there is one result. Throw message if there is more than one result.
		if(gm.mapResults.length == 1){
			gm.mapMain.setZoom(9);
		} else {
			gm.mapError.html('Your zip code has multiple service locations. Please contact us.');
		}
	},
	alertMessage: function(message){
		alert(message);
	},
	smoothZoom: function(map, max, cnt){
		if (cnt >= max) {
			return;
		}
		else {
			z = google.maps.event.addListener(map, 'zoom_changed', function(event){
				google.maps.event.removeListener(z);
				googleMap.smoothZoom(map, max, cnt + 1);
			});
			setTimeout(function(){map.setZoom(cnt)}, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
		}
	},
	findLocations: function(){
		googleMap.findMarkers();
		googleMap.gotoMarkers();
	}
}
