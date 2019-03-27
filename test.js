var generate = function(numRows) {
    let init = [1];
    let output = [[1]]
    if(numRows === 1) return output;
    for(let i = 2; i <= numRows; i++) {
        //复制一份init
        let temp = init.concat([]);
        //init右移一位
        init.unshift(0);
        for(let j = 0; j < init.length; j++) {
            init[j] = temp[j]? (init[j] + temp[j]) :  init[j]
        }
        output.push(init.concat([]));
    }
    return output;
};
generate(5)