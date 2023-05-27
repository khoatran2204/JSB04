let greet = function(name)
{
    console.log("Hello "+name);
}
greet("An");

function min( a , b)
{
    return a < b ? a : b;
}
console.log(min(5,4));

function increase (x)
{
    let y = 5;
    x += y;
    return ("the number is: " +x);
}
let d= (increase(3));
console.log(d);

let minValue = function(c,d)
{
    if(c<d) return c;
    return d;
};
console.log(minValue(4,6));
minValue = function (c,d,e){
    let min = c;
    if (d < min) min = d;
    if (e < min) min = e;
    return min;
};
console.log(minValue(3,5,8))
minValue = 0;
console.log(minValue);

let f = document.getElementById("h1").style.color = "red";
let g = document.getElementById("h1").style.backgroundColor = "blue";

let k = document.getElementById("h1 ").innerHTML = "hello";
let j = document.getElementById("b1").addEventListener("mouseover",ChangeColor);
 
function ChangeColor()
{
    document.getElementById("b1").style.backgroundColor = "white";
    document.getElementById("b1").style.color = "black";      
}
