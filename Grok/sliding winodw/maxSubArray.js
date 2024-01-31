function maxSubArray(arr, k) {
  let [winStart, index, sum, max] = Array(4).fill(0);

  for (let winEnd = 0; winEnd < arr.length; winEnd++) {
    sum += arr[winEnd];

    //check if window size has reached k
    if (winEnd >= k - 1) {
      if (sum > max) {
        max = sum;
        index = winStart;
      }

      //slide the window
      sum -= arr[winStart];
      winStart += 1;
    }
  }
  console.log(max);
  console.log(arr.slice(index, index + k));
}

// Time : O(n)
// Space: O(1)

//test case
maxSubArray([2, 1, 5, 1, 3, 2], 3);
maxSubArray([2, 3, 4, 1, 5], 2);
