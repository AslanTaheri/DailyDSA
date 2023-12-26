function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let longestSeq = 0;

    for (const number of numSet) {
        //finding the beginning of the sequence, i.e. no left neighbor
        if (!numSet.has(number - 1)) {
            let length = 0;
            while (numSet.has(number + length)) {
                length++
            }
            longestSeq = Math.max(longestSeq, length)
        }

    }
    return longestSeq;
};