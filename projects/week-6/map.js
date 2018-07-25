var map;
// var myLatLong = {lat: 40.7608, lng: -111.8910}
//     var mapOptions = {
//         center: {
//             lat: 40.7608, 
//             lng: -111.8910
//         },
//         zoom: 12
//     }
function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.7608, 
            lng: -111.8910
        },
      zoom: 15,
      mapTypeId: 'roadmap'
    });
    var myLatLng = {
      lat: 40.7608, 
      lng: -111.8910
    };
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }








   // // Creates the map options
    // var mapOptions = {
    //     zoom: 8,
    //     center: new google.maps.LatLng(40.0583, -74.4057)
    // }
    
    // // Create the initial map
    // var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    // var geocoder = new google.maps.Geocoder();
    
    // var lat, lon;
    // var address = "<?php echo $finalCity ?>" + ", NJ";
    
    // geocoder.geocode( { 'address': address}, function(results, status) {
    //   if (status == google.maps.GeocoderStatus.OK)
    //   {
        
    //     var myLatLng = {lat: results[0].geometry.location.lat(), lng:  results[0].geometry.location.lng()};
        
    //     var marker = new google.maps.Marker({
    //         position: myLatLng,
    //         map: map,
    //         title: "<?php echo $finalCity ?>",
    //         animation: google.maps.Animation.DROP
    //     });
    //     map.setCenter(myLatLng);
    //     map.setZoom(11);
        
    //   }
    // });