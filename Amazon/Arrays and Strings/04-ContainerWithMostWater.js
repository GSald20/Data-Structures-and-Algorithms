/*
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two 
endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a 
container, such that the container contains the most 
water.

Return the maximum amount of water a container 
can store.

Notice that you may not slant the container.
*/

function maxArea(height){
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    let current = 0;

    while(i < j){
        if(height[i] < height[j]){
            current = height[i] * (j-i);
            i++;
        } else {
            current = height[j] * (j - i);
            j--;
        }
        max = Math.max(current, max);
    }
    return max;
}