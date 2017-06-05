$(document).ready( function () {
   $('#forma1').on('submit', function (event) {
     event.preventDefault(); // Stop the form from causing a page refresh.
     var data = {
       txtInput: $("input[name=item]").val(),
       searchOption: $('#selector').val(),
       stateSelector: $('#selector1').val()
     };
     data = $(this).serialize();
     //inputdata = JSON.stringify(inputdata);
     $.ajax({
       method: 'POST',
       url: '/',
       data: data,
       dataType: 'json',
       success: function(response) {
      //   alert("SUCCESS: " + JSON.stringify(response));
         var dejta = JSON.stringify(response);
         $('#scroll-box').html(dejta);
       },
       error: function(xhr, status, error) {
           alert(xhr.responseText, status, error); // error occur
       }
     })
   });

   $('#myform').on('submit', function (event) {
     event.preventDefault(); // Stop the form from causing a page refresh.
     var data = {
     nazivUStanove: $("input[name=ustanovaInp]").val(),
     nazivZahvata: $("input[name=zahvatInp]").val(),
     spol: $('#selector2').val(),
     age: $('#selector2').val(),
     ukupnoZadovoljstvo: $("#ukupnoZadovoljstvo input[type='radio']:checked").val(),
     profesionalnost: $("#profesionalnost input[type='radio']:checked").val(),
     ukupnoZadovoljstvo: $("#prostor input[type='radio']:checked").val()
             };
           data = $(this).serialize();
           $.ajax({
           method: 'POST',
           url: '/rate',
           data: data,
           success: function(data) {
           alert("SUCCESS: " + data);
           },
           error: function(xhr, status, error) {
               alert(xhr.responseText, status, error); // error occur
           }
           })
     });
});


function kliki () {
  //  e.preventDefault();       // ako se linija uključi, submit prvo izvuce sidebar-wrapper, pa tek na drugi klik prikazuje rezultate
    $("#wrapper").toggleClass("toggled");
};
function dabli () {
  //  e.preventDefault();
    $("#wrapper").toggleClass("doubled");
    $("#icon").toggleClass("fa fa-arrow-left fa fa-arrow-right");
    if ( $("#maps-link").text() == "ZATVORI" ) {
        title = "PRIKAŽI NA KARTI";
    } else {
        title = "ZATVORI";
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

  $('#selector').change(function(){
    $('.ocjena').slideUp("slow");
    $('.adresa').slideUp("slow");
    $('#' + $(this).val()).slideDown("slow");
    if($(this).val() == 2) {
      $("#adr").attr("required", true);
    }
    else {
      $("#adr").attr("required", false);
    }
  });

  //Izvjestavanje
    $('#selector_stanja').change(function(){
	$('.stanje7').slideUp("slow");
    $('.stanje8').slideUp("slow");
	$('.stanje9').slideUp("slow");
    $('#' + $(this).val()).slideDown("slow");

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

// Autocomplete, svi na stranici:
$(document).ready(function(){
    $('#tags').typeahead({
        name: 'zahvati',
        remote: 'http://localhost:8080/search-zahvati?key=%QUERY',
        limit: 100
    });
    $('#zInp').typeahead({
        name: 'zahvati',
        remote: 'http://localhost:8080/search-zahvati?key=%QUERY',
        limit: 100
    });
    $('#uInp').typeahead({
        name: 'ustanove',
        remote: 'http://localhost:8080/search-ustanove?key=%QUERY',
        limit: 100
    });
    $('#sel_stanja7').typeahead({
        name: 'zahvati',
        remote: 'http://localhost:8080/search-zahvati?key=%QUERY',
        limit: 100
    });
    $('#sel_stanja9').typeahead({
        name: 'ustanove',
        remote: 'http://localhost:8080/search-ustanove?key=%QUERY',
        limit: 100
    });
});
