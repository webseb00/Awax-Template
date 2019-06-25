
function initMap() {
	var location = {lat: -37.8142176, lng: 144.9631608};
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: -37.8142, lng: 144.96299999999997},
	  zoom: 14,
	  zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
      }
	});
	var marker = new google.maps.Marker({position: location, map: map});
}