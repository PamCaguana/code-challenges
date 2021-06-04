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

  //Remove exclamation marks
  function removeExclamationMarks(s) {
    return s.replace(/!/gi, '')
  }
  function removeExclamationMarks(s) {
    return s.split('!').join('')
  }

  //Grasshopper - Personalized Message
  function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
  }

  //Convert a string to an array
  function stringToArray(string){
    return string.split(' ')
  }

  //Convert a Number to a String!
  function numberToString(num) {
    return String(num)
  }

  function numberToString(num) {
    return num.toString()
  }

  //The Feast of Many Beasts
  function feast(beast, dish) {
    if (beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1)) {
      return true  
    }else{
      return false
    }
  }

  //Reversed Words
  function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }

  //Count of positives / sum of negatives
  function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0){
      return []
    } else{
      let sum = 0
      let count = 0
      input.forEach((x) => x > 0 ? count++ : sum +=x)
      return [count,sum]
    }
  }

  //I love you, a little , a lot, passionately ... not at all
  function howMuchILoveYou(nbPetals) {
    let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    return phrases[(nbPetals - 1) % 6]
  }

  //Find numbers which are divisible by given number
  function divisibleBy(numbers, divisor){
    let arr = []
    for (i = 0; i<numbers.length; i++){
      if (numbers[i] % divisor === 0){
        arr.push(numbers[i])
      }
    }
    return arr
  }
  function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
  }

  //Fake Binary
  function fakeBin(x){
    return x.split('').map(x => x<5 ? '0':'1').join('')
  }

  //Sum Mixed Array
  function sumMix(x){
    return Number(x.reduce((a, b) => Number(a) + Number(b)))
  }

  //Sort and Star
  function twoSort(s) {
    let sorted = s.sort()
    return sorted[0].split('').join('***')
  }

  //JavaScript Array Filter
  function getEvenNumbers(numbersArray){
    function numFilter(n) {
      return n % 2 === 0 ? true : false
    }
      return numbersArray.filter(numFilter)
  }

  //Convert number to reversed array of digits
  function digitize(n) {
    return String(n).split('').reverse().map(Number)
  }

  //Filter out the geese
  function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    let filtered =  birds.filter(el => !geese.includes(el))
    return filtered
  }

  //Swap Values
  function swapValues(arr) {
    return arr.reverse()
}

//A wolf in sheep's clothing
function warnTheSheep(queue) {
  if (queue[queue.length -1] === "wolf"){
    return "Pls go away and stop eating my sheep"
  } else{
    return `Oi! Sheep number ${queue.reverse().indexOf("wolf")}! You are about to be eaten by a wolf!`
  }
}

//Sum of positive
function positiveSum(arr) {
  let total = 0
    for(i=0; i < arr.length; i++){
      if(arr[i] >= 0){
        total +=arr[i]
      }
    }
  return total
  }

  //Find the Difference in Age between Oldest and Youngest Family Members
  function differenceInAges(ages){
    ages.sort((a, b) => a - b)
    let first = ages.shift()
    let last = ages.pop()
    let diff = last - first
    return [first, last, diff]
}

function differenceInAges (ages) {

  let max = Math.max(...ages),
      min = Math.min(...ages)
      diff = max - min
      
  return [min, max, diff]
}

//Sum Arrays
function sum (numbers) {
  return numbers.length === 0 ? 0 : numbers.reduce((a, b) => a + b)
}

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

//You only need one - Beginner
function check(a, x) {
  return a.includes(x)
}

//UEFA EURO 2016
function uefaEuro2016 (teams, scores) {
  if (scores[0] > scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
  }else if(scores[0] < scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  } else{
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }
}

//Sum The Strings
function sumStr(a,b) {
  let sum = Number(a) + Number(b)
  return sum.toString()
}

//Opposites Attract
function lovefunc(flower1, flower2){
  if((flower1%2===0 && flower2%2 !==0) || (flower1%2!==0 && flower2%2===0)){
    return true
  }else{
    return false
  }
}

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

//Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5)
}

//Miles per gallon to kilometers per liter
function converter (mpg) {
  let ratio = 1.609344/4.54609188
  let kmg = mpg * ratio
  return Number(kmg.toFixed(2))
}

//Is this my tail?
function correctTail(body, tail){
  sub = body.substr(body.length-(tail.length))
  
  if (sub === tail) {
    return true
    }
  else {
    return false
    }
  }

  //You Can't Code Under Pressure #1
  function doubleInteger(i) {
    return i*2
  }

  //Find the smallest integer in the array
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort((a, b) => a - b)
      let smallest = args.shift()
      return smallest
    }
  }

  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

  //Area or Perimeter
  const areaOrPerimeter = function(l , w) {
    return l===w ? l * w : 2*l + 2*w
  }

  //Grasshopper - Variable Assignment Debug
  var a = "dev"
  var b = "Lab"

  var name = a + b

  //Function 3 - multiplying two numbers
  function multiply(a, b){
    return a*b
  }

  //Century From Year
  function century(year) {
    return Math.ceil(year/100)
  }

  //Beginner - Lost Without a Map
  function maps(x){
    for(i=0; i < x.length; i++){
      return x.map(n => n*2)
    }
  }

  //Beginner - Reduce but Grow
  function grow(x){
    return x.reduce((a, b) => a * b)
  }

  //Function 1 - hello world
  function greet(){
    return "hello world!"
  }

  //Squash the bugs
  function findLongest(str){
  
    var spl = str.split(" ")
    var longest = 0
    
    for (var i = 0; i < spl.length; i++){
      if (spl[i].length > longest){
        longest = spl[i].length
      }
     }
      return longest
  }

  //Can we divide it?
  function isDivideBy(number, a, b) {
    return number % a === 0  && number % b === 0
  }

  //Find Maximum and Minimum Values of a List
  var min = function(list){
    
    return Math.min(...list)
}

var max = function(list){
    
    return Math.max(...list)
}

//Transportation on vacation
function rentalCarCost(d) {
  if(d >= 7){
    return d*40 - 50
  }else if(d >= 3){
    return d*40 - 20
  }else{
    return d*40
  }
}

//Lario and Muigi Pipe Problem
function pipeFix(numbers){
  let arr = []
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++){
    arr.push(i)
  }return arr
}

//Generate range of integers
function generateRange(min, max, step){
  let range = []
  for(let i=min; i <= max; i += step){
    range.push(i)
  }return range
}

//Price of Mangoes
function mango(quantity, price){
  return (quantity - Math.floor(quantity/3)) * price
}

//Powers of 2
function powersOfTwo(n){
  let arr = []
  for (let i = 0; i <= n; i++){
    arr.push(Math.pow(2,i))
  } return arr
}

//Pre-FizzBuzz Workout #1
function preFizz(n) {
  let arr = []
  for(let i=1; i <= n; i++){
    arr.push(i)
  }return arr
}

//What's the real floor?
function getRealFloor(n) {
  if(n >= 13){
    return n - 2
  }else if(n > 0){
    return n -1
  }else{
    return n
  }
}

//Multiplication table for number
function multiTable(number) {
  return `1 * ${number} = ${1 * number}\n2 * ${number} = ${2 * number}\n3 * ${number} = ${3 * number}\n4 * ${number} = ${4 * number}\n5 * ${number} = ${5 * number}\n6 * ${number} = ${6 * number}\n7 * ${number} = ${7 * number}\n8 * ${number} = ${8 * number}\n9 * ${number} = ${9 * number}\n10 * ${number} = ${10 * number}`}

function multiTable(number) {
  let table = '';
  for(let i = 1; i <= 10; i++){
    table += `${i} * ${number} = ${i*number}\n`
  }
  return table.slice(0, -1)
}

//Find the first non-consecutive number
function firstNonConsecutive (arr) {
  for(let i=0; i<arr.length-1;i++){
    if(arr[i+1] !== arr[i]+1){
      return arr[i+1]
    }
  }return null
}

//101 Dalmatians - squash the bugs, not the dogs!
function howManyDalmatians(number){
  
  let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"]
  
  let respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ? dogs[3] : dogs[2]
  
  return respond
}

//Reversed sequence 
const reverseSeq = n => {
  let arr = []
  for(let i=1; i <= n; i++){
    arr.push(i)
  }
  return arr.reverse()
}

const reverseSeq = n => {
  let arr = []
    for (let i=n; i>0; i--) {
      arr.push(i)
      } return arr
  }

  //Convert a Boolean to a String
  function booleanToString(b){
    return b.toString()
  }

  //Beginner Series #4 Cockroach
  function cockroachSpeed(s) {
    let cmps = 27.7778
    return Math.floor(s*cmps)
  }

  const cockroachSpeed = s => Math.floor(s / 0.036)

  //Return Negative
  function makeNegative(num) {
    return num >= 0 ? num * -1 : num
  }

  //Grasshopper - Terminal game move function
  function move (position, roll) {
    return position + roll*2
  }

  //Reversed Strings
  function solution(str){
    return str.split('').reverse().join('')
  }

  //DNA to RNA Conversion
  function DNAtoRNA(dna) {
    let arr = dna.split('')
    for(let i=0; i<arr.length;i++){
      if(arr[i]==="T"){
        arr[i] = "U"
      }
    }return arr.join('')
  }

  //Is he gonna survive?
  function hero(bullets, dragons){
    if(dragons * 2 <= bullets){
      return true
    }else{
      return false
    }
  }

  function hero(bullets, dragons){
    return bullets >= dragons * 2
  }

  //Super Duper Easy
  function problem(x){
    return x===String(x) ? "Error" : (x*50) + 6
  }
  //Are arrow functions odd?
  function odds(values){
    return values.filter(x => x % 2)
  }
  //Grasshopper - Basic Function Fixer
  function addFive(num) {
    var total = num + 5
    return total
  }
  //USD => CNY
  function usdcny(usd) {
    let yuan = usd * 6.75
    return `${yuan.toFixed(2)} Chinese Yuan`
  }

  //Odd or Even?
  function oddOrEven(array) {
    if(array.length === 0){
      return "even"
    }else if(array.reduce((a,b) => a+b) % 2 === 0){
       return "even"
     }else{
       return "odd"
     }
  }

  function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }

  //Small enough? - Beginner
  function smallEnough(a, limit){
    return !a.some(x => x > limit)
  }

  function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }

  //Find the next perfect square!
  function findNextSquare(sq) {
    let root = Math.sqrt(sq)
    if(root === Math.floor(root)){
      return Math.pow(root + 1, 2)
    }else{
    return -1;
    }
  }

  //Alphabet symmetry
  function solve(arr){  
    return arr.map(function(input){
      let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
      let arr = input.toLowerCase().split('')
      let sum = 0
      arr.forEach(function(val, i) {
          if(val === alphabet[i])
                  sum++
       })
      return sum
    })
  }

  //Looking for a benefactor
  function newAvg(arr, newavg) {
    let avg = (arr.reduce((a, b) => a+b, 0)/ arr.length)
    if(arr.length === 0){
      return newavg
    }else if(avg < newavg){
      return Math.ceil(((newavg - avg) * arr.length) + newavg)
    }else{
      return ERROR
    }
  }

  //Basic Math (Add or Subtract)
  function calculate(str) {
    let total = str.replace(/plus/g, '+').replace(/minus/g, '-')
    return String(eval(total))
  }

  //Highest and Lowest
  function highAndLow(numbers){
    let num = numbers.split(' ').sort((a,b) => a - b)
    let highAndLow = [num[num.length-1], num[0]]
    return highAndLow.join(' ')
  }

  function highAndLow(numbers){
    numbers = numbers.split(' ')
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
  }

  //Factorial
  function factorial(n){
    let total = 1
    for (let i= 1; i <= n; i++){
      total *= i
    }
    return total
  }

  function factorial(n){
    return n < 2 ? 1 : n * factorial(n - 1)
  }

  //Sort Numbers
  function solution(nums){
    if (nums === null || nums.length === 0){
      return []
    }else{
      return nums.sort((a, b) => a - b)
    }
  }

  //Disemvowel Trolls
  function disemvowel(str) {
    return str.replace(/a|e|i|o|u/gi, '')
  }

  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
  }

  //Substituting Variables Into Strings: Padded Numbers
  function solution(value){
    return `Value is ${("00000"+value).slice(-5)}`
  }

  //Growth of a Population
  function nbYear(p0, percent, aug, p) {
    let i = 0
    while (true){
      if (p0 >= p){
        return i
      }
      p0 = p0 * (1 + percent/100) + aug
      i++
    }
}

//Binary Addition
function addBinary(a,b) {
  let sum = a + b
  return sum.toString(2)
}

//Sort arrays - 1
// input: names - unsorted array
// output: sorted array
sortme = function( names ){
  return names.sort()
}

//Isograms
function isIsogram(str){
  str = str.toLowerCase()
  for(let i = 0; i < str.length; i++){
    for(let j = i + 1; j < str.length; j++){
      if(str[i]===str[j]){
        return false
      }
    }
  }
  return true
}

//Switcheroo
function switcheroo(x){
  return x.replace(/[ab]/g, x => x == 'a' ? 'b': 'a')
}