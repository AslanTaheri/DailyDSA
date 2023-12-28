function topKFrequent(nums: number[], k: number): number[] {
    const frequency = new Map<number, number>();

    for (const number of nums) {
        if (frequency.get(number)) {
            const counter = frequency.get(number)! + 1;
            frequency.set(number, counter);
        } else {
            frequency.set(number, 1);
        }
    }

    const kFrequent = new Map<number, number[]>();
    frequency.forEach((value, key) => {
        if (kFrequent.get(value)) {
            kFrequent.get(value)!.push(key);
        } else {
            kFrequent.set(value, [key])
        }
    })

    const result = []
    for (let i = nums.length; i > 0; i--) {
        if (!kFrequent.get(i)) continue;

        result.push(...kFrequent.get(i)!);

        if (result.length === k) break;
    }

    return result;
}