// -------- Problem Solving --------

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
