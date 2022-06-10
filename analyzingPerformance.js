// Analyzing Performance of Arrays & Objects

// Objectives:
// 1- Understand how objects and arrays work, through the lens of Big O
// 2- Explan why adding elements to the beginning of an array is costly
// 3- Compare and contrast the runtime for arrays and objects, as well as built-in methods

// -------- The Big O of Objects --------

// Objects: Unordered, key value pairs!

let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// ---------------

// When to use Objects?

// - When you do not need order
// - When you need fast access / insertion and removal

// Big O of Objects:

// Insertion -> O(1)
// Removal -> O(1)
// Searching -> O(n)
// Access -> O(1)

// Big O of Objects Methods

// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entries() - O(n)
// hasOwnProperty() - O(1)

// -------- The Big O of Arrays --------

// Arrays: Ordered lists!

let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

// When to use Arrays?

// - When you need order
// - When you need fast access / insertion and removal (sort of...)

// Insertion -> It depends...
// Removal -> It depends...
// Searching -> O(n)
// Access -> O(1)

// *** The problem comes when try insert at the beginning of an array. The reason for that has to do with indices (index order is changing from beginning to end).
// Same problem exist for removing an item from beginning. It's best to avoid.
// So, push and pop always faster than shift and unshift.

// Big O of Array Operations

// push -   O(1)
// pop -   O(1)
// shift -   O(N)
// unshift -   O(N)
// concat -   O(N)
// slice -   O(N)
// splice -   O(N)
// sort -   O(N * log N)
// forEach/map/filter/reduce/etc. -   O(N)

// END
