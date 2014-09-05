var style_array = [
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#84afa3"
            },
            {
                "lightness": 52
            }
        ]
    },
    {
        "stylers": [
            {
                "saturation": -77
            }
        ]
    },
    {
        "featureType": "road"
    }
];

function initializeMap() {

	        var myOptions = {
	          center: new google.maps.LatLng(-34.397, 150.644),
	          zoom: 16,
	          mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: style_array}

	        var map = new google.maps.Map(document.getElementById("map_canvas"),
	            myOptions);

		  var geocoder = new google.maps.Geocoder();
		  var address = '129A E Main St, Abingdon, VA';

		  geocoder.geocode( { 'address': address}, function(results, status) {
		        if (status == google.maps.GeocoderStatus.OK) {
		          map.setCenter(results[0].geometry.location);
		          var marker = new google.maps.Marker({
		              map: map,
		              position: results[0].geometry.location
		          });
		        } else {
		          alert("Geocode was not successful for the following reason: " + status);
		        }
		      });

	      }
