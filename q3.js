// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) {
  let cleanArray = [];
  for (i = 0; i < array.length; i++) {
    if (!cleanArray.includes(array[i])) {
      cleanArray.push(array[i]);
    }
  }
  return cleanArray;
}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

// TODO: display the array with duplicates removed in the console
console.log(removeDuplicates(testArray3));
