var Recipes = require('./recipes');
var container = document.querySelector('[data-ref="product_recipes"]');

if(container) {
  var recipes = Recipes.get();

  recipes.then(function(obj) {
    window.console.log("CONTAINER", container);
  });

}