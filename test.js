var readBinaryWatch = function(num) {
    let res = [];
    let countOne = function(hour, min) {
        let count = 0;
        while(hour) {
            if(hour & 1) {
                count++; 
            }
            hour = hour >> 1;
        }
        while(min) {
            if(min & 1) {
                count++; 
            }
            min = min >> 1;
        }
        return count;
    }
    for(let i = 0; i < 12; i++) {
        for(let j = 0; j < 60; j++) {
            if(countOne(i, j) === num) {
                res.push(i + ':' + (j < 10?('0' + j ): j));
            }
        }
    }
    return res;
};
console.log(readBinaryWatch(1))
