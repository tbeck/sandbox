var rp = require('request-promise');

module.exports = {
  get: function() {
    var recipes = rp('http://localhost:9999/api/recipes.json')
        .then(function (response) {
          // console.log("SUCCESS", response);
          // Process JSON...
          var recipes = JSON.parse(response);

          return recipes;
        })
        .catch(function (err) {
            // Request failed...
            console.error("Failed!", error);
        });

    return recipes;
  }
};
