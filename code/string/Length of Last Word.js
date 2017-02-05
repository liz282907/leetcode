/**
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example,
Given s = "Hello World",
return 5.
思路..这一题.....好简单....正则匹配就好
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.trim().match(/\s*(\w+)$/); //要trim,testcase是"a ";且正则中是\s*而不是\s+。testcase是"a"
    if(arr) return arr[1].length;
    else return 0;
};