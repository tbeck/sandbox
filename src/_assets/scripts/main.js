require('jquery');

$(function() {
  console.log("HELLO jQuery and Modernizr loaded");
});

$(document).ready(function() {
  // Doc Ready
  // check for url parameters
  // if thanks = true then display thank you message
  // in 30 sec fade out
  // var params = window.location.search.substring(1);
  // if (params.indexOf('thanks') > -1 ) {
  //   $('#message').removeClass('hide');
  //   setTimeout(function(){ 
  //     $('#message').fadeOut('slow');
  //   }, 4000);
  // }

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 250) {
      $('.homepage #page-header').removeClass('home-header');
     }
     else {
      $('.homepage #page-header').addClass('home-header');
     }
  });

  if ($(window).scrollTop() >= 250) {
    $('.homepage #page-header').removeClass('home-header');
   }
   else {
    $('.homepage #page-header').addClass('home-header');
   }
});