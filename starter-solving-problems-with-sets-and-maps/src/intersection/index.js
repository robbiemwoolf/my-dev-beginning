function intersection(a, b) {
    const map = new Map() // create a Map
    const results = new Set() // create a Set 
    for (let e of a) { // add each element of a to the Map
        map.set(e, e)
    }
    for (let e of b) { // for each element of b 
        if (map.has(e)) { // check to see if it exists in the map
            results.add(e) // if it existed in b and in the map add it to the results Set
        }
    }
    return Array.from(results) // create an array from the results Set
}

module.exports = intersection