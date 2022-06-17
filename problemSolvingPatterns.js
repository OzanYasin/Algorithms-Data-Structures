// --------- Problem Solving Patterns ---------
// https://cs.slides.com/colt_steele/problem-solving-patterns#/28/0/1

// How Do You Improve?

// 1- Devise (plan) a plan for solving problems
// 2- *** Master common problem solving patterns ***

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

// ----- NAIVE SOLUTON -----

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

// -------- ANAGRAMS --------

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as 'cinema', formed from 'iceman'.

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const obj = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }
  console.log(obj);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram("anagrams", "nagaramm");

// ------ Multiple Pointers Pattern ------

// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

// Very efficient for solving problems with minimal space complexity as well.

// ============================================================================
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
// ============================================================================

// ----- NAIVE SOLUTION -----

function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  } // Time Complexity -> O(n^2)
} // Space Complexity -> O(1)

// ----- REFACTORED SOLUTION -----

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < rigth) {
    // It has to be 'left < rigth' due to failsafe scenario.
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  } // Time Complexity -> O(n)
} // Space Complexity -> O(1)

// ========================== countUniqueValues ===============================
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// ============================================================================

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    // console.log(i, j);
  }
  return i + 1;
}

countUniqueValues([1, 2, 2, 5, 7, 7, 99]); // returns 5

// ------ SLIDING WINDOW PATTERN ------

// This pattern involves creating a window which can either be an array or number from one position to another

// Depending on a certain condition, the window either increases or closes (and a new window is created)

// Very useful for keeping track of a subset of data in an array/string etc.

// ==================================================================================
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
// ==================================================================================

// ----- NAIVE SOLUTON -----

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// ----- REFACTORED SOLUTION -----

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum = arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// ------ Divide and Conquer Pattern ------

// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

// This pattern can tremendously decrease time complexity.

// =================================================================================
// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.
// =================================================================================

// ----- NAIVE SOLUTON -----

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1; // It's Linear Search. Time Complexity O(N). Much slower than binary search.
}

// ----- REFACTORED SOLUTION -----

function search(arr, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1; // It's Binary Search. Time Complexity O(N).
}
// END
