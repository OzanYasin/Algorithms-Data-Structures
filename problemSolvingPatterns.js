// --------- Problem Solving Patterns ---------

// How Do You Improve?

// 1- Devise (plan) a plan for solving problems
// 2- Master common problem solving patterns

// !! There are some common patterns that we'll discuss that do apply to multiple problems. That does not mean that you cover every possible scenario.

// Some Patterns:

// - Frequency Counter
// - Multiple Pointers
// - Sliding Window
// - Divide and Conquer
// - Dynamic Programming
// - Greedy Algorithms
// - Backtracking

// ------ FREQUENCY COUNTING ------

// This patterns uses objects or sets to collect values/frequencies of values.

// This can often avoid the need for nested loops or O(N^2) operations with arrays/strings.

// ==========================================================================
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
// ==========================================================================

// A NAIVE SOLUTON

function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    // console.log(arr2);
    arr2.splice(correctIndex, 1); // In the case of match (indexOf arr1 ** 2 === arr2) it splice (removes from array) then move on new index until it gives false. If there is no falsy return, it returns as true (line 43).
  }
  return true; // It is Naive approach, because it's O(N^2). It's quadratic time. We always want to try and avoid nested loops whenever possible.
}

// ----- REFACTORED SOLUTION -----

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // It's going to count the frequency of individual values in the arrays.
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // It will end up with two objects at the end.
  // Two loops is vastly better than two nested loops.
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true; // Time complexity is O(n).
  // We had two arrays, we break them down into objects that sort of classify what's in those arrays and then we compare those objects. This allows us to improve our code signifanctly.
}

// ------ Frequecy Counter: Anagram Challange ------
