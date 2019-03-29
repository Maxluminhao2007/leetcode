var convertToTitle = function(n) {
    let output = '';
    while(n > 26) {
        output += String.fromCharCode(64 + (n / 26) >> 0);
        n = n % 26;
    }
    return output += String.fromCharCode(64 + n);
};

console.log(convertToTitle(702))