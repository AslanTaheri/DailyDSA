function kMedian(arr, k) {
  // [1,2,3,4,5] , k =3
  // n - k = 2
  let result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += arr[i + j];
    }

    let median = sum / k;
    result.push(median);
  }

  return result;
}

console.log(kMedian([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
