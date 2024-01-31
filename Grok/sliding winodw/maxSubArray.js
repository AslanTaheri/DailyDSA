function maxSubArray(arr, k) {
  let windowStart = 0;

  let sum = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowStart += 1;
    sum += arr[windowEnd];

    //check if window size has reached k
    if (windowStart >= k) {
      //slide the window

      sum -= arr[windowStart];
    }
  }
}
