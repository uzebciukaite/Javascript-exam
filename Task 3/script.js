/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
"use strict"
const ENDPOINT = 'https://api.github.com/users';
var btn = document.getElementById("btn")
var output = document.getElementById("output")
var message = document.getElementById("message")



fetch(ENDPOINT)
.then(response => response.json())
.then (showUsers)


function showUsers(data){
btn.addEventListener("click", function(e){
    e.preventDefault()
    for (var x of data){
        console.log(x)
message.style.display = "none"
output.style.color = "white"
var userCard = document.createElement("div")
userCard.classList.add("userCard")

    userCard.innerHTML =
    `
             <h2>${x.login}</h2>
            <img
              class="avatar"
              src="${x.avatar_url}"
              alt="${x.login}"
            />
    `
    output.append(userCard)
    }
    
})
}

