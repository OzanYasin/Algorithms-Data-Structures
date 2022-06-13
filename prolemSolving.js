// -------- Problem Solving --------
// https://cs.slides.com/colt_steele/problem-solving-patterns#/28/0/1

// Objectives:

// - Define what an algorithm is
// - Devise (planning) a plan to solve algorithms
// - Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

// What is an Algorithm?

// A process or set of steps to accomplish a certain task.
// Almost everything that you do in programming inlolves some kind of algorithm.
// It's the foundation for being a successful problem solving and developer
// Also... INTERVIEWS, INTERVIEWS, and INTERVIEWS!

// How do you Improve?

// 1- Devise (design) a plan for solving problems
// 2- Master common problem solving patterns.

// ------- First Section: Problem Solving Strategies -------

// A simple, foolproof, magical, miraculous, fail-safe approach! (*NOT REALLY)

// * Understand the Problem
// * Explore Concrete (somut) Examples
// * Break It Down
// * Solve/Simplify
// * Look Back and Refactor

// -------- Step 1: Understand The Problem --------

// 1- Can I restate the problem in my own words?
// 2- What are the inputs that go into the problem?
// 3- What are the outputs that should come from the solution to the problem?
// 4- Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okey; it's still worth considering the question at this early stage.)
// 5- How should I label the important pieces of data that are a part of the problem?

// ===============================================================
// Write a function which takes two numbers and returns their sum.
// ===============================================================

// 1- Can I restate the problem in my own words?
"Implement additon";

// 2- What are the inputs that go into the problem?
// int? floats? what about string for large numbers?

// 3- What are the outputs that should come from the solution to the problem?
// - int? float? string?

// 4- Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okey; it's still worth considering the question at this early stage.)
// Generally answer is yes, but in interviews they do not ask that simple question. So, lets understant forth and fifth question with more complicated examples.

// 5- How should I label the important pieces of data that are a part of the problem?
// -

// -------- Step 2: Explore Concrete Examples --------

// Coming up with examples can help you understand the problem better.
// Examples also prove sanity checks that your eventual solution works how it should.
// User Stories & Unit Tests! --> Those tests are used all the time to help lay out how something should work for a smaller feature.

// EXPLORE EXAMPLE

// - Start with Simple Examples
// - Progress to More Complex Examples
// - Explore Examples with Empty Inputs
// - Explore Examples with Invalid Inputs

// ====================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ====================================================================

// - Start with Simple Examples
charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}

// - Progress to More Complex Examples
charCount("my phone number is 182138"); // Do we want to count for spaces, numbers, or dollar signs..?
charCount("Hello hi"); // Do we store uppercase and lowercase 'h'? Do we ignore casing?

// - Explore Examples with Empty Inputs
charCount(""); // What do we want to return?

// - Explore Examples with Invalid Inputs
charCount(""); // Should search for edge cases to understand how it should work.

// -------- Step 3: Break It Down --------

// Explicitly write out the steps you need to take.

// This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

// =========================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// =========================================================================

// Only need to care about alphanumeric characters lowercase as well.

function charCount(str) {
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
}

function charCount(str) {
  // make object to return at end
  // loop over string
  //// if the char is a number/letter AND is a key in object, add one to count
  //// if the char is a number/letter AND not in object, add it to object and set value to 1
  ////if character is something else (space, period, etc.) don't do anything
  // return object at end
}

// -------- Step 4: Solve or Simplify --------

// If you can't solve the problem... Solve a simpler problem!
// What it really means is trying to ignore the part that is giving you a really hard time in order to focus on everything else.
// So, instead of getting stuck on one difficult part of a problem and making zero progress at all, it's much better even if there's some part that you're going to get stuck on, it's much better to just start writing code to do the stuff you know how to do, all the while keeping in mind that you do need to incorporate that harder part back in.
// Secondly, it's pretty common that in simplifying a problem, you'll gain insight into the actual solution, into the harder part of the problem and something will click into place.

// !! Simplify !!

// - Find the core difficulty in what you're trying to do
// - Temporarily ignore that difficulty
// - Write a simplified solution
// - Then incorporate that difficulty back in

// =========================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// =========================================================================

// * Same example before

function charCount(str) {
  // make an object to return at end
  let result = {};
  // loop over string
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    }
  }
  // return object at end
  return result;
}

// -------- Step 5: Look Back and Refactor --------

// Congrats on solving it, but you're not done!

// !! Refactoring Questions !!

// - Can you check the result?
// - Can you derive the result differently?
// - Can you understand it a glance?
// - Can you use the result or method for some other problem?
// - Can you improve the performance of your solution?
// - Can you think of other ways to refactor?
// - How have other people solved this problem?

// ----- First Refactoring -----

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      // If it's truthy, add 1 to obj (meaning if there's a value in there already), if there's nothing in there, we're going to set it to 1
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// ----- Second Refactoring -----

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumberic(char)) {
      // If it's truthy, add 1 to obj (meaning if there's a value in there already), if there's nothing in there, we're going to set it to 1
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumberic(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha(A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

// ----- Third Refactoring -----

// ------- Understand & Interview Strategies -------

// - Understand the Problem
// - Explore Concrete Examples
// - Break It Down (write your game plan)
// - Solve/Simplify (ignore if it's hard)
// - Look Back and Refactor

// END
