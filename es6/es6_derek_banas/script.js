//var vs let

//var: available globally
//let: block specific

//const: constant value

//vars in es6

document.write("<h2>Types of vars in es6</h2>");

document.write(typeof true + "<br/>");
document.write(typeof 3.14 + "<br/>");
document.write(typeof "true" + "<br/>");
document.write(typeof Symbol() + "<br/>");
document.write(typeof {
    value: true
} + "<br/>");
document.write(typeof [1, 2, 3] + "<br/>");
document.write(typeof undefined + "<br/>");

//Strings

document.write("<h2>Good Old Strings</h2>");

let fName = "Mini";
let lName = "Pook Sen";

//Template literal

document.write(`${fName} ${lName}.... Awesome templates <br/>`);

let num1 = 5;
let num2 = 10;

document.write(`10 * 5 = ${num1 * num2} <br/>`);

document.write("<h2>Tagged Template literals</h2>");


function doMath(strings, ...values) {
    console.log(values);
    if (strings[0] === "Add") {
        document.write(`${values[0]} + ${values[1]} = ${values[0] + values[1]}<br/>`);
    } else if (strings[0] === "Sub") {
        document.write(`${values[0]} - ${values[1]} = ${values[0] - values[1]}<br/>`);
    }
}

doMath `Add${10} ${20}`;
doMath `Sub${10} ${20}`;


//iterate over characters

for (let c of fName) {
    document.write(`${c}`);
}

document.write("<br/>" + fName.startsWith("Mi") + "<br/>");
document.write(fName.endsWith("ni") + "<br/>");
document.write(fName.includes("ini") + "<br/>");

//multi line String


let multiLineString = "Hey there \
Little Mini \
Blaah";

document.write(`${multiLineString}<br/>`);

document.write("<h2>Functions</h2>");

//default values


function getSum(num1 = 2, num2 = 3) {
    document.write(`${num1} + ${num2} = ${num1 + num2}<br/>`);
}

getSum();
getSum(1);
getSum(5, 6);


//rest parameter

function getSumMore(...values) {
    let sum = 0;
    for (let i = 0; i < values.length; ++i) {
        sum += values[i];
    }

    document.write(`Sum is ${sum}<br/>`);
}

getSumMore(1, 2, 3, 4);


let vals = [1, 2, 3, 4];
getSumMore(...vals);

//arrow functions

let difference = (num1, num2) => num1 - num2;

document.write(`5 - 10 = ${difference(5, 10)} <br/>`);

document.write("<h2>Map, Filter and Reduce</h2>")

let valueArray = [1, 2, 3, 4, 5];

//reduce: applies function against accumulator to get a single result

let sumValues = valueArray.reduce((a, b) => a + b);

document.write(`Sum: ${sumValues} <br/>`);

//filter: return values that pass a condition

let evenValues = valueArray.filter(val => val % 2 == 0);

document.write(`Even Values: ${evenValues} <br/>`);

//map: performs a given action on every item

let doubleValues = valueArray.map(val => val * 2);

document.write(`Double Values: ${doubleValues} <br/>`);

document.write("<h2>Objects</h2>");


function createAnimal(name, owner) {
    return {
        name,
        owner,
        getInfo() {
            return `${this.name} is owned by ${this.owner}`;
        },
        address: {
            city: "Jhansi",
            street: "Vasudev Mohalla"
        }
    };
}

var snowy = createAnimal("Snowy", "Tin Tin");

document.write(`${snowy.getInfo()}<br/>`);
document.write(`${snowy.name} lives in ${snowy.address.street}<br/>`);

//get properties and methods of an object

document.write(`${Object.getOwnPropertyNames(snowy).join(" ")}<br/>`);

//de-structuring objects

let {
    name,
    owner
} = snowy;
document.write(`Name: ${name}<br/>`);
let {
    address
} = snowy;
document.write(`Street: ${address.street}<br/>`);

//de-structure arrays


var favNums = [5, 23, 16, 9, 13];

let [, , , , anniversary] = favNums;
document.write(`Anniversary: ${anniversary}<br/>`);


let [, , , ...last2] = favNums;

document.write(`2nd Last Num: ${last2[0]}<br/>`);

//swap

let val1 = 1,
    val2 = 2;
[val1, val2] = [val2, val1];

document.write(`val1: ${val1}, val2: ${val2}<br/>`);

//Classes

document.write("<h2>Classes</h2>");

class Mammal {

    //    constructor
    constructor(name) {
        this._name = name;
    }

    //    getter
    get name() {
        return this._name;
    }

    //    setter
    set name(name) {
            this._name = name;
        }
        //    static method
        //    create a mamal object using static method
    static makeMammal(name) {
        return new Mammal(name);
    }

    //    regular method
    getInfo() {
        return `${this.name} is a Mammal`;
    }
}

let monkey = new Mammal("Fred");

//use the setter
monkey.name = 'Mark';

//use the getter

document.write(`Mammal: ${monkey.name}</br>`);

//use static function

let chipmunk = Mammal.makeMammal("Chipper");

document.write(`Chipmunk: ${chipmunk.getInfo()}</br>`);

//Inheritence

class Marsupial extends Mammal {
    //    new constructor

    constructor(name, hasPouch) {
        //        calling constructor for Mammal class
        //        super constructor takes care of the name
        super(name);
        this._hasPouch = hasPouch;

    }

    //    define getters and setters for hasPouch
    //    no need to define getters and setters for name as they are inherited

    get hasPouch() {
        return this._hasPouch;
    }
    set hasPouch(hasPouch) {
        this._hasPouch = hasPouch;
    }

    //    override method

    getInfo() {
        return `${this.name} is a Marsupial`;
    }

}

let kangaroo = new Marsupial("Paul", true);

document.write(`It is ${kangaroo.hasPouch} that ${kangaroo.name} has pouch</br>`);

document.write(`${kangaroo.getInfo()}</br>`);

//Dynamically inherit from classes


function getClass(classType) {
    if (classType == 1) {
        return Mammal;
    } else {
        return Marsupial;
    }
}

class Koala extends getClass(2) {
    constructor(name) {
        super(name);
    }
}

let carl = new Koala("Carl");

document.write(`${carl.getInfo()}</br>`);





