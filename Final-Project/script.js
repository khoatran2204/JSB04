const usernameright = "abc";
const passwordright = "1234";

const username = document.getElementById("login");
const pv = document.getElementById("password");

function CheckInfo() {
    if (username.value == "" || username.value == null || pv.value == "" || pv.value == null){
        alert("Bạn cần điền tất cả các mục")
    }
    else if (username.value != usernameright || pv.value != passwordright ){
        alert("Sai email hoặc password")
    }
    else if(username.value == usernameright && pv.value == passwordright){
        alert("Thanh cong")
    } 
}

let a = document.getElementById("login-button").addEventListener("click",CheckInfo);

