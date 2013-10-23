

function calcFib(n) {
  var i, p = 1, r = 1;
  for (i = 1; i < n; ++i) {
    var tmp = r;
    r = r + p;
    p = tmp;
  }
  return r;
}

module.exports = {
  'calcFib': calcFib
};
