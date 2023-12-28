function topKFrequent(nums: number[], k: number): number[] {

    // Mapping each number to its frequency
    const frequency = new Map<number, number>();
    for (const number of nums) {
        if (frequency.get(number)) {
            const counter = frequency.get(number)! + 1;
            frequency.set(number, counter);
        } else {
            frequency.set(number, 1);
        }
    }

    // Grouping numbers of same frequency together
    const kFrequent = new Map<number, number[]>();
    frequency.forEach((freq, number) => {
        if (kFrequent.get(freq)) {
            kFrequent.get(freq)!.push(number);
        } else {
            kFrequent.set(freq, [number])
        }
    })

    // returning the k top frequent
    const result = []
    for (let i = nums.length; i > 0; i--) {
        if (!kFrequent.get(i)) continue;

        result.push(...kFrequent.get(i)!);

        if (result.length === k) break;
    }

    return result;
}
// TIME: O(n)
// SPACE: O(n) due to Map