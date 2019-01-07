/**
 * Author: Dionte Johnson
 * Date: 11-3-2018
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    const result = [];
    for (let indexA = 0; indexA < nums.length - 2; indexA++) {
        const a = nums[indexA];

        if (a > 0) return result;
        if (a === nums[indexA - 1]) continue;

        let indexB = indexA + 1;
        let indexC = nums.length - 1;

        while (indexB < indexC) {
            const b = nums[indexB];
            const c = nums[indexC];

            if ((a + b + c) === 0) {
                result.push([a, b, c]);
            }

            if ((a + b + c) >= 0) {
                while (nums[indexC - 1] === c) { indexC--; } // This is equivalent to continue in my previous implementation
                indexC--;
            }

            if((a + b + c ) <= 0) {
                while (nums[indexB + 1] === b) { indexB++ } // This is equivalent to continue in my previous implementation
                indexB++
            }
        }
    }
    
    return result;
};