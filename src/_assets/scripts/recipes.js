var rp = require('request-promise');

module.exports = {
  get: function() {
    var recipes = rp('http://fluent-skunk.cloudvent.net/api/recipes.json')
        .then(function (response) {
          // console.log("SUCCESS", response);
          // Process JSON...
          var recipes = JSON.parse(response);

          return recipes;
        })
        .catch(function (err) {
            // Request failed...
            console.log('Failed!', error);
        });

    return recipes;
  }
};
