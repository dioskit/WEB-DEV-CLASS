var myList = [
    ["cereal", 3],
    ["milk", 2],
    ["bananas", 3],
    ["juice", 2],
    ["eggs",12],
    ];
// functions are reusable codes  
//exampple
function listprinter(a){
    for(let i = 0; i < a.length; i++) 
        console.log(a[i]);
    console.log("...done...");
}

listprinter(myList);

/*global scope means variables that are accessable everywhere and are outside the functions. we can call them inside functions without passing them in it.*/

var myGlobal = 10;
function myCloth(){
    var outerWear = "sweater ";
    return outerWear;
}

console.log(myCloth() + myGlobal);
//note -> string * number is not valid and returns Nan.

//queue 
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}
var test_arr = myList;
console.log("before: " + JSON.stringify(test_arr));
console.log(nextInLine(test_arr,["nailcutter",1]));
console.log("after: " + JSON.stringify(test_arr));


//booleans values
// true and false
//condition if else
function ture_or_not(istrue){
    if(istrue){
        return "yes Its True";
    }
    return "NO, its false";
}

console.log(ture_or_not(true));

// the is equal sign is == 
function testEqual(val, val1){
    if(val == val1){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(12,12));
/* strict equality operator === 
== this operator tries to make them into same type ten compare 
where as strict equality operator doesnot so
3 === '3' this is does not equals and 3 === 3 gives true
where as 3 == '3' does not equals so returns false

*/

function test(a,b){
    if(a == b){
        return "equal";
    }
    return "not equal"
}
//check
console.log(test(9,"9"));
// != and !== also exist in this weird language

