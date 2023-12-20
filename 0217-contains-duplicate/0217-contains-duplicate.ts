function containsDuplicate(nums: number[]): boolean {
    const set = new Set();

    for (let number of nums) {
        if (set.has(number)) return true;
        else set.add(number);
    }

    return false;
}