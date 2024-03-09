//dialog box
//- alert() -confirm()
//events
function print(){
    var name1 = prompt("enter your name");
    return name1;
}
function chg(){
    document.getElementById("mithra").innerHTML = print();
}
function change(){
    element = document.getElementById("toChange");
    if(element.style.border == "solid black"){
        element.style.border = "none";
    }
    else{
        element.style.color = "red";
        element.style.fontsize = "red";
        element.style.border = "solid black";
    }
}
function greet(x){
    document.getElementById("a").innerHTML = "hello " + x + " welcome to my webbpage";
}

/*
onmouseover -> 
onmouseover -> 
onfocus = "call a function" -> generallly used with  input type="text" or textarea
onkeyup     ->  when user releases the key from pressing up key on keyboard
onkeydown     ->  when user releases the key from pressing up key on keyboard
onchange()
onblurr
onload
*/