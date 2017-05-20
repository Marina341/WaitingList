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

$("#menu-double").on('click', function () {
  var x = document.getElementById('maps-box');
  if (x.style.display === 'inline-block') {
      $("#maps-box").animate({width: 0}, 500);
      x.style.display = 'none';
  } else {
      x.style.display = 'inline-block';
      $("#maps-box").animate({width: '600px'}, 500);
  }
});

$(function() {
  $('#selector').change(function(){
    $('.adresa').slideUp("slow");
    $('#' + $(this).val()).slideDown("slow");
  });
});

$(function() {
  $('#selector1').change(function(){
    $('.ocijena').slideUp("slow");
    $('#' + $(this).val()).slideDown("slow");
  });
});

function hvala() {
    alert("Hvala!");
}