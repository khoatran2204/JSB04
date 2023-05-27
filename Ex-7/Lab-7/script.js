function min(a,b) {
    return a < b ? a : b;
}
console.log(min(2,5))
let s=1;
function ShowSearchAdvance (){
    if(s=1){
        document.getElementById("show_search_advance").innerHTML="bỏ tìm kiếm nâng cao";
        document.getElementById("search_advance").style.display;
        return s=2;
    }
    else{
        document.getElementById("show_search_advance").innerHTML="bỏ tìm kiếm nâng cao";
        document.getElementById("search_advance").style.display=none;
        return s=1;
    }
}
let c = document.getElementById("show_seach_advance").addEventListener("click",ShowSearchAdvance());