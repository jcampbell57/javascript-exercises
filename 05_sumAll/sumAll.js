const sumAll = function(bottom, top) {
    let sum = 0;   
    if (bottom < 0 || top < 0 || typeof bottom !== 'number' || typeof top !== 'number') {
        return 'ERROR'
    } else if (bottom < top) {
        for (let i=bottom; i<=top; i++) {
            sum += i;
        }
        return sum;
    } else {
        for (let i=top; i<=bottom; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
