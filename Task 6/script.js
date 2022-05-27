/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..]
2. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

// 1 uzduotis

// function getUsersNames (array){
//   var userNames = array.map(x => x.name)
//   console.log(userNames)
// }
// getUsersNames(users)

// 2 uzduotis

// 1 variantas (ilgesnis)
// function getUserAverageAge(array){
// var extractAges = array.map(x => x.age)
//  var ageSum = extractAges.reduce((a, b ) => a + b, 0)
//  var averageAge = ageSum / array.length
//  console.log(extractAges)
//  console.log(ageSum)
//  console.log(averageAge)
 
// }
// getUserAverageAge(users)

// 2 variantas (trumpesnis)
function getUserAverageAge(array){
var caclulateAverage = array.map(x => x.age).reduce((a, b ) => a + b, 0) / array.length

 console.log(caclulateAverage)
 
}
getUserAverageAge(users)
