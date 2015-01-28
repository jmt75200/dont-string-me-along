//#2 find the missing numbers 
  //2,6,7
var ogStr = "9899100101103104105";

function findNumbers( squirl ){
//turn string into an array
  var splitArray = squirl.split("");

  var compare = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"];

  //filter the one array of the duplicates
  var filtered = compare.filter(function (curr, index, array){
    return splitArray.indexOf(curr) == -1;
  });

  //new string of missing numbers
  return filtered.join(",");
}

findNumbers(ogStr);



//#3 swaps the order of words
var stringA = "Doctor Girlfriend";

function swap ( squirl ) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  //using regular expression to match character combinations in a string
  var regEx = /(\w+)\s(\w+)/;

  //use replace() to swap character group create by regEx
  //$1 & $2 are used in the script to indicate the results of the groups of matching characters within the parentheses
  return squirl.replace(regEx, '$2, $1');
}

swap(stringA);

//#4 test for circular variation between two strings



//#5 test a single word if it is a palindrom = true
var palindrome = "hannah";

function backwards( squirl ) {
  var aswards = squirl.split("").reverse().join("");
  return str === aswards;
}

backwards(palindrome);
//split string into an array
//reverse() the array 
//join() the array back into a string 

