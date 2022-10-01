// Data Structures And Algorithms 43

// Sets And Maps 43.3

    // overview: A Set is a collection of unique values. A Map is a collection of key-value pairs that remembers the insertion order of the keys. These two data structures provide many advantages when solving various algorithmic problems.

// Understanding Sets

    // A Set is a collection of UNIQUE values. Whereas, an array an array is a collection of values, in which a value can appear more than once in the collection.

    // To create a new empty Set, invoke the Set constructor

    const numbers = new Set(); // Empty Set []

    // To add some values to the Set, use the add() method

    numbers.add(3) // Set contains [3]
    numbers.add(5) // Set contains [3, 7]
    numbers.add(5) // Set contains[3, 7, 5]

    // If you try to add duplicate values, the Set will remain unchanged.

    numbers.add(3) // Set still contains [3, 7, 5]

    // To remove an item from the Set, use the delete() method

    numbers.delete(5) // Set contains [3, 7]

// Iterating the Set

    // If you need to access to each item of a Set use the values() method.

    // Find the sum of all numbers in the Set

    let sum = 0
    for (let num of numbers.values()) {
        sum = sum + num
    }

    console.log(sum) // 3 + 7 = 10

    // Alternatively, you can use the forEach() method on a Set.

    let sum2 = 0
    numbers.forEach((e) => (sum2 = sum2 + e))
    
    console.log(sum) // 3 + 7 = 10

// Relationship To Arrays

    // Sometimes, while working with a collection of values, you need the methods of an array. And at other times, you need the properties of the Set. It is easy to convert an array into a Set and a Set into an array.

    // creating a Set from an array
    const studentGrades = ["B", "F", "A", "A", "D", "B", "A", "F"]
    const uniqueGrades = new Set(studentGrades) // Duplicates will be removed
    for (let grade of uniqueGrades.values()) {
        console.log(grade) // 'B', 'F', 'A', 'D'
    }

    // if you want to create an array from the Set, use the spread operator
    const distinctGrades = [...uniqueGrades] // Array contains ['B', 'F', 'A', 'D']

// if you need to check if a value exists in the Set, you can use the has() method

numbers.has(3) // true
numbers.has(8) // false
uniqueGrades.has("D") // true

// Common Uses Of Sets

    // One common use of Sets is to remove duplicates from a collection of values

    // How many unique characters are in the term 'Data Structures'?
        const word = 'Data Structures'

        // create a Set, lowercase the word
        const set = new Set(word.toLowerCase())

        // size of the Set is the number of unique characters
        console.log(set.size) // 8

// The Efficiency of Sets

    add() // O(1)
    .delete() // O(1)
    forEach() // O(n)
    has() // O(1)

// Understanding Maps

    // A Map is a collection of key-value pairs that remembers the insertion order of the keys

    // The keys in a Map are unique.
        // Maps are used when you need a very fast lookup table.

    // You may wish to create a table of users and their addresses. To create a new empty Map, invoke the constructor of Map

    const addressBook = new Map() // An empty Map

    // To add an entry to the Map, use the set() method. The set() method takes two arguments: a key and a value.

    addressBook.set('sherlock', {
        email: 'holmes@scotlandyard.com',
        address: '221B Baker Street, London',
    })

    // Attempting to add a second entry with the same key results in replacing the original value. The keys are never duplicated.

// Maps Are Similar To Objects

    // But there are a few significant differences!

        // With a Map, there are no keys unless you explicitly added to the Map yourself. An object may inherit keys and cause some surprising side effects.

        // The keys of a Map may be any type of value, including functions and objects. The keys in an object may only be strings and Symbol objects.

        // A Map remembers the insertion order of the keys. When iterating the keys, they are always in order of insertion.

        // You can get the number of entries in a Map by its size property:
            console.log(addressBook.size) // 1

    // Retrieving A Value

        // To retrieve a value from the Map, use the get() method with the specific key.

        const holmes = addressBook.get('sherlock') // gets { email: 'holmes@scotlandyard.com', address: '221B Baker Street, London'}

    // Deleting A Value

        // To completely remove an entry from the Map, use the delete() method

        addressBook.delete('sherlock')

        console.log(addressBook.size) // 0

// Iterating The Map

    // There are several methods for iterating a Map. You may iterate by keys, values, or entries, using the built-in keys(), values(), or entries() methods, respectively.

    // To print the keys of the Map
        for (let key of addressBook.keys()) {
            console.log(key)
        }

    // To print the values in the Map
        for (let value of addressBook.values()) {
            console.log(value)
        }

    // An entry is a single key-value pair in a Map.

    // Consider the following Map and its entries:

        const months = new Map()
        months.set(0, "January")
        months.set(1, "February")
        months.set(2, "March")
        months.set(3, "April")
        months.set(4, "May")
        months.set(5, "June")
        months.set(6, "July")
        months.set(7, "August")
        months.set(8, "September")
        months.set(9, "October")
        months.set(10, "November")
        months.set(11, "December")

        // Using the entries() method, you can iterate over the 12 key-value pairs in that Map. Each entry is given array with two values.

        for (let [key, value] of months.entries()) {
            console.log(`${key + 1} : ${value}`) // print 1: January etc
        }

        // Additionally, Maps have a built-in forEach() method that facilitates a similar iteration.

        months.forEach((value, key) => console.log(`${key + 1} : ${value}`)) // print 1: January etc

// Relationship To Arrays

    const days = [
        [0, "Sunday"],
        [1, "Monday"],
        [2, "Tuesday"],
        [3, "Wednesday"],
        [4, "Thursday"],
        [5, "Friday"],
        [6, "Saturday"],
    ]

    // An array of arrays can be used to create a Map.
    const dayMap = new Map(days)

    // Conversely, you can use the spread operator to create an array of arrays from a Map.
    const dayArray = [...dayMap]

// The Efficiency of Maps

    // Maps are very efficient at inserting and looking up values by keys.
    
    // set(), delete(), get(), has() is O(1)