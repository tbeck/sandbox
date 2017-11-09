// var request = require('request');
var rp = require('request-promise');


var items = [

  {
    'slug': 'jack-rose',
    'name': 'Jack Rose',
    'description': '',
    'url': '/recipes/jack-rose',
    'image': 'http://via.placeholder.com/1250x600/000000/333333?text=placeholder',
    'ingredients': 'Lemon Juice,Grenadine,Copper Kings American Apple Brandy,Bittercube Bolivar Bitters',
    'tags': 'Daisy Brandy',
    'products': [
      
      {
        'name': '',
        'url': ''
      }
      
      
    ]
  },
  {
    'slug': 'lime-strength-celery-juice',
    'name': 'Lime Strength Celery Juice',
    'description': '',
    'url': '/recipes/lime-strength-celery-juice',
    'image': 'http://via.placeholder.com/1250x600/000000/333333?text=placeholder',
    'ingredients': 'Celery Juice,Citric Acid,Malic Acid',
    'tags': '',
    'products': [
      
    ]
  },
  {
    'slug': 'two-inch-punch',
    'name': 'Two Inch Punch',
    'description': '',
    'url': '/recipes/one-inch-punch',
    'image': 'http://via.placeholder.com/1250x600/000000/333333?text=placeholder',
    'ingredients': 'Lime strength Celery Juice,Simple Syrup,Twisted Path Gin,Bittercube Cherry Bark Vanilla Bitters',
    'tags': 'blue red orange',
    'products': [
      
      {
        'name': '',
        'url': ''
      }
      
      
    ]
  },
  {
    'slug': 'one-inch-punch',
    'name': 'One Inch Punch',
    'description': '',
    'url': '/recipes/one-inch-punch',
    'image': 'http://via.placeholder.com/1250x600/000000/333333?text=placeholder',
    'ingredients': 'Lime strength Celery Juice,Simple Syrup,Twisted Path Gin,Bittercube Cherry Bark Vanilla Bitters',
    'tags': 'blue',
    'products': [
      
      {
        'name': '',
        'url': ''
      }

    ]
  }

];

module.exports = {
  get: function() {
    var recipes = rp('http://localhost:9999/api/recipes.json')
        .then(function (response) {
            // Process html...
            console.log("SUCCESS");
        })
        .catch(function (err) {
            // Crawling failed...
        });

    return recipes;
  }
};
