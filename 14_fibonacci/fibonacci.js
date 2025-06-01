const fibonacci = function(n) {
    if (n === 0 || n === "0") {
        return 0;
    }
    else if (n === 1){
        return 1;
    }
    else if (n < 0) {
        return "OOPS"
    }

    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;

};

console.log(fibonacci("0"));
// Do not edit below this line
module.exports = fibonacci;
