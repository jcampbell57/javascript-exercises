let message = '';

const reverseString = function(message) {
    let newString = message.split("");
    let newString2 = newString.reverse();
    return newString2.join("");
};

reverseString(message)

// Do not edit below this line
module.exports = reverseString;
