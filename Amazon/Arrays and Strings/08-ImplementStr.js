/*
Given two strings needle and haystack, 
return the index of the first occurrence of needle
 in haystack, or -1 if needle is not part of haystack.
*/

function strStr(haystack, needle) {
    if (!needle) return 0;
    if (!haystack) return -1;
    if (haystack.length < needle.length) return -1;

    let i = 0;
    let j = 0;

    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j]) {
            ++i;
            ++j;
        } else {
            i = (++i) - j;
            j = 0;
        }
    }
    if (j === needle.length) return i - j;

    return -1;
}