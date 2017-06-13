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
    //urAdrress(map);


//map.removeOverlay(marker);

$(document).ready(function(){
    var mark = document.getElementById('mark').innerHTML;
    var nazivUstanove = document.getElementById('nazivUstanove').innerHTML;
    var adr = document.getElementById('adr');
  });
  console.log("ovo" + jQuery(adr).val());
//  console.log("a ovo....." + jQuery(nazivUstanove).text());
    let adrU = [];
    let allAddresses = [];
    let allNazivs = [];
    if(jQuery(adr).val() != ""){
    adrU.push(jQuery(adr).val());
    var pinColor = "ADDE63";
   var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
       new google.maps.Size(30, 40),
       new google.maps.Point(0,0),
       new google.maps.Point(10, 34));
    geocoder.geocode( { 'address': adrU[0]}, function(results, status) {
         if (status == google.maps.GeocoderStatus.OK) {
           if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
           map.setCenter(results[0].geometry.location);
          // map.setCenter(results[0].geometry.location);
            map.setZoom(14);
             var umarker = new google.maps.Marker({

                 position: results[0].geometry.location,
                 map: map,
                 icon: pinImage,
                 color:'#fff',
                 title:'Vasa Adresa'

             });

             markers.push(umarker);

  }
  };
  });
}

    //console.log("TREBALE BI BIT USTANOVE: " + nazivUstanove)
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
            '</div>';

      geocoder.geocode( { 'address':allAddresses[i]}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });


          //console.log(infoContent)
          marker.info = new google.maps.InfoWindow({
            content: infoContent
          });

          markers.push(marker);
          google.maps.event.addListener(marker, 'click', function() {
                    map.setZoom(14);
                    map.setCenter(marker.getPosition());
                    marker.info.open(map, marker);

                });
      }

    });

  };
  // let infoContent = '<div id="content" class="naziv-ustanove" style="font-size:14px;width:100%">'+
  //       '<div id="siteNotice">'+
  //
  //       '</div>'+
  //       '</div>';
  // umarker.info = new google.maps.InfoWindow({
  //   content: infoContent
  // });
  // google.maps.event.addListener(umarker, 'click', function() {
  //           map.setZoom(14);
  //           map.setCenter(marker.getPosition());
  //           umarker.info.open(map, umarker);
  //
  //       });



    console.log("adrU = "+ adrU);

//   geocoder.geocode( { 'address': adrU[0]}, function(results, status) {
//        if (status == google.maps.GeocoderStatus.OK) {
//          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
//          map.setCenter(results[0].geometry.location);
//
//           //  var infowindow = new google.maps.InfoWindow(
//           //      { content: '<b>'+adrU+'</b>',
//           //        size: new google.maps.Size(150,50)
//           //      });
//
//            var marker = new google.maps.Marker({
//                position: results[0].geometry.location,
//                map: map,
//
//            });
//            markers.push(marker);
//           //  google.maps.event.addListener(urmarker, 'click', function() {
//           //      infowindow.open(map,urmarker);
//           //  });
// }
// };
// });



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


// function urAdrress() {
//    $(document).ready(function(){
//      var adr = document.getElementById('adr').innerHTML;
//     });
//    geocoder.geocode( { 'address': adr}, function(results, status) {
//         if (status == google.maps.GeocoderStatus.OK) {
//           if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
//           map.setCenter(results[0].geometry.location);
//
//             var infowindow = new google.maps.InfoWindow(
//                 { content: '<b>'+address+'</b>',
//                   size: new google.maps.Size(150,50)
//                 });
//
//             var urmarker = new google.maps.Marker({
//                 position: results[0].geometry.location,
//                 map: map,
//                 title:address
//             });
//             google.maps.event.addListener(urmarker, 'click', function() {
//                 infowindow.open(map,urmarker);
//             });
//  }
//  };
//  });
// }

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
