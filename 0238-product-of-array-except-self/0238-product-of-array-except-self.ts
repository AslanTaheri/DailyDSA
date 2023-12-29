// Time: O(n)
// Space: O(1)
function productExceptSelf(nums: number[]): number[] {
    const product: number[] = [];
    product[0] = 1;

    // first traverse to build the pre-fix
    for (let i = 1; i < nums.length; i++) {
        product[i] = product[i - 1] * nums[i-1];
    }

    // second traverse to multiply the post-fix
    let postFix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        product[i] *= postFix;
        postFix *= nums[i];
    }
    return product;
}

// // Time: O(n)
// // Space: O(n)
// function productExceptSelf(nums: number[]): number[] {

//     const prefix = new Map<number, number>()
//     const suffix = new Map<number, number>()

//     // Multiplying the numbers before the idx
//     for (let i = 0; i < nums.length; i++) {
//         const preFactor = (prefix.get(i - 1) ?? 1) * (nums[i - 1] ?? 1);
//         prefix.set(i, preFactor);
//     }

//     // Multiplying the numbers after the idx
//     for (let i = nums.length - 1; i >= 0; i--) {
//         const postFactor = (suffix.get(i + 1) ?? 1) * (nums[i + 1] ?? 1);
//         suffix.set(i, postFactor);
//     }

//     // Bulding the product
//     const product: number[] = []
//     for (let i = 0; i < nums.length; i++) {
//         product.push(
//             prefix.get(i) * suffix.get(i)
//         )
//     }
//     return product
// };