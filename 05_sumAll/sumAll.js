const sumAll = function(start, end) {
    if (typeof start !== "number" || typeof end !== "number") return "ERROR";
    if (start > end) [start, end] = [end, start]; // swap them so that start <= end
    if (start < 0) return "ERROR"; // we only need to check start, since if start >= 0 then end >= 0


    let sum = 0;
    for (let i = start; i <= end; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
