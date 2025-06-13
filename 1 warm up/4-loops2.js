let arr = [10, 2, 3, 4, 5, -4];

function searchElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    // Use i < arr.length
    if (arr[i] == num) return i;
  }
  return -1; // Return -1 only after the loop ends
}

console.log(searchElement(arr, 4)); // Output: 3
