// Higher order functions in javascript

var triple = function triple(x) {
    return x * 3;
}

var waffle = triple;
waffle(3);

// Functions can be assigned to values and passed to other functions

// FILTER

var animals = [{
    name: "Fluffykins",
    species: "rabbit"
}, {
    name: "Caro",
    species: "dog"
}, {
    name: "Hamilton",
    species: "dog"
}, {
    name: "Harold",
    species: "fish"
}, {
    name: "Ursula",
    species: "cat"
}, {
    name: "Jimmy",
    species: "fish"
}];
var isDog = function (animal) {
    return animal.species === "dog"
}

var dogs = animals.filter(isDog);
console.log(dogs);

// MAP

// It goes through an array and transforms the elements

// Create list of names of animals

// var names = [];
// for (var i = 0; i < animals.length; ++i) {
//     names.push(animals[i].name);
// }
var names = animals.map(function (animal) {
    return animal.name + 'is a ' + animal.species;
})
console.log(names);

// Arrow Functions
var names2 = animals.map((animal) => animal.name + 'is a ' + animal.species)

console.log(names2);