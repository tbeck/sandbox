// require('modernizr');
var WebFont = require('webfontloader');
var jquery = require('jquery');

WebFont.load({
  google: {
    families: ['Alegreya']
  },
  typekit: { id: 'psg5pio' },
  loading: function() {
    console.log('LOADING FONTS');
  },
  active: function() {
    console.log('ACTIVE FONTS');
    // $('.navbar-brand, #mainnav .navbar-nav').addClass('animated fadeIn');
  },
  inactive: function() {},
  fontloading: function(familyName, fvd) {},
  fontactive: function(familyName, fvd) {},
  fontinactive: function(familyName, fvd) {},
  timeout: 2000 // Set the timeout to two seconds/
});