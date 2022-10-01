// Introduction To Data Structures And Algorithms 41

// An Efficiency Example 41.4

    // overview: By the end of this lesson, you will be able to describe the efficiency of an algorithm in terms of its running time as a function of the size of input.

// In this lesson, we will define a problem and consider some possible solutions.

// The Problem

    // Given an integer n, find the sum of all integers from 1 to n inclusively.

    // For example, if n = 4, the solution involves the sum 1 + 2 + 3 + 4 = 10.

// The First Solution

    // To solve this problem, you could use a loop to count every integer from 1 to n and sum as you go. At the end of the loop, you will have the required sum.

    function sumIntegers(n) {
        let sum = 0
        for (let i = 1; i <= n; i++) {
            sum = sum + i
        }
        return sum
    }

    // Now we ask: how long does it take for this program to run?

// Measuring The Performance

    // The Node environment has a built-in function process.hrtime.bigint(), which gives you the current system time in nanosecond percision.

    const NUMBER_OF_REPETITIONS = 100 // UPDATE: number of times to repeat the test
    const N = 100 // the input to the function

    let sumOfRunningTime = 0n // UPDATE

    for (let k = 1; k <= NUMBER_OF_REPETITIONS; k++) { // UPDATE: wrap previous code in a loop
    const start = process.hrtime.bigint() // note the start time

    const answer = sumIntegers(N) // call the function

    const end = process.hrtime.bigint() // note the end time

    sumOfRunningTime += end - start // UPDATE
    }

    const averageTime = sumOfRunningTime / BigInt(NUMBER_OF_REPETITIONS) // UPDATE //TODO: question: why is it BigInt() and not bigint(), is it not case sensitive?

    console.log(`Solution One: Summing ${N} numbers took ${averageTime} nanoseconds`) // UPDATE: now utilizes averageTime variable

    // If we run this code multiple times, we will see that we get a different time. This is because of several factors in the environment, such as what other processes may be running on the computer, how fast the CPU actually is, and how much memory may be available.

    // Getting an Average Time

        // We can update the code to run the function 10 times and find the average time.

// As The Input Grows

    // Repeat the above experiment with larger numbers

    // What can you say about the way that the length of time that it takes to run the function changes as the size of the input changes? There is a linear growth.

// Linear Growth

    // You may have noticed that as the size of the input increases, the running time of the function increases correspondingly. Given this observation, you could extrapolate and guess the running time for even larger input sizes.

    // Although it is useful to know the running time for a specific input size, it is actually more useful to have a formula that tells you how that running time changes as the input size changes.

    // You can say that the function that was written has a linear growth rate. That is, the length of the running time changes proportionally to the size of the input.

// The Second Solution

    // Is it possible to develop an algorithm that performs better than this first solution? And what exactly is meant by better here?

        // In this case, better would mean a growth rate that is slower than the linear function.

    // this formula was devolped by mathematician Carl Friedrich Gauss
    function sumIntegers2(n) {
        return (n * (n + 1)) / 2
    }

    // check run time
    let sumOfRunningTime2 = 0n

    for (let k = 1; k <= NUMBER_OF_REPETITIONS; k++) {
    const start = process.hrtime.bigint()

    const answer = sumIntegers2(N)

    const end = process.hrtime.bigint()

    sumOfRunningTime2 += end - start
    }

    const averageTime2 = sumOfRunningTime2 / BigInt(NUMBER_OF_REPETITIONS)

    console.log(`Solution Two: Summing ${N} numbers took ${averageTime2} nanoseconds`)

    // What do you notice about the running time for this function as compared to the previous program? You should have noticed that the running time remains roughly the same, no matter how large n is.

// Running Time Of The Second Solution

    // No matter the value of n, you simply perform one multiplication operation, one addition operation, and one division operation to calculate the result. The same amount of work is done regardless of the size of n.

    // When the running time of a function doesn't change with changes to the input size, you can say that it has a constant growth rate.

// Comparing The Growth Rates

    // Now that it is known that the first algorithm has a linear growth rate and the second has a constant growth rate, which would you say is the more efficient algorithm? 

    // A constant growth rate is more efficient than a linear growth rate.

// Problems With This Approach

    // First, you need a working program in order to run such an experiment. What if you had an idea for an algorithm and wanted to analyze the algorithm before you implemented it?

    // Second, the program depends on several factors, such as the programming language and even the skill of the programmer.

    // Third, the computer used for this experiment had its own configuration.

    // Fourth, this was a fairly simple algorithm. It took a few nanoseconds to run. It was easy to run it many times to determine the growth rate. What if the algorithm was more complex and took an hour to run? It wouldn't be practical to run the function ten times over in that case.

    // And fifth, how would you compare the running time of this algorithm to the running time of other algorithms?

// Is There A Better Way

    // In the next lesson, we will learn to analyze the running time fo the algorithm independently of the programming language that is written in or the computer hardware that it runs on.