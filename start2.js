var string = "something"
console.log(string.split(''));
array = string.split('').reverse();
var rev = array.join('');
console.log(rev);


var str = "shianknsSSSs**27bjdsd^";

var pattern = /[\d\W]/g;
var newStr = str.replace(pattern, '');
console.log(newStr);

function cleanUp(str) {
  str = str.toLowerCase();
  var pattern = /[\W_]/g;
  var newStr = str.replace(pattern, '');
  return newStr;
}

function reverse(str) {
  var stringArray = str.split('').reverse();
  var revStr = stringArray.join('');
  return revStr;
}

function palindrome(str) {
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


console.log('Length of Longest word..............');

function findLengthOfLongestWord(sentence) {
  var sentenceArray = sentence.split(" ");
  sentenceArray.sort(function(prev, next) {
    return prev.length - next.length;
  });
  return sentenceArray[sentenceArray.length - 1].length;
}

var sentence = "What is the average airspeed velocity of an unladen swallow";

console.log(findLengthOfLongestWord(sentence));

console.log('Title Case A Sentence.............');


function titleCase(sentence) {
  var sentence = sentence.toLowerCase();
  var sentenceArray = sentence.split(' ');
  var newArray = sentenceArray.map(function(val, index) {
    val = val.charAt(0).toUpperCase() + val.slice(1);
    return val;
  });
  var titleSentence = newArray.join(" ");
  return titleSentence;
}



var sentence = "HERE IS MY HANDLE HERE IS MY SPOUT";
console.log(titleCase(sentence));


console.log('Return Largest Numbers in Arrays.......................');

function largestOfFour(myArray) {
  for (var i = 0; i < myArray.length; ++i) {
    var innerArray = myArray[i];
    innerArray.sort(function(prev, next) {
      return next - prev;
    })
  }

  var finalArray = [];
  for (var j = 0; j < myArray.length; ++j) {
    finalArray.push(myArray[j][0]);
  }
  return finalArray;
}


console.log(largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]));


console.log('Confirm the Ending................');

function confirmEnding(str, target) {
  var lengthOfTarget = target.length;
  var lengthOfStr = str.length;
  var sub = str.substring(lengthOfStr - lengthOfTarget);
  console.log(sub);
  if (sub == target) {
    return true;
  } else {
    return false
  }
}

confirmEnding("Bastian", "n");

console.log("Repeat a string................");

function repeatStringNumTimes(str, num) {
  var temp = "";
  if (num < 1) {
    return "";
  }
  for (var i = 0; i < num; ++i) {
    temp += str;
  }
  return temp;
}

repeatStringNumTimes("abc", 3);

console.log('Truncating a String.............');

function truncateString(str, num) {
  length = str.length;
  if (length <= num) {
    return str;
  } else if (num > 3) {
    effectiveLength = num - 3;
    stringToAppend = '...';
    slicedString = str.slice(0, effectiveLength);
    finalString = slicedString + stringToAppend;
    return finalString;
  } else if (num <= 3) {
    stringToAppend = '...';
    slicedString = str.slice(0, num);
    finalString = slicedString + stringToAppend;
    return finalString;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

console.log('Chunky Monkey...........');


function chunkArrayInGroups(arr, size) {
  newArray = [];
  for (var i = 0; i < arr.length; i += size) {
    tempArray = arr.slice(i, i + size);
    newArray.push(tempArray);
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 3);


console.log('Slasher Flick...................');

function slasher(arr, howMany) {
  var length = arr.length;
  if (length <= howMany) {
    return [];
  } else {
    var newArray = arr.slice(-(length - howMany));
    return newArray;
  }
}

slasher([1, 2, 3, 4], 2);


console.log('Mutations................');

function mutation(arr) {
  var count = {};
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  for (var i = 0; i < first.length; ++i) {
    if (count.hasOwnProperty(first[i])) {
      count[first[i]] += 1;
    } else {
      count[first[i]] = 1;
    }
  }
  for(var i=0; i<second.length; ++i){
    if(count[second[i]]==undefined){
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "he"]));


console.log('Falsy Bouncer...............');

function inArray(array, value){
  for(var i=0; i<array.length; ++i){
    if (array[i] === value){
      return true;
    }
  }
  return false;
}
console.log(NaN == NaN);


function bouncer(arr) {
  var falseArray = [false, null, 0, "", undefined, null, NaN];
  var arr = arr.filter(function(value, index, array){
    console.log(value);
    return (falseArray.indexOf(value) == -1) && (value === value);
  })
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
