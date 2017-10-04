// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");

  // CODE IN HERE!
	  $.ajax({
		  method: 'GET',
		  url: weekly_quakes_endpoint,
		  // data:
		  success: onSuccess,
		  error: onError, 
	  });
	      function initMap() {
        var sanFrancisco = { lat: 37.78, lng: -122.44}
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: sanFrancisco
        });
        var marker = new google.maps.Marker({
          position: sanFrancisco,
          map: map
        });
      }
	initMap();
});

  function onSuccess(responseData){
  	console.log(responseData )
  	responseData.features.forEach(function(name){
  		$('#info').append(`<p>${name.properties.title}</p>`);
  		

  	})

  }

  function onError(){
  	console.log("error")
  }


