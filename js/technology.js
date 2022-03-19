let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let name1 = document.getElementById("name");
let para = document.getElementById("para");
let img = document.getElementById("img");

one.onclick = function(){
    classActiveRemove();
    one.classList.add("active-1");
    fetching(0);
};
two.onclick = function(){
    classActiveRemove();
    two.classList.add("active-1");
    fetching(1);
};
three.onclick = function(){
    classActiveRemove();
    three.classList.add("active-1");
    fetching(2);
};

function fetching(index){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","data.json",true);
    xhr.onload = function (){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            name1.innerHTML = data.technology[index].name ;
            para.innerHTML = data.technology[index].description;
            img.src = data.technology[index].images.portrait
           console.log(data.technology[index])
        }
    }
    xhr.send();
}

function classActiveRemove(){
    one.classList.remove("active-1");
    two.classList.remove("active-1");
    three.classList.remove("active-1");
    
}