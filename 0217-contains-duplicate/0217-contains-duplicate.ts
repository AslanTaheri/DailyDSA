function containsDuplicate(nums: number[]): boolean {
    const numbersSet = new Set(nums);

    return nums.length !== numbersSet.size;

};