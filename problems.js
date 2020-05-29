/* 
Write a function called “sumDigits”.

Given a number, “sumDigits” returns the sum of all its digits.

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the “toString” method, as well as the “Number” function.


*/

// function sumDigits(num){
//   let arr = num.toString().split("")
  
//   //if the first element in the array is a dash, then we will replace it with a zero, and we will assign the index 1 element to be negative,
//   //by multiplying it by -1
//   if (arr[0] === '-'){
//     arr.shift();
//     arr[0] = arr[0]*(-1);
//   }
// arr = arr.map(e => Number(e));
// let result = arr.reduce((acc, curr) => Number(acc+curr));

// return result;
// }

// var output = sumDigits(-316);
// console.log(output); // --> 4


// function findShortestWordAmongMixedElements(arr) {
//   // your code here
//   let output = ''; 
  
//  let newArr = arr.filter( (e) => typeof(e) === 'string');

//   if (newArr.length > 0){
//     output = newArr[0];
//         for (let i=0; i<newArr.length; i++){
//          if (newArr[i].length < output.length){
//           output = newArr[i];
//     }
//   }
// }

// return output;
// }

// var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three', 'bee']);
//  console.log(output); // --> 'two'


// function findSmallestNumberAmongMixedElements(arr) {
//   // your code here
//   let newArr = arr.filter( (e) => (typeof(e) === 'number'));
  
//   if (newArr.length === 0){
//     return 0;
//   }

//   let result = newArr.reduce( (smallest, curr) => {
//     if (curr < smallest){
//       smallest = curr;
//     }
//     return smallest;
//   }, newArr[0]);

//   return result;
// }

// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4



// function convertScoreToGradeWithPlusAndMinus(score) {
//   let letterGrade = '';
//   score = score.toString();
  
//   if (score > 100 || score < 0){
//       return 'INVALID SCORE';
//   }
//   else if (score <=100 && score >=90){
//       letterGrade =  'A';
//   }
//   else if (score >=80 && score<90){
//       letterGrade = 'B';
//   }
//   else if (score >=70 && score<80){
//       letterGrade = 'C';
//   }
//   else if (score >= 60 && score< 70){
//       letterGrade = 'D';
//   }
//   else{
//       return 'F';
//   }
  
//   if (score.substring(1) >= 8 || score == 100){
//       console.log('I have dispatched A+');
//       return  letterGrade + '+';
//   }
//   else if(score.substring(1) <=2){
//       return letterGrade + '-';
//   }
  
	
// }

// var output = convertScoreToGradeWithPlusAndMinus(100);
// console.log(output); // --> 'A-'


// function computeFactorialOfN(n) {

//    if (n===1){
//         return 1;
//     }
//     return n*computeFactorialOfN(n-1);

// }
// var output = computeFactorialOfN(3);
// console.log(output); // --> 6

// var output = computeFactorialOfN(4);
// console.log(output); // --> 24


// function modulo(num1, num2) {
//   // your code here
//     if (num1 === 0 ){
//         return 0;
//     } else if (num2 ===0 || isNaN(num1) || isNaN(num2)){
//         return NaN;
//     }
//     newNum1 = Math.abs(num1);
//     newNum2 = Math.abs(num2);

//     let division = Math.floor(newNum1/newNum2);
//     let remainder = newNum1 - division*newNum2 ;

//     if (num1 <0){
//       remainder = remainder*-1;
//     }

//     return remainder;
  
// }

// var output = modulo(25, 4);
// console.log(output); // --> 1

// function multiply(num1, num2) {
//   // your code here
//     let newNum1 = Math.abs(num1);
//     let newNum2 = Math.abs(num2);
//     let result = 0;
//     while (newNum2 > 0){
//         result += newNum1;
//         newNum2--;
//     }
//     if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0) ){
//         result = -result;
//     }
//     return result;
// }

// var output = multiply(4, 7);
// console.log(output); // --> 28

// function multiplyBetween(num1, num2) {
//   // your code here
  
//   if (num2 <= num1){
//       return 0;
//   }

//   let result = 1;
//   while ( num1 < num2){
//       result *= num1;
//       num1++;
//   }
//   return result;
// }
// var output = multiplyBetween(2, 5);
// console.log(output); // --> 24

// function flipPairs(input) {
//   // your code here  
  
//   let newArr = input.split('');
//   let result = [];
//   for (let i=0; i<newArr.length; i+2){
//       result.push(newArr[1]);
//       result.push(newArr[0]);
//       newArr.splice(0,2);
//   }
//   return result.join('');
// }

// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

// var customerData = {
//   'Joe': {
//     visits: 1
//   },
//   'Carol': {
//     visits: 2
//   },
//   'Howard': {
//     visits: 3,
//   },
//   'Carrie': {
//     visits: 4
//   }
// };



// function greetCustomer(firstName) {
//   // your code here
  
//     if (!customerData.hasOwnProperty(firstName)){
//         return `Welcome! Is this your first time?`;
//     }
//     else if (customerData[firstName]['visits'] === 1 ){
//         return `Welcome back, ${firstName}! We're glad you liked us the first time!`;
//     }
//     return `Welcome back, ${firstName}! So glad to see you again!`;
// }
// var output = greetCustomer('Carol');
// console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

// function detectOutlierValue(string) {
//   let newArr = string.split(" ");
 
//   let isEven = 0;
//   let isOdd = 0;
//   let isEvenIndex = 0;
//   let isOddIndex = 0;
//   for (let i=0; i<newArr.length; i++){
//       if (newArr[i]%2 === 0){
//             isEven ++;
//             isEvenIndex = i; 
//       }else{
//           isOdd++;
//           isOddIndex = i;
//       }
//   }

//   if (isOdd === 1){
//       return isOddIndex+1;
//   } else if (isEven === 1) {
//   return isEvenIndex+1;
//   }
  
  
// }

// console.log(detectOutlierValue("2 4 7 8 10")); // => 3 - Third number is odd, while the rest of the numbers are even

// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

// function flipEveryNChars(input, number) {
//   // your code here  
// let newArr = input.split("");
// let result  = [];
// let count = 0;
// let numArr = [];
//   for (let i=0; i<newArr.length; i++){
//        numArr.push(newArr[i]);
//        count ++;

//       if (count === number){
//           numArr.reverse();
//           numArr = numArr.join('');
//           result.push(numArr);
//           count = 0;
//           numArr = [];
//       }
//   }
//   return result.join('');
  
// }

// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// /*
// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'
// */

// function reverseString(string) {
//     let newString = string.split("");
//     newString.reverse();
//     newString = newString.join('');
//     return newString;

// }


// console.log(reverseString('dog'));


// function isIsogram(text) {
//   // add each char to a set
//     let mySet = new Set()
//     for (let i =0; i<text.length; i++){
//         if (!mySet.has(text[i].toUpperCase())){
//             mySet.add(text[i].toUpperCase());
//         }
//     }
        
//         if (mySet.size < text.length){
//             return false;
//         }
//         return true;
    
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
//}

// 
// function flipPairs(input){
// //create a new string with the flipped pairs
// let result = '';

// //iterate across the input, incrementing by 2 
// for (let i=0; i<input.length; i+=2){
// // check if the next character is undefined, 
// if (input[i+1] === undefined){
// // if it is, then it will break the loop and it will only add the current character to the result 
// result += input[i];
// break;
// }
// //if it isn't then it will now add the next character to the result, then the current character to the result 
// result += input[i+1];
// result += input[i];

// }
// //return the result 




// }





// function assertEqual(actual, expected, testCase){
//   if (actual === expected){
//     console.log(`Passed, ${testCase}`);
//   }
//   console.log(`Failed, ${testCase}, Excected ${expected}, but got ${actual}`);
// }

// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'

// function flipEveryNChars(input , number){
//   //turn the input into an array
//   let inputArr = input.split("");
//   //create a new results array 
//   let results = [];
//   //create a temporary array 
//   let temp = [];
//   //create a counter variable
//   let counter = 0;

//   //increment across the array 
//   for (let i=0; i<inputArr.length; i++){ 
//     // push the current element into the temporary array and keep a counter for it
//     temp.push(inputArr[i]);
//     counter++;
//     // when the counter is reached, it will push the array into the results array
//     if (counter === number){ 
//     // the counter will be reset and temporary array is reset   
//     temp.reverse();
//     temp = temp.join('');
//     results.push(temp);
//     counter =0;
//     temp = [];
//     }
    
//   }
//   //return the results array and turn the array into a string
//   return results.join('');
// }

// function  assertEqual(actual, expected, testCase){
//   if (actual === expected){
//     console.log('Passed');
//   }
//   console.log('Failed [ ' + testCase + ' ]' + 'Expected ' + expected + ', but actual is ' + actual);
// }

// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

// Examples :
// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd


// function transposeTwoStrings(arrayInput){
//   //create alias for first string
//   var firstString = arrayInput[0];
//   //create alias for second string
//   var secondString = arrayInput[1];
//   // create variable for the longer string
//   //determine the longer string
//   var longerString;
//   if (firstString >= secondString){
//     longerString = firstString;
//   } else{
//     longerString = secondString;
//   }
//   //create result string
//   var transposedString = '';
//   //iterate over length of the longer string
//   for (var i=0; i<longerString.length; i++){
//     //set first to first string's current letter or empty space
//     var firstCharacter = firstString[i] || " ";
//     //set second to second string's current letter of empty space
//     var secondCharacter = secondString[i] || " ";
//     //add first, space, second, and newline to result string
//     transposedString += firstCharacter + " " + secondCharacter + "\n";
//   }
//     //return result string
//     return transposedString;

// }

// console.log(transposeTwoStrings(['Hello', 'World']));
// console.log('\n');
// console.log(transposeTwoStrings(['Some', 'Things']));
// console.log('\n');
// console.log(transposeTwoStrings(['things', 'some']));
// console.log('\n');

// function renderInventory(inventory) {

 // loop through the array for each element in the array inventory
     let string = '';
     for (let i=0; i<inventory.length; i++){
 //access the shoe property of each element
     let designer = inventory[i]['name'];
 // loop through each element of that shoe property, get the name of the designer
   
         for(let k=0; k<inventory[i]['shoes'].length; k++){
         //access the shoe property of each element
         // loop through each element of that shoe property, get the name of the designer
         //the line and the price, add that into a string, and console log it
         let shoeName = inventory[i]['shoes'][k]['name'];
         let shoePrice = inventory[i]['shoes'][k]['price'];
         string += `${designer}, ${shoeName}, ${shoePrice}\n`;
     }
 //the line and the price, add that into a string, and console log it

     }
     return string;


// }

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];


// renderInventory(currentInventory);

// function calculateAveragePricePerDesigner(inventory) {
//     // creating a new object that has an array of an object of each designer name
//     //and the average price of their shoes in their lineups
    
//     //create a new empty object called expected 
    
//     var expected = { 'designers' : [] };
//     //iterate through each element and take the name of the designer
//     for (let i=0; i<inventory.length; i++){
//     let designer = inventory[i]['name'];
//      // access and iterate through the shoe property of each element, and get the price 
//     //add the prices to an array
//         let priceArr = [];
//         for (let k=0; k<inventory[i]['shoes'].length; k++){
//             let price = inventory[i]['shoes'][k]['price'];
//             priceArr.push(price);
//         }
//     // get the average of the price array
//     // once the iterate through the shoe property is done, we add it to the expected object
//     let averagePrice = findAverage(priceArr);
//     let designerEl = { 'name': designer , 'averagePrice': averagePrice };
//     expected[`designers`].push(designerEl);
//     }
//     return expected;
   
// }

// // Create helper functions if needed

// function findAverage(arr){
//     return arr.reduce( (acc, curr) => acc+curr)/(arr.length);
// }

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];


// let avgPrice = calculateAveragePricePerDesigner(currentInventory);


// var expected = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };


// function assertEqual(actual, expected, testName) {
//   if (actual === expected) {
//     console.log('passed [' + testName + ']');
//   } else {
//     console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
//   }
// }


// console.log(assertEqual(avgPrice, expected, '' ));

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];


// function listAllBlackShoes(inventory) {
// //initialize the result empty string 
// let result = '';
// // iterate across the array, take the name of the designer
// for (let i=0; i<inventory.length; i++){
//   let designer = inventory[i]['name'];
// //iterate across the shoe property array in each element
//   let shoeProp = inventory[i]['shoes'];
//   for (let k=0; k<shoeProp.length; k++){
//     let shoeName = shoeProp[k]['name'];
//     if (shoeName.includes('black')){
//       //check if the name property has black in the string, if it does,
//       //take in the whole name, price 
//       let shoePrice = shoeProp[k]['price'];
//       result += `${designer}, ${shoeName}, ${shoePrice}\n`;
//     }
//   }
// }
// //return the result string in the flat list style
// return result;
// }
console.log(listAllBlackShoes(currentInventory));

let expected = "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n";

function assertEqual(actual, expected, testName){
  if (actual === expected){
    console.log('passed');
  }
  else{
    console.log(`failed [ ${testName} ] Expected ${expected}, but got ${actual}`);
  }
}



// assertEqual(listAllBlackShoes(currentInventory), expected, 'return flat list of designer name, that has products with black shoes, and price' );

// var currentInventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];

// return an object with two properties, nameWords and targetWordIndex for shoe names from the inventory object that has the word 'lace' in them, in the nameWords property, we get each word from the name that has lace separately as an array, 
// for the targetWordIndex property, we have the index of that value/element in the array


function generateLaceDetails(inventory){
let result =[];
// iterate through the inventory object, access the shoes property
for (let i=0; i<inventory.length; i++){
//iterate through that array and access the name property 
  for (let k=0; k<inventory[i]['shoes'].length; k++){
//check if the name propery has substring of lace
  let shoesName = inventory[i]['shoes'][k]['name'];
    if (shoesName.includes('lace')){
    //if it does, we will turn the string into an array 
    //we will push the array nameWords, also set the target word index
    let nameWords = shoesName.split(" ");
    let targetWordIndex = nameWords.findIndex(el => el.includes("lace"));
    let subResult = {"nameWords": nameWords, "targetWordIndex": targetWordIndex};
    result.push(subResult);
    } 

  }
}
//return the result object
return result;
}

// console.log(generateLaceDetails(currentInventory));


// function assertEqual(actual, expected, testName){
//   if (actual.length !== expected.length){
//     return console.log(`failed, ${testName} 1`);
//   }
//   else{
//     for (let i=0; i<actual.length; i++){
//     for (let key in actual[i]){
//       for (let k=0; k<actual[i][key]; k++){
//       if (actual[i][key][k] !== expected[i][key][k]){
//         return console.log(`failed, ${testName} 2 `);
//       }
//       }
//     }
//     }
//   }
//    return console.log(`passed, ${testName}`);
// }


// var expectedResult = [
//   {
//     "nameWords": [
//       "tasselled",
//       "black",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "tasselled",
//       "green",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "red",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   },
//   {
//     "nameWords": [
//       "black",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   }
// ];

// assertEqual(generateLaceDetails(currentInventory), expectedResult, 'get words with lace information and lace index');


// function transformFirstAndLast(array){

//   let obj = {};

//   obj[array[0]] = array[array.length-1];
//   return obj;
// }




// console.log(transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']))


// console.log(('hello').slice(7));


// function sumDigits(num){
//     let numArr = num.toString().split("");
    
//     if (numArr[0] === '-'){
//         numArr.shift();
//         numArr[0] = numArr[0]*-1;
//     }
    
//     numArr = numArr.map(e => Number(e));
//     let sum = numArr.reduce( (acc, curr) => acc +curr);
//     return sum;
    
// }

// sumDigits(-314);

// function flipPairs(input){
//     let newString = '';
//     for (let i=0; i<input.length; i+=2){

//       if (input[i+1] === undefined){
//         newString += input[i];
//         break;
//       }
//          newString += input[i+1] + input[i];
//     }
//     return newString;
// }

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!


function russianRoulette(n){
  return function(){
    if (n===1){
      n--;
      return 'bang';
    }
    if (n===0){
      return 'reload to play again';
    }
    n--;
    return 'click';
  }
}

const play = russianRoulette(5);
 
 console.log(play());


 
function select(array, callback){
  // create empty array 
  let result = [];
  //iterate through the array and checking whether the callback returns true or false based 
  //on each element of the array, if true, the element will be pushed to the new array
  for (let i=0; i<array.length; i++){
    if (callback(array[i])){
      result.push(array[i]);
    }
  }
  //return the new array
  return result;
}


function select(array, callback){
  return array.filter( (e) => callback(e));
}

 const arr = [1, 2, 3, 4, 5];
 const isEven = n => n % 2 === 0;
 console.log(select(arr, isEven)); // should log: [2, 4]


 
POD Day 7 - Self Recording - Check if Sorted 
Given an array of integers, check to see if the array is already sorted (return true or false)

Focus on clearly explaining your solution

Once you've solved it iteratively, try to solve it recursively or using functional programming

If you have time, write and walk through some test cases for your code.

What's the time complexity of your solution?


function checkSorted(array){

  for (let i=0; i<array.length; i++){

    if (array[i+1] === undefined){
      return true;
    }
    if (array[i+1]<array[i]){
      return false;
    }
  }
}
console.log(checkSorted([2,2,3,4,5,9,100]));
console.log(checkSorted([2,2,3,4,5,6,5])); // return false
the time complexity for this checkSortedFunction is O(n) which is linear. it iterates through the length of the array one time. so it is entirely dependent on the size of the array. 

i will use check if the array is sorted using the recursive approach
create a function called checkRecursiveSorted

const checkSortedRecursive = (array) => {
  if (array.length === 1){
    return true;
  }
    if (array[0]<=array[1]){
      array.shift();
      return checkSortedRecursive(array);
    }
      return false;

}

console.log(checkSortedRecursive([2,2,3,4,5,9,100])); //return true
console.log(checkSortedRecursive([2,2,3,4,5,6,5])); // return false


Given 2 arrays that may contain both numbers and strings return a new array with the numbers and/or strings that appear in both arrays duplicates are only counted once;

Ex: 

var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
commonElements(array1, array2) -> [ 12, 'ferret', 'dog']
if there are no common numbers or strings, return []

Bonus: Modify commonElements to take in an array of arrays and only return elements that appear in every array

function commonElements(array1,array2){
   
   let common = array1.filter( e => array2.indexOf(e) !== -1);
   let filtered = common.reduce( (acc, curr) => {
      if (acc.indexOf(curr) === -1){
        acc.push(curr);
      }
      return acc;
   }, []);
  return filtered;
}

function commonElements(array1,array2){
 let result = array1.reduce( (acc, curr) => {
   array2.map( e => {
     if (e === curr){
       acc[e] = 0;
     }
   })
   return acc;
 }, {})
 return Object.keys(result);
}

var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
commonElements(array1, array2) //-> [ 12, 'ferret', 'dog']
// this is O(n2) since there are 2 iterations, it will be proportional to the square of the input array



