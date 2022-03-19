let doglas = document.querySelector(".doglas");
let mark = document.querySelector(".mark");
let victor = document.querySelector(".victor");
let anousheh = document.querySelector(".anousheh");
let role = document.getElementById("role");
let name1 = document.getElementById("name");
let bio = document.getElementById("bio");
let img = document.getElementById("img");



doglas.addEventListener("click",function(){
    classActiveRemove();
    doglas.classList.add("active-1");
    fetching(0);
});

mark.addEventListener("click",function(){
    classActiveRemove();
    mark.classList.add("active-1");
    fetching(1);
});
victor.addEventListener("click",function(){
    classActiveRemove();
    victor.classList.add("active-1");
    fetching(2);
});
anousheh.addEventListener("click",function(){
    classActiveRemove();
    anousheh.classList.add("active-1");
    fetching(3);
});

function classActiveRemove(){
    doglas.classList.remove("active-1");
    mark.classList.remove("active-1");
    victor.classList.remove("active-1");
    anousheh.classList.remove("active-1");
};

function fetching(index){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","data.json",true);
    xhr.onload = function (){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            role.innerHTML = data.crew[index].role;
            name1.innerHTML = data.crew[index].name;
            bio.innerHTML = data.crew[index].bio;
            img.src = data.crew[index].images.png;
        }
    }
    xhr.send();
};