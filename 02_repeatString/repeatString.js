const repeatString = function(message, j) {
    let output = [];
    if (j<0) {
        return 'ERROR';
    } else {
        for (i=0; i<j; i++) {
            output.push(message);
        }
        return output.join('');    
    }
};

// Do not edit below this line
module.exports = repeatString;
