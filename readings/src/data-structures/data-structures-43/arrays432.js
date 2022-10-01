// Data Structures and Algorithms 43

// Arrays 43.2

// terms:

    // data structure: a way to organize data in a computer's memory, facilitating efficient access to and modification of the data

// Understanding Arrays

    // Because the elements of the array can be accessed directly by their index, it is said that an array is a random-access structure.

    // If the index of an element is known, then accessing that element takes O(1) time.

// Common Methods

    // The push() method

        // The push() method of the array adds one or more elements to the end of the array. 
        
        // Because you have direct access to the end of the array in constant time, and you are simply inserting a new element without touching the other elements, this operation can be done in O(1) time.

    // The pop() method

        // Similarly, the pop() method removes an element from the end of the array without touching the other elements of the array.
        
        // For this reason, it can be done in O(1) time.

    // The unshift() method

        // The unshift() method adds one or more elements to the beginning of an array

        // Unlike the push() method, this does affect every other element in the array. Remember that the first element of the array is found in a specific memory location, and all other elements of the array are found in the locations that come immediately after that first one.

        // To make room for this new element at the beginning of the array, every other element in the array needs to be moved. Moving each element takes O(n) time.

    // The shift() method

        // The shift() method removes the first element of the array. And similarly to the unshift(), it needs to move each element over by one. This once again results in a running time of O(n).

    // The splice() method

        // The splice() method is used to delete or insert elements at arbitrary positions in an array.

        // The worst-case running time occurs when the element removed is the first element of the array or when an element is inserted in the first position in the array. This running time is O(n).

    // The map(), filter(), and reduce() methods

        // In each case, these methods perform some operation for each element of the array. Despite the conciseness of these methods, the running time remains O(n).

    // The Efficiency Of Array Methods

        // Arrays are most efficient when accessing the elements in random order or modifying only at the end of the array. Any modification to the middle of the array results in O(n) running time.

