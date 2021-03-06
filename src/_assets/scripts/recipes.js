var rp = require('request-promise');

module.exports = {
  get: function() {
    var recipes = rp('https://bittercube.com/api/recipes.json')
        .then(function (response) {
          // console.log("SUCCESS", response);
          // Process JSON...
          var recipes = JSON.parse(response);

          return recipes;
        })
        .catch(function (err) {
            // Request failed...
            console.log('Failed!', err);
        });

    return recipes;
  },
  getTemp: function() {
    var recipes = rp('https://bittercube.myshopify.com/pages/recipes')
        .then(function (response) {
          // console.log("SUCCESS", response);
          // Process JSON...
          var recipes = JSON.parse(response);

          return recipes;
        })
        .catch(function (err) {
            // Request failed...
            console.log('Failed!', err);
        });

    return recipes;
  }
};
