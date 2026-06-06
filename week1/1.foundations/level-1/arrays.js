// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push() - The .push() method in JavaScript is used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array.
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop() - The .pop() method in JavaScript is used to remove the last element from an array and return that element. It mutates the original array by reducing its length by one.
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift() - The shift() method in JavaScript is used to remove the first element from an array and return that removed element. This method changes the length of the array.
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const shifted = fruits.shift();
console.log(fruits); // ["Orange", "Apple", "Mango"]
console.log(shifted); // "Banana"

// unshift() - The unshift() method in JavaScript adds one or more elements to the beginning of an array and returns the new length of the array.
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

let fruits = ["Banana", "Orange", "Apple"];
fruits.unshift("Lemon", "Pineapple");
console.log(fruits); // ["Lemon", "Pineapple", "Banana", "Orange", "Apple"]

// concat() - concatinates/joins/merges two things together
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach() - The forEach loop in JavaScript is a method that executes a provided function once for each array element. It is commonly used to iterate over arrays.
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);


const initialArr=[1,2,3];

function logThis(str){
    console.log(str + " is a string");
}

initialArr.forEach(logThis)


const fruits = ["apple", "orange", "cherry"];
fruits.forEach((fruit) => {
 console.log(fruit);
});


const numbers = [65, 44, 12, 4];
numbers.forEach((item, index, arr) => {
 arr[index] = item * 10;
});
console.log(numbers); // [650, 440, 120, 40]

// map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);