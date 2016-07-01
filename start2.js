var string = "something"
console.log(string.split(''));
array = string.split('').reverse();
var rev = array.join('');
console.log(rev);


var str = "shianknsSSSs**27bjdsd^";

var pattern = /[\d\W]/g;
var newStr = str.replace(pattern, '');
console.log(newStr);

function cleanUp(str){
  str = str.toLowerCase();
  var pattern = /[\W_]/g;
  var newStr = str.replace(pattern, '');
  return newStr;
}

function reverse(str){
  var stringArray = str.split('').reverse();
  var revStr = stringArray.join('');
  return revStr;
}

function palindrome(str){
  var cleanStr = cleanUp(str);
  console.log('Clean string....', cleanStr);
  var revStr = reverse(cleanStr);
  console.log('Rev string....', revStr);
  if (revStr === cleanStr)
    return true;
  else
    return false;
}

var str1 = "sasas$54465@hh**sasas";
var str2 = "1 eye for of 1 eye."
console.log(palindrome(str2));


console.log('Lngth of Longest word..............');

function findLengthOfLongestWord(sentence){
  var sentenceArray = sentence.split(" ");
  sentenceArray.sort(function(prev, next){
    return prev.length - next.length;
  });
  return sentenceArray[sentenceArray.length - 1].length;
}

var sentence = "What is the average airspeed velocity of an unladen swallow";

console.log(findLengthOfLongestWord(sentence));

function titleCase(sentence){
  var sentence = sentence.toLowerCase();
  var sentenceArray = sentence.split(' ');
  var newArray = sentenceArray.map(function(val, index){
    val = val.charAt(0).toUpperCase() + val.slice(1);
    return val;
  });
  var titleSentence = newArray.join(" ");
  return titleSentence;
}


console.log('Title Case A Sentence.............');

var sentence = "HERE IS MY HANDLE HERE IS MY SPOUT";
console.log(titleCase(sentence));


console.log('Return Largest Numbers in Arrays.......................');

function largestOfFour(myArray){
  for (var i = 0; i < myArray.length; ++i){
    var innerArray = myArray[i];
    innerArray.sort(function(prev,next){
      return next - prev;
    })
  }

  var finalArray = [];
  for(var j=0; j<myArray.length; ++j){
    finalArray.push(myArray[j][0]);
  }
  return finalArray;
}


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
