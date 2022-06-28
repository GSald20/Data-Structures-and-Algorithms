/* 
Given an integer array nums of length n and an 
integer target, find three integers in nums 
such that the sum is closest to target.

Return the sum of the three integers.
*/

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);

    let closest_sum = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let left_ptr = i + 1;
        let right_ptr = nums.length - 1;

        while (left_ptr < right_ptr) {
            const sum = nums[i] + nums[left_ptr] + nums[right_ptr];

            if (Math.abs(sum - target) < Math.abs(closest_sum - target)) {
                closest_sum = sum;
            }
            if (sum === target) {
                return target;
            } else if (sum < target) {
                left_ptr++;
            } else if (sum > target) {
                right_ptr--;
            }
        }
    }
    return closest_sum;
}