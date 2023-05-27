/*let greet = function(name){
    console.log("Hello" + name);
}
greet("An");
//This is a function
function increment(x){
    let y = 20;
    x += y;
    console.log("The number is: " + x);
}
let d = increment(40);
console.log(d);*/

let a = document.getElementById("h1").style.color = "red";
let b = document.getElementById("h1").innerHTML = "JSB04";

function ChangeColor(){
    document.getElementById("btnYes").style.backgroundColor = "white";
    document.getElementById("btnYes").style.color = "black";
}

function ChangeColorBack(){
    document.getElementById("btnYes").style.backgroundColor = "red";
    document.getElementById("btnYes").style.color = "white";
}

let c = document.getElementById("btnYes").addEventListener("mouseover",ChangeColor);
let d = document.getElementById("btnYes").addEventListener("mouseout",ChangeColorBack);

