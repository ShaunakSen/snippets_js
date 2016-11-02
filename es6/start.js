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


//Looping through Arrays

let arr1 = [1, 2, 3, 4, 5, 6];


let arr2 = [
    {
        name: "mini",
        age: 20
    },
    {
        name: "shona",
        age: 23
    },
    {
        name: "drigger",
        age: 1
    }
];


const goThroughNames = (arr) => {
    //    Cache the length
    const arrLength = arr.length;
    const list = document.getElementById('names');
    //    for (let i = 0; i < arrLength; ++i) {
    //        let item = document.createElement('li');
    //        item.innerText = arr[i].name + " is " + arr[i].age + " years old";
    //        list.appendChild(item);
    //    }


    arr.map((user) => {
        let item = document.createElement('li');
        item.innerText = user.name + " is " + user.age + " years old";
        list.appendChild(item);
    });

};

const sumOfArray = (arr) => {
    let sum = 0;
    arr.map((number) => {
        sum += number;
    });

    document.getElementById('calculate').innerText = sum;
}

sumOfArray(arr1);

goThroughNames(arr2);


//For in Loops


let sampleObject = {
    username: "shaunak1105",
    bio: "something blaah",
    interests: ["cricket", "harry potter", "movies"],
    age: 23,
    weight: 80,
    gender: "M"
}


const iterator = (obj) => {
    const keyList = document.getElementById('keys');
    const valuesList = document.getElementById('values');
    for (let key in obj) {
        let keyItem = document.createElement('li');
        keyItem.innerText = key;
        let valueItem = document.createElement('li');
        valueItem.innerText = obj[key];

        keyList.appendChild(keyItem);
        valuesList.appendChild(valueItem);
    }
};


iterator(sampleObject);


let player = {
    health: 100,
    power: 20
};

let opponent = {
    health: 100,
    power: 20
};

const attack = () => {
    let attackButton = document.getElementById('attack-button');
    let restartButton = document.getElementById('restart-button');
    let gameMessage = document.getElementById('game-message');
    let playerAttack = determineAttack(player.power);
    //    console.log(playerAttack);
    opponent.health -= playerAttack;
    printToScreen();
    if (isGameOver(opponent.health)) {
        endGame("Player won fight");
        return;
    }
    //    disable attack button
    attackButton.disabled = true;
    gameMessage.innerText = "Opponent is about to strike!!";

    setTimeout(() => {
        let opponentAttack = determineAttack(opponent.power);
        player.health -= opponentAttack;
        printToScreen();
        if (isGameOver(player.health)) {
            endGame("Opponent won fight");
            return;
        }
        attackButton.disabled = false;
    }, 250);

};

const endGame = (message) => {
    document.getElementById('game-message').innerText = message;
    document.getElementById('attack-button').hidden = true;
    document.getElementById('restart-button').hidden = false;
};

const determineAttack = (power) => {
    return Math.floor(Math.random() * power);
};

const isGameOver = (health) => {
    return health <= 0;
};


const restart = () => {
    player.health = 100;
    opponent.health = 100;
    printToScreen();
    document.getElementById('game-message').innerText = "";
    document.getElementById('attack-button').hidden = false;
    document.getElementById('attack-button').disabled = false;
    document.getElementById('restart-button').hidden = true;
}

const printToScreen = () => {
    document.getElementById('opponent-health').innerText = opponent.health;
    document.getElementById('player-health').innerText = player.health;
};

printToScreen();
