$(document).ready(function(){
      $('#forma1').on('submit', function (event) {
      event.preventDefault(); // Stop the form from causing a page refresh.
      let data = {
        txtInput: $("input[name=item]").val(),
        searchOption: $('#selector').val(),
        stateSelector: $('#selector_stanja').val()
      };
      data = $(this).serialize();

      $.ajax({
        method: 'POST',
        url: '/',
        data: data,
        dataType: 'json',
        success: function(response) {
          let results = JSON.parse(response["scrapped"]);
          console.log(results)
          //clean div(box) and children;
          $('#scroll-box').empty();
          //create divs (stari div.js)
          results.forEach(function(element) {
            let html = "<div class='box'>";
            html += "<div style = 'margin:0 auto; padding:5px; height:60%; width:100%'>";
            html += "<div class = 'ustanova'><p id = 'naziv-ustanove'>";
            html += element.NAZIV + "</p><div id = 'ustanova-info'>";
            html += "<p> Adresa: " + element.KONTAKT_ADRESA2 + "</p>";
            html += "<p> e-mail: " + element.KONTAKT_EMAIL2 + "</p>";
            html += "<p> Telefon :" + element.KONTAKT_TELEFON2 + "</p></div></div>";
            html += "<div id = 'rejting-prikaz'><div>";
            var c = (element.UKUPNO_ZADOVOLJSTVO/element.BROJ_UNOSA).toFixed(0);
            var j;
            for( j=0;j<c;j++ ) {
              html += "<i class='fa fa-star' aria-hidden='true' style='color:#ffff00'></i>";
            }
            for(var z=j;z<5;z++) {
              html += "<i class='fa fa-star' aria-hidden='true' style='color:gray'></i>";
            }
            html += "<p>" + (element.UKUPNO_ZADOVOLJSTVO/element.BROJ_UNOSA).toFixed(1) + "</p></div>";
            html += "<p>" + element.BROJ_UNOSA + " ocjena </p></div></div>";
            html += "<div id = 'termin'><p> Prvi slobodni termin: <strong>";
            html += element.datum + " " + element.vrijeme;
            html += "</strong></p></div></div>";
            let div = document.getElementById("scroll-box");
            div.innerHTML = div.innerHTML + html;

          });
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText, status, error); // error handler
        }
      });
    });

  // AJAX FORME ZA OCJENJIVANJE
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
      url: '/',
      data: data,
      success: function(data) {
        alert("SUCCESS: " + data);
                  },
      error: function(xhr, status, error) {
          alert(xhr.responseText, status, error); // error occur
      }
      });
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
