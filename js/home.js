let navBar = document.getElementById("nav-bar");
let closeBtn = document.getElementById("close");
let navigation = document.querySelector(".navigation");


navBar.addEventListener("click",function(){
    navigation.style.display = "block";
})
closeBtn.addEventListener("click",function(){
    navigation.style.display = "none";
})