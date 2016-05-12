
module.exports.parseQueryString = function(searchString) {
  var objURL = {};

  searchString.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(_0, key, _1, value) {
      objURL[key] = value;
  });

  return objURL;
};
