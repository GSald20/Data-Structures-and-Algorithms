/* 
Given an array of strings strs, group the anagrams
together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, 
typically using all the original letters exactly once.
*/

function groupAnagrams(strs){
    let groups = {}
    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('')
        if(groups[sortedStr]){
            groups[sortedStr].push(str)
        } else {
            groups[sortedStr] = [str]
        }
    });
    return Object.values(groups);
}