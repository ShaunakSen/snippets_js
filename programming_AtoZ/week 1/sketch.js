
var input; 

function setup(){
    noCanvas();
    input = createInput();
    
    input.changed(newText);
}

function newText(){
    createP(input.value());
    console.log(input.value());
}

