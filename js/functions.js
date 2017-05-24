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

function displayMap() {
            document.getElementById('maps-box').style.display="inline-block";
            initialize();
        }
 function initialize() {
          // create the map

        var myOptions = {
            zoom: 14,
            center: new google.maps.LatLng(0.0, 0.0),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
            map = new google.maps.Map(document.getElementById("maps-box"),
                                        myOptions);

         }


$("#menu-double").on('click', function () {
  var x = document.getElementById('maps-box');
  if (x.style.display === 'inline-block') {
      $("#maps-box").animate({width: 0}, 500);
      google.maps.event.trigger(map, 'resize');
      x.style.display = 'none';
  } else {
      x.style.display = 'inline-block';
      $("#maps-box").animate({width: '550px'}, 500);
      google.maps.event.trigger(map, 'resize');
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


