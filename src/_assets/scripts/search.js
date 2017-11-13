// require('autocomplete');
// var countries = [
//    { value: 'Andorra', data: 'AD' },
//    { value: 'Zimbabwe', data: 'ZZ' }
// ];

// $('#search').autocomplete({
//     lookup: countries,
//     onSelect: function (suggestion) {
//         alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
//     }
// });

var mixitup = require('mixitup');
var mixitupMultifilter = require('./vendor/mixitup-multifilter');

var Recipes = require('./recipes');

mixitup.use(mixitupMultifilter);

var container = document.querySelector('[data-ref="container"]');
var inputSearch = document.querySelector('[data-ref="input-search"]');
var activeTerm = '';
var keyupTimeout;

var config = {
  selectors: {
    target: '[data-ref="item"]' // Query targets with an attribute selector to keep our JS and styling classes seperate
  },
  multifilter: {
    enable: true // enable the multifilter extension for the mixer
  },
  data: {
      uidKey: 'slug' // Our data model must have a unique id. In this case, its key is 'id'
  },
  render: { // We must provide a target render function incase we need to render new items not in the initial dataset (not used in this case)
      target: function(recipe) {
          var html = `
            <div class="recipe ${recipe.tags} ${recipe.slug}" data-ref='item'>
              <div class="content">
                <div class="recipe-image" style="background-image: url(${recipe.image});">
                  <a href="${recipe.pinterest}" target="_blank" data-pin-do="buttonPin" data-pin-custom="true" class="pinterest-share"><i class="icon-pinterest"></i></a>
                </div>
                <div class="recipe-body">
                  <h2 class="recipe-title">${recipe.name}</h2>
                  <p class="recipe-description">${recipe.description}</p>
                  <a href="${recipe.url}" class="button inline">View Recipe</a>
                </div>
              </div>
            </div>
          `;

          return html;
      }
  },
  callbacks: {
    onMixClick: function() {
      // Reset the search if a filter is clicked

      if (this.matches('[data-filter]')) {
          inputSearch.value = '';
      }
    }
  }
};

if(container) {
  var recipes = Recipes.get();
  var mixer = mixitup(container, config);

  recipes.then(function(obj) {

    mixer.dataset(obj)
      .then(function(state) {
        console.log('loaded ' + state.activeDataset.length + ' items');
      });

  });

}

if(inputSearch) {
  // Set up a handler to listen for "keyup" events from the search input
  inputSearch.addEventListener('keyup', function() {
      var searchValue;

      if (inputSearch.value.length < 1) {
          // If the input value is less than 3 characters, don't send

          searchValue = '';
      } else {
          searchValue = inputSearch.value.toLowerCase().trim();
      }

      // Very basic throttling to prevent mixer thrashing. Only search
      // once 350ms has passed since the last keyup event

      clearTimeout(keyupTimeout);

      keyupTimeout = setTimeout(function() {
          this.filterByString(searchValue);
      }, 350);
  });
}



filterByString = function(searchValue) {
  if (searchValue) {
      // Use an attribute wildcard selector to check for matches
      mixer.filter('[class*="' + searchValue + '"]');
  } else {
      // If no searchValue, treat as filter('all')
      mixer.filter('all');
  }
};

module.exports = {
  deserializeHash: function() {
    var hash    = window.location.hash.replace(/^#/g, '');
    var obj     = null;
    var groups  = [];

    if (!hash) return obj;

    obj = {};
    groups = hash.split('&');

    groups.forEach(function(group) {
      var pair = group.split('=');
      window.console.log('DESERIALIZE HASH: ', pair);
      var groupName = pair[0];
      // TODO - Avoiding errors on simple anchors - Needs refactor
      if(pair[1]) {
        obj[groupName] = pair[1].split(',');
      }
    });

    return obj;
  }
};



