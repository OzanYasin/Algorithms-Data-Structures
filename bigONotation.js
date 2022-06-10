// --------- Big O Notation ---------
// What is the idea here?

// Big O is a system that is a way of generalizing code and talking about it and comparing code and its performance to other pieces of code.

// !! Performance Matters !!

// * It's important to have a precise vocabulary to talk about how our code performs
// * Useful for discussing trade-offs  between different approaches
// * When your code slows down or crashes, identifying parts of the code that are infeccient can help us find pain points in our application
// Less important: It comes uo in interviews!

// ---------------------------------

// An Example:

// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number 'n'.

// First Solution
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Second Solution
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// Which one is faster?
// To understand this, the simplest way would be to use something like built-in timing functions.

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`); // Second algorithm is faster

// What does better mean?
// * Faster
// * Less memory-intensive
// * More readable

// The Problem With Time

// * Different machines will record different times
// * The same machine will record different times!
// * For fast algorithms, speed measurements may not be precise enough

// ------- Counting Opertations -------

// If not time, then what?

// Rather than counting seconds, which are so variable...
// Let@s count the number of simple operations the computer has to perform!

function addUpTo(n) {
  return (n * (n + 1)) / 2; // It has 1 multiplication (*), 1 addition (+), and 1 division (/)
}

function addition(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total; // It has more than 3 operations. This function has loop, that means (loop cycle * operations).
}

// Anyway, counting is hard!

// Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2

// But regardless of the exact number, the number of operations grows roughly proportionally with n.

// This is what we are going to see a lo with Big O, we're focused on the big picture.

// Performance Tracker:
// https://rithmschool.github.io/function-timer-demo/

// ------- Official Intro to Big O -------

// Big O Notation is a way to formalize fuzzy counting.

// It allows us to talk formally about how the runtime of an algorithm grows as the input grow.

// We won't care about the details, onlu the trends.

// We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.

// * f(n) could be linear (f(n) = n)
// * f(n) could be quadratic (f(n) = n^2)
// * f(n) could be constant (f(n) = 1)
// * f(n) could be something entirely different!

// For example:

function addUpTo(n) {
  return (n * (n + 1)) / 2; // Always 3 operations. It's constant. O(1)
}

// ----------

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total; // Number of operations is (eventually) bounded by a multiple of n. O(n)
}

// ----------

function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!"); // We care about big picture. It's also Big O(n), even if there is two for loop.
}

// ---------

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 0; j++) {
      console.log(i, j); // That function has nested for loop. If we see the pic picture, it's growing quadratic. Which means, Big O(n^2).
    }
  }
}

// ------- Simplyfying Big O Expressions -------

// When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.

// These rules of thumb are consequences of the definition of big O notation.

// !! Contants Don't Matter !!

// There is no O(2n). Instead of that, should use O(n).
// Also, there is no O(500). It means O(1).
// O(13n^2) means O(n^2). It's similar.

// !! Smaller Terms Don't Matter

// O(n + 10) -> O(n);
// O(1000n + 50) -> O(n);
// O(n^2

// Analyzing complexity with big O can get complicated.
// There are several rules of thumb that can help.
// These rules won't ALWAYS work, but are a helpful starting point.

// ## Big O Shorthands ##

// 1- Arithmetic operations are constant.
// 2- Variable assignment is constant.
// 3- Accessing elements in an array (by index) or object (by key) is constant.
// 4- In a loop, the complexity is the lenth of the loop times the complexity of whatever happens inside of the loop

// ------- Space Complexity -------

// So far, we've been focusing on time complexity: how can we analyze the runtime of an algorithm as the size of the inputs increases.

// We can also use big O notation to analuze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm.

// ** What About the Ipnuts? **

// Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.

// Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.

// Space Complexity in JS
// Rules of Thumb:

// * Most primitives (booleans, numbers, undefined, null) are constant space
// * Strings require O(n) space (where n is the string length)
// * Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

// An Example:

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total; // It does not have an impact on the space that is taken up because we only have two variables they exist no matter what. We are adding to the total variable, but we are not making a new variable. So that really just means we have constant space of one space. Space complexity is O(1).
}

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr; // It's make new array every time by using push method. So, space complexity is O(n).
}

// ------- Logs -------
// Logarithms: Who Cares?

// * Certain searching algorithms have logarithmic time complexity.
// * Efficient sorting algorithms involve logarithms.
// * Recurision sometimes involves logarithmic psace complexity.

// -------- Section Recap --------

// * To analyze the performance of an algorithm, we use Big O Notation
// * Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
// *  Big O Notation does not care about precision, only about general trends (linear? quadratic? constant?)
// * The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
// * Big O Notation is everywhere, so get lots of practice!
