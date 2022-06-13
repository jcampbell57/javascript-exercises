const findTheOldest = function(people) { 
    people.filter(function(person) {
      if (person.yearOfDeath == undefined) {
        person.yearOfDeath = (new Date()).getFullYear();
      }
    })
    const sorted = people.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
    return sorted[0]
  }

// Do not edit below this line
module.exports = findTheOldest;