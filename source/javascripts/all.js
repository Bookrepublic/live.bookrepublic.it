//= require jquery/dist/jquery
//= require_tree .
//= require headroom.js/dist/headroom
//= require headroom.js/dist/jQuery.headroom
//= require typed.js/js/typed
//= require imagesloaded/imagesloaded.pkgd
//= require tooltipster/js/jquery.tooltipster
//= require masonry/dist/masonry.pkgd
//= require isotope/dist/isotope.pkgd
//= require jQuery-One-Page-Nav/jquery.nav

//Isotope
var $container = $('.usa_hero__container');
// init
$container.isotope({
  getSortData: {
    name: '[author-name]',
    date: '[author-date]'
  },
  // options
  itemSelector: '.usa_hero__container__item',
  layoutMode: 'fitRows'
});
$container.imagesLoaded( function() {
  $container.isotope('layout');
});
$('#sorts').on( 'click', 'div', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $container.isotope({ sortBy: sortByValue });
});


//Masonry
var container = document.querySelector('.usa_kit__list');
var msnry = new Masonry( container, {
  // options
  columnWidth: container.querySelector('.usa_kit__sizer'),
  itemSelector: '.usa_kit__item'
});
msnry.bindResize()
imagesLoaded( container, function() {
  msnry.layout();
});

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
});

//tooltipster
$(document).ready(function() {
  $('.tooltip').tooltipster({
    trigger: 'click',
    delay: 50
  });
});

$(document).ready(function() {
  $('.usa_hero__button').tooltipster({
    delay: 50,
    contentAsHTML: true
  });
});

$(document).ready(function() {
  $('.usa_hero__button--red').tooltipster({
    delay: 50,
    contentAsHTML: true
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

//scroll
$(document).ready(function() {
	$('#navigation-menu').onePageNav();
});
