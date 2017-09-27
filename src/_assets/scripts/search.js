require('mixitup');

var container = document.querySelector('[data-ref="container"]');
var inputSearch = document.querySelector('[data-ref="input-search"]');
var activeTerm = '';
var keyupTimeout;

var config = {
  selectors: {
      target: '[data-ref="item"]' // Query targets with an attribute selector to keep our JS and styling classes seperate
  },
  // animation: {
  //   duration: 350
  // },
  data: {
      uidKey: 'slug' // Our data model must have a unique id. In this case, its key is 'id'
  },
  render: { // We must provide a target render function incase we need to render new items not in the initial dataset (not used in this demo)
      target: function(item) {
          return '<div class="row item ' + item.tags + '" data-ref="item">' + item.name + '</div>';
      }
  }
  // callbacks: {
  //   onMixClick: function() {
  //     // Reset the search if a filter is clicked

  //     if (this.matches('[data-filter]')) {
  //         inputSearch.value = '';
  //     }
  //   }
  // }
};
var mixer = mixitup(container, config);

mixer.dataset(items)
    .then(function(state) {
        console.log('loaded ' + state.activeDataset.length + ' items');
    });

// Set up a handler to listen for "keyup" events from the search input

// inputSearch.addEventListener('keyup', function() {
//     var searchValue;

//     if (inputSearch.value.length < 3) {
//         // If the input value is less than 3 characters, don't send

//         searchValue = '';
//     } else {
//         searchValue = inputSearch.value.toLowerCase().trim();
//     }

//     // Very basic throttling to prevent mixer thrashing. Only search
//     // once 350ms has passed since the last keyup event

//     clearTimeout(keyupTimeout);

//     keyupTimeout = setTimeout(function() {
//         filterByString(searchValue);
//     }, 350);
// });

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
      // window.console.log("DESERIALIZE HASH: pair ");
      var groupName = pair[0];
      // TODO - Avoiding errors on simple anchors - Needs refactor
      if(pair[1]) {
        obj[groupName] = pair[1].split(',');
      }
    });

    return obj;
  },
  filterByString: function(searchValue) {
    if (searchValue) {
        // Use an attribute wildcard selector to check for matches
        mixer.filter('[class*="' + searchValue + '"]');
    } else {
        // If no searchValue, treat as filter('all')
        mixer.filter('all');
    }
  }
}



