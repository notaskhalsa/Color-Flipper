
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", colorFlipper);

function colorFlipper(){
    let colorChange = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = '#'+colorChange;
    color.innerHTML = '#'+colorChange;
}

