const palindromes = function (a) {
    let frontwards = a
      .toLowerCase()
      .replace(/[^\p{L}\s]/gu,"")
      .replace(/\s+/g,'');
    let splitFront = frontwards.split('');
    let backwards = splitFront.reverse().join('');
    return (frontwards === backwards) ? true : false;
  }
  
// Do not edit below this line
module.exports = palindromes;
