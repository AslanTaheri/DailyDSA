function minSubArray(arr, s) {
  //starting from window size of 1
  for (let winSize = 1; winSize <= arr.length; winSize++) {
    let winStart = 0;
    let sum = 0;
    for (let winEnd = 0; winEnd < arr.length; winEnd++) {
      sum += arr[winEnd];

      //check if window size has reached target window size
      if (winEnd >= winSize - 1) {
        if (sum >= s) return winSize;

        //slide the window
        sum -= arr[winStart];
        winStart += 1;
      }
    }
  }
  //returing 0 if no windows catches the target sum
  return 0;
}

//O(n^2) not good
//let's optimize:

function minSubArray2(arr) {}

// test cases
console.log(minSubArray([2, 1, 5, 2, 3, 2], 7)); // expect 2
console.log(minSubArray([2, 1, 5, 2, 8], 7)); // expect 1
console.log(minSubArray([3, 4, 1, 1, 6], 8)); // expect 3
