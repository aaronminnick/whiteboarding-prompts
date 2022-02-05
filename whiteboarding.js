// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.
// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.
// Example
// Input: "Jasmine Ann Jones"
// Output: "Jasmine%20Ann%20Jones"

//with recursion
const space20 = (string) => {
  if (string === "") {
    return string;
  } else if (string[0] === ' ') {
    return "%20" + space20(string.substring(1));
  } else {
    return string[0] + space20(string.substring(1));
  }
};

//without recursion
const space20NoRecurse = (string) => {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      output += "%20";
    } else {
      output += string[i];
    }
  }
  return output;
};

//test
console.log(space20("Jasmine Ann Jones")); //"Jasmine%20Ann%20Jones"
console.log(space20NoRecurse("Jasmine Ann Jones")); //"Jasmine%20Ann%20Jones"


// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.
// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]
// Output: [7, 9, "hi", 12, 53]

//with recursion
const dedupeRecurse = (array) => {
  const checkAgainst = array.slice(0, array.length-1);
  const elementToCheck = array[array.length-1];
  if (array.length === 0) {
    return array;
  } else if (checkAgainst.includes(elementToCheck)) {
    return dedupeRecurse(checkAgainst);
  } else {
    return [...dedupeRecurse(checkAgainst), elementToCheck];
  }
};

//without recursion
const dedupeNoRecurse = (array) => {
  let output = [];
  array.forEach((e, i) => {
    if (!array.slice(0, i).includes(e)) output.push(e);
  });
  return output;
};

//with filter
const dedupeFilter = (array) => array.filter((e, i, a) => !a.slice(0, i).includes(e));

//test
console.log(dedupeRecurse([7, 9, "hi", 12, "hi", 7, 53])); //[7, 9, "hi", 12, 53]
console.log(dedupeNoRecurse([7, 9, "hi", 12, "hi", 7, 53])); //[7, 9, "hi", 12, 53]
console.log(dedupeFilter([7, 9, "hi", 12, "hi", 7, 53])); //[7, 9, "hi", 12, 53]


// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.
// Example
// Input: "aaabccdddda"
// Output: "3ab2c4da"

//with recursion
const compressRecurse = (string) => {
  if (string.length === 0) return string;
  let count = 1;
  for (let i = 0; string[i] === string[i+1]; i++) count++;
  if (count > 1) {
    return count.toString() + string[0] + compressRecurse(string.substring(count));
  } else {
    return string[0] + compressRecurse(string.substring(1));
  }
};

//without recursion
const compressNoRecurse = (string) => {
  let output = "";
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i+1] != null && string[i] === string[i+1]) {
      count++;
    } else {
      if (count > 1) {
        output += count.toString() + string[i];
      } else {
        output += string[i];
      }
      count = 1;
    }
  }
  return output;
};

//test
console.log(compressRecurse("aaabccdddda")); //"3ab2c4da"
console.log(compressNoRecurse("aaabccdddda")); //"3ab2c4da"


// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.
// Example
// Input: "hello"
// Output: false
// Input: "copyright"
// Output: true

//solution
const unique = (string) => {
  if (string.length === 1) {
    return true;
  }
  for (let i = 1; i < string.length; i++) {
    if (string[0] === string[i]) return false;
  }
  return unique(string.substring(1));
};

//test
console.log(unique("hello")); //"false"
console.log(unique("copyright")) //"true"


// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:
//     Quick sort
//     Merge sort
//     Heap sort
//     Insertion sort
//     Bubble sort
//     Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().
// Example
// Input: [9, 2, 7, 12] this is not a good input to fully test a naive implementation - one pass of the inner loop below will "solve" it correctly, but will not solve all inputs
// Output: [2, 7, 9, 12]

//solution
const sort = (array) => {
  for (let h = 0; h < array.length; h++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
      }
    }
  }
  return array;
}

//test
console.log(sort([9, 2, 7, 12, 0, 20, 5, 6])); //[0, 2, 5, 6, 7, 9, 12, 20]