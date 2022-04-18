function getAge(person) {
    if ("yearOfDeath" in person)
        return person.yearOfDeath - person.yearOfBirth;
    return (new Date()).getFullYear() - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((currOldest, newPerson) => 
            (getAge(currOldest) < getAge(newPerson) ? newPerson : currOldest));
};

// Do not edit below this line
module.exports = findTheOldest;
