let moon = document.querySelector(".moon");
let mars = document.querySelector(".mars");
let europa = document.querySelector(".europa");
let titan = document.querySelector(".titan");
let headerName = document.querySelector(".header-name");
let para = document.querySelector(".para");
let distance = document.querySelector(".ditance");
let travelTime = document.querySelector(".travel-time");
let mainImg = document.getElementById("main-img");

moon.addEventListener("click",function(){
    classActiveRemove();
    moon.classList.add("active-1");
    fetching(0);
    
})
mars.addEventListener("click",function(){
    classActiveRemove();
    mars.classList.add("active-1");
    fetching(1);
})
europa.addEventListener("click",function(){
    classActiveRemove();
   europa.classList.add("active-1");
    fetching(2);
})
titan.addEventListener("click",function(){
    classActiveRemove();
   titan.classList.add("active-1");
    fetching(3);
})

function fetching(index){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","data.json",true);
    xhr.onload = function (){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            headerName.innerHTML = data.destinations[index].name;
            para.innerHTML = data.destinations[index].description;
            distance.innerHTML = data.destinations[index].distance;
            travelTime.innerHTML = data.destinations[index].travel;
            mainImg.src = data.destinations[index].images.png;
        }
    }
    xhr.send();
}

function classActiveRemove(){
    moon.classList.remove("active-1");
    mars.classList.remove("active-1");
    europa.classList.remove("active-1");
    titan.classList.remove("active-1");
}




