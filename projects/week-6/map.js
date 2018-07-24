var map;
function initMap() {
    var myLatLong = {lat: 40.7608, lng: -111.8910}
    var mapOptions = {
        center: {
            lat: 40.7608, 
            lng: -111.8910
        },
        zoom: 12
    }
    
    map = new google.maps.Map(document.getElementById('map'), 
    {
    center: myLatLong,
    zoom: 12
    });

    var marker = new google.maps.Marker({
        position: myLatLong,
        map: map,
        title: 'Hello, World!'
    });

 
}
init();







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