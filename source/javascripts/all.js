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
var $containeriso = $('.usa_hero__container');
// init
$containeriso.isotope({
  getSortData: {
    name: '[author-name]',
    date: '[author-date]'
  },
  // options
  itemSelector: '.usa_hero__container__item',
  layoutMode: 'fitRows'
});
$containeriso.imagesLoaded( function() {
  $containeriso.isotope('layout');
});
$('#sorts').on( 'click', 'div', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $containeriso.isotope({ sortBy: sortByValue });
});

//Isotope blog
var $containerblog = $('.blog_home__container');
// init
$containerblog.isotope({
  // options
  itemSelector: '.blog_home__item',
  masonry: {
    columnWidth: '.blog_home__sizer'
  }
});
$containerblog.imagesLoaded( function() {
  $containerblog.isotope('layout');
});

//Masonry
var $container = $('.usa_kit__list');
$container.masonry ({
  // options
  columnWidth: '.usa_kit__sizer',
  itemSelector: '.usa_kit__item'
});
$container.masonry('bindResize')
$container.imagesLoaded( function() {
  $container.masonry('layout');
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

$(document).ready(function() {
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  $(document).on('scroll', function(e) {
    e.preventDefault();
    if(menuToggle.is(':visible')) {
      menu.slideUp();
    };
    if(menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});

//tooltipster
$(document).ready(function() {
  $('.tooltip').tooltipster({
    trigger: 'click',
    delay: 50,
    contentAsHTML: true,
    interactive: true
  });
});

$(document).ready(function() {
  $('.usa_hero__button').tooltipster({
    delay: 50,
    contentAsHTML: true,
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
