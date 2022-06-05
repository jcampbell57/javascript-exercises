const removeFromArray = function(arr, ...args) {
    let newArray = arr.filter(x => !args.includes(x));
    return newArray;    
}

// Do not edit below this line
module.exports = removeFromArray;
