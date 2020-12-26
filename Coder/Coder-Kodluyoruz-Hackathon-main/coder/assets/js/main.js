/**
* Template Name: Siimple - v2.2.1
* Template URL: https://bootstrapmade.com/free-bootstrap-landing-page/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Toggle nav menu
  $(document).on('click', '.nav-toggle', function(e) {
    $('.nav-menu').toggleClass('nav-menu-active');
    $('.nav-toggle').toggleClass('nav-toggle-active');
    $('.nav-toggle i').toggleClass('bx-x bx-menu');

  });

  // Toogle nav menu drop-down items
  $(document).on('click', '.nav-menu .drop-down > a', function(e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass('active');
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .active').removeClass('active');
          $(this).closest('li').addClass('active');
          $('.nav-menu').removeClass('nav-menu-active');
          $('.nav-toggle').removeClass('nav-toggle-active');
          $('.nav-toggle i').toggleClass('bx-x bx-menu');
        }
        return false;
      }
    }
  });

})(jQuery);

var countDownDate = new Date("2021/01/30 08:00:53");
  var dayText    = "Gün";
  var hourText    = "Saat";
  var minuteText    = "Dakika";
  var secondText    = "Saniye";
  if (countDownDate){ 
    var x = setInterval(function() { 
      var now = new Date().getTime(); 
      var distance = countDownDate - now; 
      if (distance < 0) { 
        clearInterval(x);
        $("#countdown_timer").html("Geri sayım yapılacak ileri bir tarih yoktur");
      }else { 
        var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          days = (days?'<div><div>'+days+'</div><div>'+dayText+'</div></div>':''), 
          hours = (hours?'<div><div>'+hours+'</div><div>'+hourText+'</div></div>':''), 
          minutes = (minutes?'<div><div>'+minutes+'</div><div>'+minuteText+'</div></div>':''); 
        document.getElementById("countdown_timer").innerHTML = days + hours + minutes ;
      }
    }, 1000);
  }
  