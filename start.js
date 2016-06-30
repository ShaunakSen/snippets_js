
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

//var secondCopy = collection;
//console.log(secondCopy);

// Only change code below this line
function updateRecords(id, prop, value) {
  id = id.toString();
  var objectId = collection[id];
  /*console.log(objectId);*/
  if(value !== "")
   {
    if(prop !== 'tracks' ){
      objectId[prop] = value;
    }
    else{
      if(objectId.hasOwnProperty("tracks")){
        var trackLen = objectId[prop].length;
          objectId.tracks.push(value);
      }
      else{
        objectId.tracks = [];
        objectId.tracks.push(value);
      }
    }
   }
  else{
    if(objectId.hasOwnProperty(prop)){
      delete objectId[prop];
    }
  }
  console.log(collection);
}

// Alter values below to test your code
updateRecords(5439, "artist", "BBA");
updateRecords(5439,"tracks","");
updateRecords(5439, "tracks", "Take a Chance on Me")


function generateRandom(max, min){
  var randomNum = Math.floor(Math.random() * (max - min - 1)) + min+1;
  return randomNum;
}

console.log(generateRandom(1,5));


var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware);
console.log(softwareCount);


// Only change code below this line.

var expression = /and/gi;  // Change this Line

// Only change code above this line

// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;
console.log(andCount)

var testString = "There are 3 cats but 4 dogs.";

// Only change code below this line.

var expression = /\S+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression);
console.log(digitCount);

//OOP

var Car = function(name){
  var speed = 20
  this.name = name

  this.accelerate = function(change){
    speed += change;
  }
  this.decelerate = function(change){
    speed -= change;
  }
  this.getSpeed = function(){
    return speed;
  }
}

var myCar = new Car('mini')
myCar.accelerate(10);
console.log(myCar.name);
console.log(myCar.getSpeed()); // returns undefined


//MAP
//Change an entire array
var oldArray = [1, 2, 3, 4, 5];

var timesFour = oldArray.map(function(val,index){
  console.log(val, index);
  if (index === 0){
    return val;
  }
  return val*4;
});

console.log(timesFour);

//REDUCE
//construct a new var baised on an array
var myArray = [4,5,6,7,8];
var singleVal = myArray.reduce(function(previousVal, currentVal){
  console.log(previousVal, currentVal);
  return previousVal - currentVal
}, 100)

console.log(singleVal);

console.log('FILTERS.........');

var newArray = myArray.filter(function(value, index, array){
  console.log(array);
  return value%2 === 0;
});
console.log(newArray);

//SORT
console.log('SORT............');
var sortArray = [1, 12, 21, 2];

sortArray.sort(function(a,b){
  console.log(a, b);
  return b-a;
})
console.log(sortArray);
