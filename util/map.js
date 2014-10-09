function initialize() {
		  var myLatlng = new google.maps.LatLng(40.0000, -100.0000);
		  var mapOptions = {
			zoom: 4,
			center: myLatlng
		  }
		  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		  var image = {
			url: 'Logo.png',
			// This marker is 20 pixels wide by 32 pixels tall.
			size: new google.maps.Size(116, 100),
			// The origin for this image is 0,0.
			origin: new google.maps.Point(0,0),
			// The anchor for this image is the base of the flagpole at 0,32.
			anchor: new google.maps.Point(0, 32)
		  };
			
			var locations = [
			  ['New York', 42.3482, -75.1890, 4],
			  ['Los Angeles', 34.0308, -118.1437, 5],
			  ['Seattle', 47.6097, -122.3331, 3],
			  ['Miami', 25.7877, -80.2241, 2],
			  ['Indianapolis', 39.7910, -86.1480, 1]
			];
			
			for (var i = 0; i < locations.length; i++) {
			var location = locations[i];
			var myLatLng = new google.maps.LatLng(location[1], location[2]);
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				//icon: image,
				title: location[0],
				zIndex: location[3]
			});
			}
		}
		google.maps.event.addDomListener(window, 'load', initialize);
