var names = ["Hole-in-one!", "Eagle", "Birdie","Par","Bogey","Double Bogey", "go home!"];
function golfScore(par, strokes){
    if(strokes == 1) return names[0];
    else if(strokes<= par - 2) return names[1];
    else if(strokes == par - 1) return names[2];
    else if(strokes == par) return names[3];
    else if(strokes == par + 1) return names[4];
    else if(strokes == par+2) return names[5];
    else if(strokes == par + 3) return names[6];
}
console.log(golfScore(5,4));
/*

strokes     returm
1           "hole-in-one"
<= par-2    "eagle"
par-1        "birdie"
par+1        "boogy"
par+2        "double boogy"
>= par + 3   "go home"
*/
function caseInSwitch(val){
    var answer = "" ;
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
for(let i = 0; i < 5; i++)
console.log(caseInSwitch(i));