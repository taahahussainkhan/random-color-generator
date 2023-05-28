function changeColor(){
    function generateRandomHexNumber() {
 var randomHex = Math.floor(Math.random() * 16777215).toString(16);
return "#" + randomHex;
}
var code = generateRandomHexNumber();
var elem = document.documentElement;
elem.style.backgroundColor = code;
var text = document.getElementById("color");
text.textContent = code;
}
window.onload = updateColor();