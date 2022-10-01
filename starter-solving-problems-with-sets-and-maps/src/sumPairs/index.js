/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
 function sumPairs(A, N) {
    const numbers = new Map() // create numbers Map
    const solution = new Map() // create solution Map
    for (let e of A) { // for each element of A:
      numbers.set(e, e) // store numbers as key and value pairs in numbers Map
    }
    for (let e of A) { // for each element of A:
      let diff = N - e // calculate difference in N and element
      if (diff !== e) { // if difference doesn't equal element
        if (numbers.has(diff)) { // loop up difference in numbers
          solution.set(Math.min(e, diff), Math.max(e, diff)) // set key and value pairs as smaller and higher number respectively
        }
      }
    }
    return Array.from(solution) // store solution in array
  }
  
  module.exports = sumPairs