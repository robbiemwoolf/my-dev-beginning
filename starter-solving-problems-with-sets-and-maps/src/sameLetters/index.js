/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
 function sameLetters(words) {
    const results = new Map() // create results Map
    words.forEach((word) => { // for each word in the array: 
      let distinctLetters = Array.from(new Set(word.toLowerCase().split(""))) // create array from a Set to remove duplicates 
        .sort() // sort alphabetically
        .join("") // join letters
      if (results.has(distinctLetters)) { // check if sorted strings is a key in the results Map
        results.get(distinctLetters).push(word) // if it is add the word to that key's array 
      } else {
        results.set(distinctLetters, [word]) // add sorted string as a new key with the value(an array with the word)
      }
    })
    return results // return Map
  }

module.exports = sameLetters