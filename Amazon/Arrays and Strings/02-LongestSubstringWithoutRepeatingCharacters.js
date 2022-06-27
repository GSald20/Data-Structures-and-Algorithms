/*
Given a string s, find the length of the longest
substring without repeating characters.
*/

function lenghtOfLongestSubstring(s){
    let windowStart = 0;
    let maxLength = 0;
    let map = {};

    for(let i = 0; i < s.length; i++){
        const rightChar = s[i];

        if(rightChar in map){
            windowStart = Math.max(windowStart, map[rightChar] + 1);
        }
        map[rightChar] = i;
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }
    return maxLength;
}