const array = [
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
];

function insertionSort(array) {
  const arr = array.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        break;
      }
    }
  }

  return arr;
}

console.log({
  array,
  result: insertionSort(array),
});
