// brute-force O(n*k)
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

// sliding window O(n)
function kMedian2(arr, k) {
  let windowSum = 0;
  let windowStart = 0;
  let result = [];
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add the next element
    windowSum += arr[windowEnd];
    //slide the window if window size has reached k
    if (windowEnd >= k - 1) {
      result.push(windowSum / k);
      //slide the window
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return result;
}

console.log(kMedian([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
console.log(kMedian3([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
