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


