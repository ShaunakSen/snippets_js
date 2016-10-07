console.log("Sum all..............");

function sumAll(arr) {
    var first = arr[0];
    var sec = arr[1];
    var low = Math.min(first, sec);
    var high = Math.max(first, sec);
    sum = low;
    for (var i = low + 1; i <= high; ++i) {
        sum += i;
    }
    return sum;
}

console.log(sumAll([4, 1]));

console.log("Diff 2 arrays.........");


function isInArray(value, arr) {
    // console.log(arr);
    for (var x = 0; x < arr.length; ++x) {
        if (arr[x] === value) {
            return true;
        }
    }
    return false;
}

function diffArray(arr1, arr2) {
    var newArr = [];
    if (arr1.length > arr2.length) {
        maxArray = arr1;
        minArray = arr2;
    } else {
        maxArray = arr2;
        minArray = arr1;
    }
    newArr = maxArray.filter(function (value) {
        return !isInArray(value, minArray);
    });
    newArr2 = minArray.filter(function (value) {
        return !isInArray(value, maxArray);
    });
    //   console.log(newArr.concat(newArr2));
    return newArr.concat(newArr2);
}

console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

console.log("Roman Numerals..............");

var romanNumerals = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
};

var romanStr = "";
var largestKey = 1;

function convertToRoman(num) {
    // console.log(romanStr)
    for (variable in romanNumerals) {
        if (variable == num) {
            romanStr += romanNumerals[num];
            return;
        }
    }
    for (variable in romanNumerals) {
        if (variable <= num) {
            largestKey = variable;
        }
    }
    // console.log(largestKey);
    if (largestKey == num) {
        romanStr += romanNumerals[num];
        return;
    }
    romanStr += romanNumerals[largestKey];
    convertToRoman(num - largestKey);
}

convertToRoman(44);
console.log(romanStr);

console.log("What is in a name................");

function whatIsInAName(arrayOfObjects, sourceObject) {
    var newArray = arrayOfObjects.filter(function (object, index, array) {
        //console.log(index, object);
        //We have access to sourceObject here
        var keys = Object.keys(sourceObject);
        for (var i = 0; i < keys.length; ++i) {
            if (!(object.hasOwnProperty(keys[i]) && object[keys[i]] == sourceObject[keys[i]])) {
                return false;
            }
        }
        return true;


    });
    return newArray;
}

console.log(whatIsInAName([{
    "a": 1,
    "b": 2
}, {
    "a": 1
}, {
    "a": 1,
    "b": 2,
    "c": 2
}], {
    "a": 1,
    "b": 2
}));


console.log("Search and Replace.............");



function myReplace(str, before, after) {
    var firstChar = before.charAt(0);
    var newAfter = after;
    if (firstChar.toUpperCase() === firstChar) {
        newAfter = after.charAt(0).toUpperCase()
        newAfter += after.slice(1, after.length)
    }
    console.log(newAfter);
    str = str.replace(before, newAfter);
    return str;
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));


console.log("Pig Latin.....................");

var vowels = ['a', 'e', 'i', 'o', 'u'];

function isConsonant(letter) {
    for (var x = 0; x < vowels.length; ++x) {
        if (vowels[x] === letter) {
            return false;
        }
    }
    return true;
}

function translatePigLatin(str) {
    var isVowel = false;
    var letters = str.split('');
    var clusterOfConsonants = [];
    console.log(letters);

    for (var i = 0; i < letters.length; ++i) {
        if (isConsonant(letters[i])) {
            clusterOfConsonants.push(letters[i]);
        } else {
            break;
        }
    }

    //    Check if consonant was found
    if (clusterOfConsonants.length != 0) {
        console.log(clusterOfConsonants)
        var lengthOfCluster = clusterOfConsonants.length;
        var consonantStr = clusterOfConsonants.join('');
        str = str.slice(lengthOfCluster, str.length) + consonantStr + "ay";
    } else {
        str += "way"
    }
    return str;

}

console.log(translatePigLatin("algo"));
