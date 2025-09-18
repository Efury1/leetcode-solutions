/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = {};
    // go through left to right
    for (let i = 0; i < nums.length; i++) {
        // the exact partner we need
        const complement = target - nums[i]; 
        // if we have it return 
        if(seen.hasOwnProperty(complement)) {
            return [seen[complement], i];
        }
        seen[nums[i]] = i;
    }
};