//Constant vars


const GOOGLE_API_KEY = "dlfsdmdcdlsmllcdcd";

//use let for vars we wanna change

let newString = "This is the new way of writing a string";

//document.getElementById('title').innerText = newString.toUpperCase();


//Arrays and Functions


let namesArr = [];

const submitUser = (actionType) => {
    let userInput = document.getElementById('user-input').value;
    editArray(actionType, userInput);
    console.log(namesArr);
    document.getElementById('user-input').value = "";
    document.getElementById('names').innerText = namesArr;
}

const editArray = (actionType, data) => {
    if(actionType === 'push'){
        namesArr.push(data);
    }
    else if (actionType === 'unshift'){
        namesArr.unshift(data);
    }
    else if(actionType === 'pop'){
        namesArr.pop();
    }
    else if(actionType === 'shift'){
        namesArr.shift();
    }
}

const removeAtIndex = () => {
    let arrIndex = parseInt(document.getElementById('array-index').value);
    console.log(arrIndex);
    namesArr.splice(arrIndex, 1);
    document.getElementById('names').innerText = namesArr;

}
