const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImgLoad() {
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `img/${imgNumber + 1}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImage");
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number
}


function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();





/*
const body=document.getElementById("container");//call body tag

const photoNum = 5; //num of photo;

function callRan() {
    //call number 1 to 6
    return Math.floor((Math.random() * 5) + 1);
}

function callPho(){
    const ranNum = callRan();
    const url = `${ranNum}.jpg`;
    body.style.backgroundImage=`url(${url})`;
}

function init(){
    callPho();
}

init();*/
