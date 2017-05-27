function kliki (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
};
function dabli (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("doubled");
    $("#icon").toggleClass("fa fa-arrow-left fa fa-arrow-right");
    if ( $("#maps-link").text() == "Zatvori" ) {
        title = "Prikaži na karti";
    } else {
        title = "Zatvori";
        }
    $("#maps-link").text( title );
};
function klikoff () {
  $("#menu-toggle1").off( 'click', kliki);
};
function klikon () {
  $("#menu-toggle1").on('click', kliki);
};

$("#menu-toggle1").on("click", kliki);
$("#menu-toggle1").on("click", klikoff);
$("#menu-toggle2").on('click', kliki);
$("#menu-toggle2").on('click', klikon);
$("#menu-double").on('click', dabli);

var map;
function myMap() {
    var mapOptions = {
        center: {lat: 44.6313624, lng: 16.0895066},
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 map = new google.maps.Map(document.getElementById("maps-box"), mapOptions);
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
        map.setCenter(new google.maps.LatLng(44.6313624, 16.0895066));
        map.setZoom(7);
  }
});

$(function() {
  $('#selector').change(function(){
      $('.ocjena').slideUp("slow");
    $('.adresa').slideUp("slow");
    $('#' + $(this).val()).slideDown("slow");
  });
});

$( "#myform" ).submit(function( event ) {
  alert( "Vaša ocjena je unesena." );
  event.preventDefault();
});

$( ".rating-star" ).on("click", function () {
  $(this).css("background-position", "0 0");
  $(this).nextAll().css("background-position", "0 0");
  $(this).prevAll().css("background-position", "0 -16px");
});

$(document).ready(function(){
    $('input.item').typeahead({
        name: 'zahvati',
        remote: 'http://localhost:8080/search?key=%QUERY',
        limit: 10
    });
});
