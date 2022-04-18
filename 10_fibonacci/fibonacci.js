const fibonacci = function(n) {
    n = +n;
    if (n < 0) return "OOPS";

    // this sol has very poor readability lmao
    if (n===1) return 1;
    let [a, b] = [1, 1];
    --n;
    while (--n) [a, b] = [b, a+b];
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
