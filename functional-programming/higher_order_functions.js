// Higher order functions in javascript

var triple = function triple(x) {
    return x * 3;
};

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
});
console.log(names);

// Arrow Functions
// var names2 = animals.map((animal) = animal.name + 'is a ' + animal.species);
// console.log(names2);


// REDUCE

// MAP and FILTER are quite specific
// REDUCE is not.. It is more general

var orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
];

// Summarize all the amounts

var total = 0;
for (var i = 0; i < orders.length; ++i) {
    total += orders[i].amount;
}
console.log(total);

// 0 is the initial value of sum
// This sum is passed each time inside the callback
// 2nd arg is iterated item in array
// return sum + order.amount;: This return value is passed as sum var in next iteration

total = orders.reduce(function (sum, order) {
    console.log("Sum is", sum, "Order is", order);
    return sum + order.amount;
}, 0);

console.log(total);

// Reduce is not limited to transforming a list to a number
// It can reduce it to another array or an object

// Make sense of data.txt

var fs = require('fs');

var output = fs.readFileSync('data.txt', 'utf-8').trim()
    .split('\n')
    .map(function (line) {
        return line.split(' ');
    });
for (var x = 0; x < output.length; ++x) {
    output[x] = output[x].filter(function (value) {
        return value.trim() != '';
    })
}
for (i = 0; i < output.length; ++i) {
    var first = output[i][0];
    var second = output[i][1];
    var name = first + ' ' + second;
    output[i][0] = name;
    output[i].splice(1, 1);
}

output = output.reduce(function (customers, line) {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
    });
    return customers
}, {});


console.log(JSON.stringify(output, null, 2));

// CLOSURES

// function body has access to vars that are defined outside the function

var me = "Mini Sen";
function greet() {
    console.log("Hello", me);
}
me = "Blaah";
greet();

// here we are referring to var me outside functions cope
// This is closures

// Practical use of closures

/*function sendRequest() {
    var requestID = "123";
    $.ajax({
        url: "/myUrl",
        success: function(response){
            // Here we have access to requestID
            console.log("Request " + requestID + " returned");
        }
    });
}*/


// Cool Closure Function
// makeAdder is called a function factory
function makeAdder(x) {
    return function (y) {
        return x+y;
    };
}

var add5 = makeAdder(5);
console.log(add5(10));
var addMini = makeAdder("Mini");
console.log(addMini("Shona"));

// Counter example
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// This emulates private methods
// privateCounter and changeBy() are like private


// Notice how this looks exactly same as a class

var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return{
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
};
var counter1 = makeCounter();

console.log(counter1.value());

counter1.increment();
counter1.increment();

console.log(counter1.value());
counter1.decrement();
console.log(counter1.value());

console.log("New counter...");

var counter2 = makeCounter();

console.log(counter2.value());

counter2.increment();
counter2.increment();

console.log(counter2.value());
counter2.decrement();
console.log(counter2.value());


