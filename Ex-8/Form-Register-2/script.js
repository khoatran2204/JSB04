const usernameright = "abc";
const passwordright = "1234";

const username = document.getElementById("login");
const pv = document.getElementById("password");

function CheckUser() {
    if (username.value == usernameright && pv.value == passwordright){
        alert("Đúng");
    }
    else {
        alert("Sai");
    }
}

let btn = document.getElementById("button").addEventListener("click",CheckUser);