//FIXME: Replace all dots
var replaceDots = function(str) {
    return str.replace(/[.]/g, '-');
  }

//Difference of Volumes of Cuboids
function findDifference(a, b) {
  let sum1 = a.reduce((a,b) => a * b)
  let sum2 = b.reduce((a,b) => a * b)
    return Math.abs(sum1-sum2)
  }

//My head is at the wrong end!
function fixTheMeerkat(arr) {
  return arr.reverse()
  }

//Get the mean of an array
function getAverage(marks){
  let sum = marks.reduce((a,b) => a + b,0)
  let average = sum/marks.length
  return Math.floor(average)
}

function getAverage(marks){
  let arr = [];
  let sum = marks.reduce((a,b) => a + b, 0)
  let average = sum/ marks.length
  return Math.floor(average)
}

//Calculate BMI
function bmi(weight, height) {
  let bmi = ((weight)/(height**2));
  return bmi <= 18.5 ? "Underweight" : bmi <=25.0 ? "Normal" : bmi <=30.0 ? "Overweight" : "Obese"
}

//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if((n > 0) && (m > 0)){
    return n*m
  }else{
    return 0
  }
}

//Do I get a bonus?
function bonusTime(salary, bonus) {
  if(bonus === true) {
    return "£"+ (salary*10)
  }else{
    return "£" + salary
  }
}

//MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase()
}

//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  if (current === "green"){
    return "yellow"
  } else if(current === "yellow"){
    return "red"
  } else {
    return "green"
  }
}

function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

//L1: Bartender, drinks!
function getDrinkByProfession(param){
  let drink = param.toLowerCase()
  
  if(drink === "jabroni"){
    return "Patron Tequila"
  }else if(drink === "school counselor"){
    return "Anything with Alcohol"
  }else if(drink === "programmer"){
    return "Hipster Craft Beer"
  }else if(drink === "bike gang member"){
    return "Moonshine"
  }else if(drink === "politician"){
    return "Your tax dollars"
  }else if(drink === "rapper"){
    return "Cristal"
  }else{
    return "Beer"
  }
}