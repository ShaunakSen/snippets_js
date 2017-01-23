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
document.write(typeof {value: true} + "<br/>");
document.write(typeof [1,2,3] + "<br/>");
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


function doMath(strings, ...values){
    console.log(values);
    if(strings[0] === "Add"){
        document.write(`${values[0]} + ${values[1]} = ${values[0] + values[1]}<br/>`);
    } else if(strings[0] === "Sub"){
        document.write(`${values[0]} - ${values[1]} = ${values[0] - values[1]}<br/>`);
    }
}

doMath `Add${10} ${20}`;
doMath `Sub${10} ${20}`;


//iterate over characters

for(let c of fName){
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
































































