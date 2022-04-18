const palindromes = function (phrase) {
    phrase = phrase.replaceAll(" ", "");
    phrase = phrase.replaceAll("!", "");
    phrase = phrase.replaceAll(",", "");
    phrase = phrase.replaceAll(".", "");
    // this is a bad solution for stripping spaces and punctuation, probably use regex??

    phrase = phrase.toLowerCase();

    console.log(phrase);

    return (phrase.slice(0, Math.floor(phrase.length/2)) 
            === phrase.slice(Math.ceil(phrase.length/2))
                    .split("").reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
