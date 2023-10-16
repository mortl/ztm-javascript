var css = document.querySelector("h3");

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

var body = document.getElementById('gradient');
var randButton = document.getElementById('randButton');



function randomColor(event){ 

    var randColor1 = Math.floor(Math.random() * 16777215).toString(16);
    var randColor2 = Math.floor(Math.random() * 16777215).toString(16);

    console.log("Random Color 1 " + randColor1);
    console.log("Random Color 2 " + randColor2);
    body.style.background = "linear-gradient(to right, " + "#"+ randColor1 + ", " + "#" + randColor2 + ")";
    css.textContent = body.style.background + ";";
}
function defaultGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}
function setGradient(){
   
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}


body.onload = defaultGradient();

color1.addEventListener("input",setGradient);

color2.addEventListener("input", setGradient);

randButton.addEventListener("click", randomColor);