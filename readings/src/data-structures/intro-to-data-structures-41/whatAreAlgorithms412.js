// Data Structures And Algorithms 41

    // overview: This module begins by defining algorithms and giving a few examples of algorithms that you may already be familiar with in everyday life. Next, you'll explore the role that algorithms play in problem-solving in the modern world. Then, you'll look at what it means to evaluate the efficiency of an algorithm, and you'll learn about common approaches and notations that are widely used in the industry. And finally, you'll implement a few algorithms in JavaScript and evaluate their efficiency.

// What Are Algorithms? 41.2

    // overview: Whether you are aware of it or not, you have been using algorithms your whole life. For example, in elementary school, you learned a series of steps for multiplying two numbers. You learned that if you follow those steps precisely, you will always get the correct result. That series of steps is an algorithm, and that's what you'll focus on in this lesson.

// terms:

    // time complexity of an algorithm: the number of instructions (or steps) needed to execute the algorithm

    // space complexity of an algorithm: the amount of memory used by the algorithm 

    // algorithm: a well-defined sequence of steps for solving a computational problem

// What is an algorithm?

    // An algorithm is defined as a well-defined sequence of steps for solving a computational problem. This simple definition can be expanded upon into a few concepts.

        // A computational problem is a problem that a computer might be able to solve.

        // Problems must be well specified.

            // The statement of the problem must specify the inputs, outputs, and the relationship between the inputs and outputs.

        // The steps must be unambiguous and complete.

            // Unambiguous means that the instruction for a particular step can only mean one thing.

            // Complete means that no steps are left out.

// The Linear Search Algorithm

    // Given a sequence of n numbers and a number x as input, output the index of the first occurrence of the number x in the sequence. Output -1 if the number x isn't in the sequence.

    // An example of an algorithm that solves the search problem defined above:
    function linearSearch(sequence, x) {
        for (let i=0; i < sequence.length; i++) {
            if (sequence[i] === x) {
                return i
            }
        }
        return -1
    }

    // This algorithm is complete and unambiguous. The statement let i=0 can only mean one thing: declare a variable named i and initialize it to the value 0. Similarly, each statement has a precise meaning.

// A Note On Notation

    // In the study of algorithms, the programming language does not matter. An algorithm may be implemented in any programming language. What is relevant is what steps are needed to complete the task.

    // You can write an algorithm using pseudocode. The exact syntax of pseudocode is not important as long as it is unambiguous and clear.

    // In pseudocode the search algorithm above may look like this:

        // function linearSearch
            // input: sequence - an unsorted array of numbers
            // input: x - a number

            // initialize a variable i to 0
            // iterate while i is less than the length of sequence
                // if the ith element of sequence is equal to x, then return i

            // if no element of sequence matches x, then return -1 

    // It also can be depicted as a flow chart, but this takes more time create when trying to solve a problem.

    // In this module, JavaScript will be used to specify the algorithms. This is because of the following reasons:

        // You are already familiar with the syntax.

        // Programming code is by definition unambiguous.

        // Having the ability to directly run the code may help you to understand the algorithm.

// Properites Of Algorithms

    // Algorithm design and analysis involves a disciplined approach to studying the properties of algorithms. It is by comparing these properties that can know which alogrithm may be most suitable for use in a particular scenario.

    // The properites of an algorithm are as follows:

        // correctness: The ouput produced by the algorithm is correct for all valid inputs.

        // efficiency: The algorithm minimizes the use of the available computing resources.

        // determinism: The result of each step of the algorithm is determined only by the inputs and the results of the preceding steps.

        // finiteness: The algorithm must stop. It may take many steps, but eventually, it must terminate.

        // generality: The algorithm applies to a set of inputs.

    // Note: Proving that an algorithm is correct for all valid inputs requires some rigorous mathematics that is beyond the scope of this module. Rather, you will take a more informal approach to determining the correctness of an algorithm.

// Efficiency

    // Providing that an algorithm satisfies all the other properties, it is efficiency that differentiates various algorithms.

    // An algorithm may be correct, but if it requires more RAM than is reasonably available, then it is useless. Similarly, if the algorithm requires more processing time than is available, it is useless.

    // The number of instructions (or steps) needed to execute an algorithm is called the time complexity of the algorithm. 

    // The amount of memory used by the algorithm is called the space complexity.

    // Algorithms are usually discussed in terms of their time and space complexity. Time is more of a concern because it is easier and cheaper to obtain space.

    function largestNumber() {
        let array = [1, 2, 3]
        let sortedArray = array.sort((a,b) => b-a)
        console.log(sortedArray)
    }