/************************************
 * 
 * this is my first java script program
 * i just learned to comment in this langugae so i am fully using it 
 * i ma learning is for my web dev class thank.... if you are reading this you are wasting yourtime because there is nothing to look for
 * 
 * 
 * 
 * undefined, null, boolean, string, symbol, number, and objects
 * 
********************************/
var myName = "tsewang" // var - can be accessed anywhere in the program.

myName = 8;

let ourName = "freecodecamp" // let - can only be used in the scope you are using in

const pi = 3.14       // variable that cant be change

// there is a difference btw declaring and assigning variables
var a; // assignment
// semi colon is not necassry
var b = 2;
a = 7;
b = a;

console.log(a + " hello world");
var remainder = 7 % 3;
console.log(remainder);
var myStr = '<a herf="http://www.example.com" target="blank">Link</a>'

/*****
 * CODE OUTPUT
 * \' single quote
 * \" double quote
 * \\ backslash
 * \n newline
 * \t tab
 * \b backspace
 * \f form feed
 * **********/

console.log(myStr);

var anAdjective = "awsome!";
var ourStr = "freeCodeCamp";
ourStr += anAdjective;

var someAdjective = " worthwile ";
var myStr = " learning to code is ";
myStr += someAdjective;
console.log(myStr);

var firstNamelength = 0;
firstNamelength = myStr.length;
console.log("length of \" " + myStr + "\" is " + firstNamelength);
console.log("\n");

var himName = "tsewang stanzin";
for(let i = 0; i < himName.length; i++){
    console.log(himName[i] + " ");
}
console.log("\n");

// arry
var ourArry = ["jhon", 23, "bihar"];     // can be any data type

for(let i = 0; i < ourArry.length; i++){
    console.log(ourArry[i]);
}
console.log("\n");

//nested arry
var myArry = [["real madrid", 23],["barcilona",20], ["manchester united", 10], ["chelsea",5]]; 
for(let i = 0; i < myArry.length; i++){
    console.log(myArry[i][0]);  // acessing is almost like in c.
}
console.log("after pushing\n");
a = ["tothnemm",0];
myArry.push(a);
for(let i = 0; i < myArry.length; i++){
    console.log(myArry[i]);  // acessing is almost like in c.
}
console.log("\n after popping: \n");
myArry.pop(); 
/*
here push() functionn pushes element to last position
and pop() function removes the last element for the list
also  shift() function removes the first element
and unshift() function adds element at the begining of the arry
*/
console.log("\n");
console.log(myArry);
