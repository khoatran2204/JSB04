const nameid = document.getElementById("name");
const phone = document.getElementById("phone");
const old = document.getElementById("old")
const email = document.getElementById("email")
const password = document.getElementById("password-signup")
var vnf_regex = /((0)+([0-9]{9})\b)/g;
let sexual = document.forms.GioiTinh;



function CheckUser() {
    if (nameid.value == "" || nameid.value == null){
        alert("Bạn cần điền tất cả các mục");
    }
    else if (email.value == "" || email.value == null){
        alert("Bạn cần điền tất cả các mục");
    }
    else if (phone.value == "" || phone.value == null){
        alert("Bạn cần điền tất cả các mục");
    }
    else if (old.value == "" || old.value == null){
        alert("Bạn cần điền tất cả các mục");
    }
    else if (password.value == "" || password.value == null){
        alert("Bạn cần điền tất cả các mục");
    }
    else if (sexual.checked == false){
        alert("Bạn cần điền tất cả các mục");
    }
    else if (old.value < 1 || old.value > 200) {
        alert("Tuổi ko hợp lệ");
    }
    else if (vnf_regex.test(phone.value) == false){
        alert("Số điện thoại ko hợp lệ")
    }
    else{
        
   }
}

let b = document.getElementById("signup-button").addEventListener("click",CheckUser,);