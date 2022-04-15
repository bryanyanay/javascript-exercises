const leapYears = function(year) {
    // the Boolean() constructor is to convert any number to bool
    return Boolean(!(year%4) && ((year%100) || !(year%400))); 
};

// Do not edit below this line
module.exports = leapYears;
