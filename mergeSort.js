const array = [
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
];

function merge(array1, array2) {
  const arr = [];

  let leftIndex = 0;
  let rightIndex = 0;

  //put all minor pieces first
  while (leftIndex < array1.length && rightIndex < array2.length) {
    const left = array1[leftIndex];
    const right = array2[rightIndex];

    if (left < right) {
      arr.push(left);
      leftIndex++;
    } else {
      arr.push(right);
      rightIndex++;
    }
  }

  //put the rest of bigger pieces at end
  return [...arr, ...array1.slice(leftIndex), ...array2.slice(rightIndex)];
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  //divide array in 2 pieces
  const midleIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, midleIndex);
  const rightArr = array.slice(midleIndex);

  //merge those 2 pieces (already sorted pieces)
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log({
  array,
  result: mergeSort(array),
});
