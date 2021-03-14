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