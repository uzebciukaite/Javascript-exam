/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById("output")


fetch(ENDPOINT)
.then (response => response.json())
.then(data => {
    for(var x of data){
        createTabs(x)
    }
    showHiddenTabs()
})  
.catch(error => console.log(error))

function createTabs(x){
var carGroup = document.createElement("div")
        carGroup.classList.add("carGroup")
        carGroup.innerHTML = 
        `
        <div class="carBrand">
                <div>${x.brand}</div>
                <div class="expandList"> <i class="fa-solid fa-angle-down"></i> </div>
              </div>
              <div class="carModels">
              ${x.models.join(", ")}
              </div>
        `
        output.append(carGroup)      
}

function showHiddenTabs(){
    var expandList = document.querySelectorAll(".expandList")
    
    for(var x of expandList){
 x.addEventListener("click", function(e){
e.preventDefault()
this.classList.toggle("expandListToggle")
var icon = this.childNodes[1]
icon.classList.toggle("rotateIcon")
var list = this.parentNode.nextElementSibling
list.classList.toggle("carModelsToggle")
})  
    }
   
}




