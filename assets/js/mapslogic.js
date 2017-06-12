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
//console.log(functions.adrese);
var markers = [];
function codeAddress() {

  if ( $("#maps-link").text() == "PRIKAŽI NA KARTI" ){

//map.removeOverlay(marker);
  $(document).ready(function(){

    var mark = document.getElementById('mark').innerHTML;
    var nazivUstanove = document.getElementById('nazivUstanove').innerHTML;
  });

    let allAddresses = [];
    let allNazivs = [];
    console.log("TREBALE BI BIT USTANOVE: " + nazivUstanove)
    for(var i=0;i<mark.length;i++){
      allAddresses.push(jQuery(mark[i]).text().split(": ")[1]);
      //allNazivs.push(jQuery(nazivUstanove[i]).text());
    }
    var allLabels =[];
    for(var i=0;i<nazivUstanove.length;i++){
    //  console.log(jQuery(label[i]).text());
      allLabels.push(jQuery(nazivUstanove[i]).text());
    }


    for(var i=0;i<allAddresses.length;i++){
      //TOODOO: Uredit div za markere
      let infoContent = '<div id="content" class="naziv-ustanove" style="font-size:14px;width:100%">'+
            '<div id="siteNotice">'+
            ''+allLabels[i]+'<div style="font-size:12px;margin-top:5px">'+allAddresses[i]+'</div>'+
            '</div>'+
            '</div>'

      geocoder.geocode( { 'address':allAddresses[i]}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        //  map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });


          console.log(infoContent)
          marker.info = new google.maps.InfoWindow({
            content: infoContent
          });

          markers.push(marker);
          google.maps.event.addListener(marker, 'click', function() {
                    //alert(address);  //use alert to debug address
                    map.setZoom(14);
                    map.setCenter(marker.getPosition());
                    marker.info.open(map, marker);

                });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }

    });

  }
}else if ( $("#maps-link").text() == "ZATVORI" ){
  allAddresses = [];
  DeleteMarkers();
}
  }
  function DeleteMarkers() {
    //console.log("tu");
       //Loop through all the markers and remove
       for (var i = 0; i < markers.length; i++) {
           markers[i].setMap(null);
       }
       markers = [];
   };


$("#menu-double").on('click', function () {
  var x = document.getElementById('maps-box');
  if (x.style.marginRight === '0px') {
      x.style.visibility = 'hidden';
      $("#maps-box").animate({"margin-right": '-700px'}, 500);
  } else {
      x.style.visibility = 'visible';
      $("#maps-box").animate({"margin-right": '0px'}, 500);
      google.maps.event.trigger(map, "resize");
        map.setCenter(new google.maps.LatLng(44.6313624, 16.0895066));
        map.setZoom(7);
  }
});
