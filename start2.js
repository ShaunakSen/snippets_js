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
