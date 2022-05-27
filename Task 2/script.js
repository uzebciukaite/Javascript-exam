/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
"use strict"

var btn_state = document.getElementById("btn_state")
var btn_element = document.getElementById("btn_element")
var wrapper = document.querySelector(".wrapper")
var clicks = 0

btn_element.addEventListener("click", function(e){
    e.preventDefault()
    clicks += 1
    btn_state.innerText = clicks
    randomColor()
})

function randomColor() {
var x = Math. floor(Math. random() * 256);
var y = Math. floor(Math. random() * 256);
var z = Math. floor(Math. random() * 256);
var bgColor = "rgb(" + x + "," + y + "," + z + ")"
wrapper.style.background = bgColor;
}