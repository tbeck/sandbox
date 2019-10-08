var deserializeHash = function() {
  var hash    = window.location.hash.replace(/^#/g, '');
  var obj     = null;
  var groups  = [];

  if (!hash) return obj;

  obj = {};
  groups = hash.split('&');

  groups.forEach(function(group) {
    var pair = group.split('=');
    // window.console.log('DESERIALIZE HASH: ', pair);
    var groupName = pair[0];
    // TODO - Avoiding errors on simple anchors - Needs refactor
    if(pair[1]) {
      obj[groupName] = pair[1].split(',');
    }
  });

  window.console.log('HASH Object:', obj);
  return obj;
};


module.exports = {
  get: function() {
    return deserializeHash();
  }
};


