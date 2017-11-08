require('jquery');
require('typeahead');
// var search = require('./search');

$(function() {
  console.log("HELLO jQuery loaded");
});

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
} else {
  $('.homepage #page-header').addClass('home-header');
}


$(document).ready(function() {
   // nav interaction
   $('.navbar-toggler').on('click', function(){
     $(this).toggleClass('open');
   });

   // Initialize typeahead feature
   var $input = $('#search');
   $input.typeahead({
     source: [
       {id: 'someId1', name: 'Captain Truman'},
       {id: 'someId2', name: 'Valentino'},
       {id: 'someId3', name: 'Habana Libre'}
     ],
     autoSelect: true
   });
   // $input.change(function() {
   //   var current = $input.typeahead("getActive");
   //   if (current) {
   //     // Some item from your model is active!
   //     if (current.name == $input.val()) {
   //       // This means the exact match is found. Use toLowerCase() if you want case insensitive match.
   //     } else {
   //       // This means it is only a partial match, you can either add a new item
   //       // or take the active if you don't want new items
   //     }
   //   } else {
   //     // Nothing is active so it is a new value (or maybe empty value)
   //   }
   // });
});