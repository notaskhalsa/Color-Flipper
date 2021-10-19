const simple=["violet", "indigo" ,"blue", "green", "yellow", "orange", "red"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", colorFlipper);

function colorFlipper(){
    let colorChange = Math.floor(Math.random()*simple.length);

    document.body.style.backgroundColor = simple[colorChange];
    color.innerHTML = simple[colorChange];
}

