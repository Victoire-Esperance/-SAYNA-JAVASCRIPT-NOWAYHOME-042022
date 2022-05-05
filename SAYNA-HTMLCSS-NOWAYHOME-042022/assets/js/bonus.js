// Set the date we're counting down to
var countDownDate = new Date("may 4, 2022 20:00:00").getTime();

// the count down every 1 second
var x = setInterval(function () {

  // aujourd'hui date
  var now = new Date().getTime();

  // durre
  var distance = countDownDate - now;

  // calcul de date, heure, minute, et seconde
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display de resultat avec l id "time"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // temps de l'expiration
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);
//jquery
$(document).ready(function () {
//hover de l'icone au footer
$(".iconehover").hover(function () {
  $(this).css({   
    "color": "#ffffff",
  });
}, function () {
  $(this).css({
    "color": "black",
  });
});

})