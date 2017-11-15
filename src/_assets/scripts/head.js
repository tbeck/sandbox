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
    console.log('FONTS ARE ACTIVE');
    $('#mainnav .navbar-nav, .hero-caption').addClass('animated fadeIn');
  },
  inactive: function() {
    console.log('FONTS ARE NOT ACTIVE');
    $('#mainnav .navbar-nav, .hero-caption').addClass('animated fadeIn');
  },
  fontloading: function(familyName, fvd) {},
  fontactive: function(familyName, fvd) {},
  fontinactive: function(familyName, fvd) {},
  timeout: 2000 // Set the timeout to two seconds/
});
