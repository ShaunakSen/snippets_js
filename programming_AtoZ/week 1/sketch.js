
var textField; 

function setup(){
    noCanvas();
    textField = createInput();
    
    textField.changed(newText);
}

function newText(){
    createP(textField.value());
    console.log(textField.value());
}

