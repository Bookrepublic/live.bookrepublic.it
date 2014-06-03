//= require jquery/dist/jquery
//= require_tree .
//= require headroom.js/dist/headroom
//= require headroom.js/dist/jQuery.headroom
//= require typed.js/js/typed

//Header
$("header").headroom({
  "tolerance": 5,
  "offset": 205,
  "classes": {
    "initial": "headroom",
    "pinned": "headroom--pinned",
    "unpinned": "headroom--unpinned",
    "top": "headroom--top",
    "notTop": "headroom--not-top"
  }
});

// to destroy
$("#header").headroom("destroy");

$(document).ready(function() {
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  // underline under the active nav item
  $(".nav .nav-link").click(function() {
    $(".nav .nav-link").each(function() {
      $(this).removeClass("active-nav-item");
    });
    $(this).addClass("active-nav-item");
    $(".nav .more").removeClass("active-nav-item");
  });
});

//typed
$(function(){
  $(".element").typed({
    strings: ["First sentence.", "Second sentence."],
    typeSpeed: 30, // typing speed
    backDelay: 500, // pause before backspacing
  });
});
