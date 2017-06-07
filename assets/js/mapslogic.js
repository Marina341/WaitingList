var map;
function myMap() {
  geocoder = new google.maps.Geocoder();
    var mapOptions = {
        center: {lat: 44.6313624, lng: 16.0895066},
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 map = new google.maps.Map(document.getElementById("maps-box"), mapOptions);
}
function codeAddress() {
  alert("codeAddres is actived");
    var address = ["Kaniška 111, 53000 Gospic","Željka Selingera bb, 48000 Koprivnica"];
    //var adres="Željka Selingera bb, 48000 Koprivnica";
    for(var i=0;i<address.length;i++){
    geocoder.geocode( { 'address': address[i]}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  }



$("#menu-double").on('click', function () {
  var x = document.getElementById('maps-box');
  if (x.style.marginRight === '0px') {
      x.style.visibility = 'hidden';
      $("#maps-box").animate({"margin-right": '-700px'}, 500);
  } else {
      x.style.visibility = 'visible';
      $("#maps-box").animate({"margin-right": '0px'}, 500);
      google.maps.event.trigger(map, "resize");
        //map.setCenter(new google.maps.LatLng(44.6313624, 16.0895066));
        //map.setZoom(7);
  }
});
