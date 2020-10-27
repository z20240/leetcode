/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const l = nums.length;
    let next_i = -1;
    for (let i = 0 ; i < l ; i++) {
        const num = nums[i];

        next_i = nums.slice(i+1).findIndex(n => num + n === target);

        if (next_i >= 0) return [i, next_i+i+1];
    }

    return []

};

module.exports = twoSum;