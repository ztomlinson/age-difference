// Challenge: compute the average age difference between mothers and children (the age of the mother when the child is born). 

var ancestry = JSON.parse(ANCESTRY_FILE);

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null)
      return defaultValue;
    else
      return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));
  }
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == "Pauwels van Haverbeke")
    return 1;
  else
    return (fromMother + fromFather) / 2;
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// My code here
var ageDifference = ancestry.filter(function(person) {
  // remove null variables before passing array
  return byName[person.mother] != null;
}).map(function(person) {
  // Map function returns age difference or null
  return person.born - byName[person.mother].born;
});

console.log(average(ageDifference));