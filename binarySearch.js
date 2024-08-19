// Binary search is a highly efficient algorithm for finding an item from a sorted list.
//  It works by dividing the search interval in a half
// if the value of the search is less than the item in the middle interval the search continues in the lower half

// It only works for sorted arrays

function binarySearch(arr, target) {
  let leftIndex = 0,
    rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] == target) {
      return `Item: ${target} is at index ${middleIndex}`;
    }
    if (arr[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return `${target} Not found`;
}

console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 14)
);
