/**
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

Subscribe to see which companies asked this question.
思路： 用hash存储每个字符的index数组，
注意点: 这边的minIndex初始化的时候要设成大的，最后还要判断是否存在
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var dic = {}
    for(var i=0;i<s.length;i++){
    	if(!dic[s[i]]) dic[s[i]] = []
    	dic[s[i]].push(i);
    }
    var minIndex = s.length
    Object.keys(dic).forEach(function(c){
    	if(dic[c].length===1) minIndex = Math.min(minIndex,dic[c][0]);
    })
    return minIndex===s.length?-1: minIndex;
};

//稍微改进下面的遍历的方法，不对dic遍历，而是对s遍历,那么dic里面存次数就好了
var firstUniqChar = function(s) {
    var dic = {}
    for(var i=0;i<s.length;i++){
    	if(!dic[s[i]]) dic[s[i]] = 0
    	dic[s[i]]++;
    }
    var minIndex = s.length
    for(i=0;i<s.length;i++){
    	if(dic[s[i]]===1) return i;
    }
    return -1;
};