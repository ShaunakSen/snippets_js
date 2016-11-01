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
    if (actionType === 'push') {
        namesArr.push(data);
    } else if (actionType === 'unshift') {
        namesArr.unshift(data);
    } else if (actionType === 'pop') {
        namesArr.pop();
    } else if (actionType === 'shift') {
        namesArr.shift();
    }
}

const removeAtIndex = () => {
    let arrIndex = parseInt(document.getElementById('array-index').value);
    console.log(arrIndex);
    namesArr.splice(arrIndex, 1);
    document.getElementById('names').innerText = namesArr;

}


let user = {
    username: "Please enter your username",
    age: 20,
    bio: "Please enter bio",
    location: "Please enter a location"
};


updateUser = (field, id) => {

    var input = document.getElementById(field).value;
    console.log(input)
    user[id] = input;
    updateDOM();
}


updateDOM = () => {
    //    Set values here
    document.getElementById('username').innerText = user.username;
    document.getElementById('age').innerText = user.age;
    document.getElementById('bio').innerText = user.bio;
    document.getElementById('location').innerText = user.location;
}

updateDOM();
