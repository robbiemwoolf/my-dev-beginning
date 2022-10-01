// Data Structures And Algorithms 43

// Solving Problems With Sets, Maps, and Arrays 43.4

// Intersection Of Arrays

    // Suppose you were given two arrays, a and b, and you needed to find all elements that are present in both arrays.

    // One way to approach the problem is as follows: Iterate through one of the arrays. For each element, search for the existence of that element in the second array.

        // result = []
        // for each element e of a do:
            // search for e in b
            // if e is found in b
                // add e to the result array if it isn't already there
        // return result

        //The search for the element in the second array is an O(n) operation which is executed once for each element in the first array. This gives a running time of roughly O(n²).

    // Using a Map, you may be able to improve that running time. Maps are very good at lookups. If you were to put all the elements of one array into a Map, then each lookup for that element will only take O(1) time. A second improvement is to use a Set to track the common elements, because that automatically avoids duplication.

        // initialize a new Map
        // initialize a new Set
        // for each element e of a do:
            // add e to the Map
        
        // for each element e of b do:
            // lookup e in the Map
            // if e is in the Map then
                // add e to the Set
        // convert the Set to an array and return

        // overall, this algorithm has a running time of O(n)

// DO THIS: IMPLEMENT THE ARRAY INTERSECTION ALGORITHM

// Find All Pairs Whose Sum Is Equal To Given Numbers

    // Given an array of distinct numbers, you wish to find all pairs of numbers in the array that sum to a given number.

    // Brute Force 

        // for each element i in the array do:
            // for each element j in the array do:
                // if i is not equal to j then
                    // if i + j is equal to the value
                        // add [i, j] to the output
        // because of the nested for loops the running time is O(n^2)

    // Using a Map

        // inputs: an array of numbers named A
            // a target value named N

        // initialize a new Map named numbers
        // initialize a new Map named solution

        // for each element e in A do:
            // add e to numbers

        // for each element e in A do
            // calculate diff = N - e
            // if diff is not equal to e then 
                // look up diff in numbers
                // if diff is in numbers then
                    // add [e, diff] to solution

        // convert solution to an array and return it

        // This algorithm has a running time of O(n)

// DO THIS: IMPLEMENT THE SUM OF PAIRS ALGORITHM

// Same Letters