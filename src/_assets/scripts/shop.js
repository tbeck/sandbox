var Recipes = require('./recipes');
var container = document.querySelector('[data-ref="product_recipes"]');

function getUnique(count, array) {
  // Make a copy of the array
  var tmp = array.slice(array);
  var ret = [];
  
  for (var i = 0; i < count; i++) {
    var index = Math.floor(Math.random() * tmp.length);
    var removed = tmp.splice(index, 1);
    // Since we are only removing one element
    ret.push(removed[0]);
  }
  return ret;  
}

function addRecipe(recipe) {
  var html = `
    <div class="card">
      <a href="${recipe.url}">
        <img class="img-fluid" src="${recipe.image}" alt="${recipe.name}">
      </a>
      
      <div class="card-body text-center">
        <p class="lead"><a href="#">${recipe.name}</a></p>
      </div>
    </div>
  `;

  $(container).append(html);
}

if(container) {
  $('.loading-recipes').fadeIn();
  var handle = window.location.href.split("/").pop();
  var recipes = Recipes.get();
  recipes.then(function(obj) {
    var productRecipes = obj.filter(function(recipe) {
      return recipe.products.indexOf(handle) > -1;
    });

    if(productRecipes.length >= 4) {
      var randomRecipes = getUnique(4, productRecipes);
      console.log("Random product recipes:", randomRecipes);
      randomRecipes.forEach(function(recipe){
        addRecipe(recipe);
      });
    } else {
      var randomRecipes = getUnique(4, obj);
      $('[data-ref="product_recipes-heading"]').text('Recipes Using Bittercube Bitters');
      console.log("Random recipes:", randomRecipes);
      randomRecipes.forEach(function(recipe){
        addRecipe(recipe);
      });
    }


    $('.loading-recipes').fadeOut();
  });

}


