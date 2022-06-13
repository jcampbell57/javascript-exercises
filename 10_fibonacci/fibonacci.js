const fibonacci = function(input) {
    if (input < 1) {
        return 'OOPS';
    } else {
        let n1 = 1, n2 = 1, nextnum;
        for (let i=1; i<input; i++) {
          nextTerm = n1 + n2
          n1 = n2
          n2 = nextTerm
        }
      return n1;
    }
};

// Do not edit below this line
module.exports = fibonacci;
