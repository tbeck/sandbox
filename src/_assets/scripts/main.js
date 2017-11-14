require('jquery');
require('bootstrap');
require('./search');
var Cookies = require('js-cookie');


$(window).scroll(function(){
  if ($(window).scrollTop() >= 250) {
    $('.homepage-layout #page-header').removeClass('home-header');
   }
   else {
    $('.homepage-layout #page-header').addClass('home-header');
   }
});

if ($(window).scrollTop() >= 250) {
  $('.homepage-layout #page-header').removeClass('home-header');
} else {
  $('.homepage-layout #page-header').addClass('home-header');
}


$(document).ready(function() {
   // nav interaction
   $('.navbar-toggler').on('click', function(){
     $(this).toggleClass('open');
   });

   //age verification
   function setCookie() {
      Cookies.set('age', 'verified');
   }

   function checkCookie() {
      var age = Cookies.get('age');
      if(age === 'verified') {
        window.console.log('age is', age);
        $('#age-verification').remove();

      }else {
        window.console.log('age is not verified');
        $('#age-verification').addClass('active');
      }
   }

   checkCookie();

   $('#yes').on('click', function(){
    setCookie();
    checkCookie();
   });

   $('#no').on('click', function(){
    window.console.log('no clicked');
    $('.age-message').text('Sorry! Our website is only available to users who are of legal drinking age.');
    $('.confirm-age button').remove();
   });

});