// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var quake = [];
 var image = {
          url: 'images/earthquake.png',
          // // This marker is 20 pixels wide by 32 pixels high.
          // size: new google.maps.Size(100, 100),
          // // The origin for this image is (0, 0).
          // // origin: new google.maps.Point(0, 0),
          // // // The anchor for this image is the base of the flagpole at (0, 32).
          // // anchor: new google.maps.Point(0, 32)
        };
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

});

  function onSuccess(responseData){
  	console.log(responseData )
  	responseData.features.forEach(function(name){
  		$('#info').append(`<p>${name.properties.title}</p>`);

  		quake.push({lat:name.geometry.coordinates[1], lng:name.geometry.coordinates[0]})
  		// console.log(name.geometry.coordinates[0],name.geometry.coordinates[1]);
  		//console.log(name.properties.time);
  	
  		initMap();

  	})

  }

  function onError(){
  	console.log("error")
  }

	function initMap() {
        var sanFrancisco = { lat: 37.78, lng: -122.44}
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: sanFrancisco
        });
        
       
        var markers = quake.map(function(ob) {
        
       		return new google.maps.Marker({
           		position: ob,
           		icon:image ,
           		map: map
       		});

  		});
    }
