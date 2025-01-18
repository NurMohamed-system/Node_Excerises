function findLargest(array) {
  let largestNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}

// Test for find largest
let testArray2 = [1, 4, 5, 4, 3]; // 5
console.log("The largest number is:", findLargest(testArray2));

// TODO: display the largest number in the array in the console
