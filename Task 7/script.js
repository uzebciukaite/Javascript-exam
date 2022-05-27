/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};



function showObjectKeys(array){
 var showKeys = Object.keys(array)
 console.log(showKeys)
}

showObjectKeys(audi)