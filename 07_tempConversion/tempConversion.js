const ftoc = function(degreesF) {
  celsius = (degreesF - 32) * (5/9);
  output = Math.round(celsius * 10) / 10;
  return output;
};

const ctof = function(degreesC) {
  farh = degreesC * (9/5) + 32;
  output = Math.round(farh * 10) / 10;
  return output;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
