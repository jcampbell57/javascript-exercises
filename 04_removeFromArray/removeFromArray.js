const removeFromArray = function(arr, ...args) {
    let newArray = arr.filter(x => !args.includes(x));
    return newArray;    
}

removeFromArray([1, 2, 3], "1", 3)

// Do not edit below this line
module.exports = removeFromArray;
