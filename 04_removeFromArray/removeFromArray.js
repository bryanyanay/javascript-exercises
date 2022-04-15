const removeFromArray = function(array, ...toRemove) {
    let newArray = [...array]; // spread syntax
    for (const item of toRemove) 
        if (newArray.indexOf(item) !== -1) newArray.splice(newArray.indexOf(item), 1); 
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
