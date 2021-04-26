//Name of Challenge
//My solution
//Best practices solution when available

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

// Enumerable Magic #25 - Take the First N Elements
function take(arr, n) {
  return arr.slice(0, n);
}

let take = (arr, n) => arr.slice(0, n);

//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg*fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return (distanceToPump > mpg * fuelLeft) ? false : true;
}

//Returning Strings
function greet(name){
  return `Hello, ${name} how are you doing today?`
}
const greet = name => `Hello, ${name} how are you doing today?`

//Remove First and Last Character
function removeChar(str){
  return str.substring(1, str.length-1);
 }

 function removeChar(str) {
  return str.slice(1, -1);
}

//Do you speak "English"?
function spEng(sentence){
  if(sentence.search(/english/i) === -1){
    return false
  }else {
    return true
  }
}

function spEng(s){
  return /english/i.test(s)
}

//String repeat
function repeatStr (n, s) {
  return s.repeat(n);
}

//Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld)
}

//Abbreviate a Two Word Name
function abbrevName(name){
  let arr = name.split(" ",2)
  let first = arr[0][0].toUpperCase()
  let last = arr[1][0].toUpperCase()
  return first + '.' + last
}

function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//Calculate average
function find_average(array) {
  return array.reduce((a,b) => a+b)/array.length
}

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}

//pick a set of first elements
function first(arr, n) {
  if(n>0){
   return arr.slice(0,n)
  }else if(n == 0){
   return []
  }else{
   return arr.slice(0,1)
  }
 }

//Keep up the hoop
function hoopCount (n) {
  if (n >= 10){
    return "Great, now move on to tricks"
  }else{
    return "Keep at it until you get it"
  }
}

function hoopCount (n) {
  return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}

//Alan Partridge II - Apple Turnover
function apple(x){
  return (Math.pow(x, 2) < 1000) ? "Help yourself to a honeycomb Yorkie for the glovebox." : "It's hotter than the sun!!"
}

//Will there be enough space?
function enough(cap, on, wait) {
  let diff = Math.abs((cap - on)-wait)
  return ((on + wait) < cap) ? 0 : diff
}

function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0)
}

//Drink about
function peopleWithAgeDrink(old) {
  if(old < 14){
    return "drink toddy"
  }else if(old < 18){
    return "drink coke"
  }else if(old < 21){
    return "drink beer"
  }else{
    return "drink whisky"
  }
}

const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"

  //Template Strings
  var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`;
  }

  //The Wide-Mouthed frog! 
  function mouthSize(animal) {
    return animal.toLowerCase() === "alligator" ? "small" : "wide"
  }

  //Remove String Spaces
  function noSpace(x){
    return x.replace(/[" "]/g, "")
  }

  function noSpace(x){
    return x.replace(/\s/g, '');
  }

  //Convert boolean values to strings 'Yes' or 'No'.
  function boolToWord( bool ){
    return bool === true ? "Yes" : "No"
  }
  function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }

  //How many lightsabers do you own?
  function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0
  }