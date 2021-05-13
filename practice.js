//Please research the following methods:
//map
//reduce
//filter
//forEach
//sort
//slice
//pop
//shift
//push
//unshift
//includes
//indexOf
//every

//Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!

//Questions to practice:

// One:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
[1, 2, 3, 4].reduce((a, b) => a * b)
//OR
function multArray(arr){
    return arr.reduce((a,b) => a * b)
}

// Two:
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        
    return [min, max, max-min]
}

function differenceInAges(ages){
    ages.sort((a, b) => a - b)
    let first = ages.shift()
    let last = ages.pop()
    let diff = last - first
    return [first, last, diff]
}


// Three:
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6
function addSomeNums(arr){
    arr.sort((a, b) => a - b)
    let max = arr.pop()
    let min = arr.shift()
    let total = arr.reduce((a, b) => a + b)
    console.log(total)
}

// 5 codewars tagged as arrays (minimum)
return "Done"