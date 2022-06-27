/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that 
they add up to target.
You may assume that each input would have exactly 
one solution, and you may not use the same element 
twice.
You can return the answer in any order.
*/

function twoSum(nums, target){
    let len = nums.length;
    for(let i = 0; i < len; i++){
        for(let j = len - 1; j > 0; j++){
            if(j != i){
                let add = nums[i] + nums [j];
                if(add ==  target){
                    return [i,j];
                }
            }
        }
    }
    return 0;
}


function twoSum(nums, target){
    let ans = []

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums [j] === target){
                ans = [i,j]
            }
        }
    }
    return ans;
}

console.log(twoSum([2,7,11,15], 9));