/**
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.

Subscribe to see which companies asked this question
 * @param {string} s
 * @return {boolean}
 注意点：1，replace要全局查找（g）.
 2, string没有reverse的方法
 */
var isPalindrome = function(s) {
    var temp = s.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
    return temp ===temp.split('').reverse().join('');
};

//method2
var isPalindrome = function(s) {

    if(!s) return true;
    s = s.toLowerCase();

    var i = 0,j = s.length-1;
    while(i<=j){
        while(!isValid(s.charAt(i))) i++;
        while(!isValid(s.charAt(j))) j--;
        if(s.charAt(i)!==s.charAt(j)) return false;
        i++;
        j--;
    }
    return true;
};

function isValid(s){
    return !s.match(/[^A-Za-z0-9]/g);
}
