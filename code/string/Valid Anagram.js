/**
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

Subscribe to see which companies asked this question

Show Tags
Show Similar Problems

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 思路一，因为anagram就是对字符进行shuffle。因此只要对他们排个序就好了。但是不懂为什么有一个testcase始终无法通过
 当然这种方法也有点慢。
 not ac
 */
var isAnagram = function(s, t) {
    var sortS = s.split().sort(sortByInc).join("");
    var sortT = t.split().sort(sortByInc).join("");
    return sortS===sortT;

    function sortByInc(a,b){ return a-b;}
};
/*
思路二：
遍历字符串的每一个字符。
时间复杂度 O(n) ，空间复杂度 O(n)。如果要空间复杂度不随s,t变化的话，可以开一个26个字母的数组。常数空间
*/
var isAnagram = function(s, t) {
    var hashTable = {};
    for(var i=0;i<s.length;i++) hashTable[s[i]] = hashTable[s[i]]? (hashTable[s[i]]+1):1;
    for(i=0;i<t.length;i++) hashTable[t[i]] = hashTable[t[i]]? (hashTable[t[i]]-1): -1;
    console.log(hashTable)

    return Object.keys(hashTable).every(function(k){
        return (hashTable[k] === 0);
    })
};
