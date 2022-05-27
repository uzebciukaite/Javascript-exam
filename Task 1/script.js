/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
"use strict"


const search = document.getElementById("search")
const submit_btn = document.getElementById("submit-btn")

submit_btn.addEventListener("click", function(e){
    e.preventDefault()
    console.log(search.value)
const output = document.getElementById("output")
output.style.display = "flex"
output.innerHTML = 
`
        <span id="searchDisplay">${search.value} kg</span>
          <h1> equals to:</h1>
          <div id="masstypes">
            <div class="massitem">
              <p>Pounds (lb)</p>
              <span>${search.value * 2.2046}</span>
            </div>
            <div class="massitem">
              <p>Grams (g)</p>
              <span>${search.value / 0.0010000}</span>
            </div>
            <div class="massitem">
              <p>Ounces (oz)</p>
              <span>${search.value * 35.274}</span>
            </div>
          </div>

`
search.value = ""

})