var findTheDifference = function(s, t) {
    let arr = Array(26).fill(0);

    for(let c of s) {
        arr[c.charCodeAt(0) - 97]++
    }
    for(let c of t) {
        arr[c.charCodeAt(0) - 97]--
    }
    for(let c in arr) {
        if(arr[c]) return c + 97;
    }
};
console.log(findTheDifference('leetcode','leeatcode'))
