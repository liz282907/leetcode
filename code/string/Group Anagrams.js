/**
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.
 * @param {string[]} strs
 * @return {string[][]}
hashtable 映射到同一个str，然后push进[]
related problem: valid anagram
 */
var groupAnagrams = function(strs) {
    var dict = {};
    strs.forEach(function(str){
        var sortedStr = str.split('').sort(function(a,b){ return a<b;}).join('');
        if(!dict[sortedStr]) dict[sortedStr] = [];
        dict[sortedStr].push(str);
    });

    return Object.keys(dict).reduce(function(prev,cur){
        prev.push(dict[cur]);
        return prev;
         },[]);
};