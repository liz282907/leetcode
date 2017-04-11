/**
 * Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

Example 1:
Input:

"bbbab"
Output:
4
One possible longest palindromic subsequence is "bbbb".
Example 2:
Input:

"cbbd"
Output:
2
One possible longest palindromic subsequence is "bb".
Subscribe to see which companies asked this question.
 */
/**
 * @param {string} s
 * @return {number}
 * 
 * 思路：相关的题目见Palindrome Partitioning2.类似的二维数组的动态规划
 * dp思路不变，但是写法可以有两种，一种是从右到左，然后j从i+1开始计算，还有一种是从左到右，j的计算按照len开始。
 * 但是需要注意的是，两种方法的初始化时palindromeArr[i][j]最普通的时候，是不一样的，一个为1，一个为0，（为0是因为下一次
 * 再进入j=i+1时，用0+2更新）
 */
//method1: 从右到左
var longestPalindromeSubseq = function(s) {
    
    if(!s.length) return 0;

    var palindromeArr = initArr(s);
    for(var i=s.length-1;i>=0;i--){     //注意点！倒序，一定要倒序，这样才能发挥dp remember的作用
    	for(var j=i+1;j<s.length;j++){
    		if(s[i]===s[j]) palindromeArr[i][j] = palindromeArr[i+1][j-1]+2;
    		else palindromeArr[i][j] = Math.max(palindromeArr[i+1][j],palindromeArr[i][j-1]);
    	}
    }
    return palindromeArr[0][s.length-1];

    function initArr(s){
    	var isPalindrome = [];
    	for(var i=0;i<s.length;i++){
    	    isPalindrome[i] = [];
    		for(var j=0;j<s.length;j++) {
    			if(j===i) isPalindrome[i][j] = 1;
    			else isPalindrome[i][j] = 0;    //别忘了初始值！初始值为0，区分下面
    		}
    	}
    	return isPalindrome;
    }

};
/**
 * 从左到右，外层为len
 * 外层为len的遍历
 * @param  {[type]} s [description]
 * @return {[type]}   [description]
 */
var longestPalindromeSubseq = function(s) {
    if(!s.length) return 0;
    var j;
    var maxLen = 1;

    var isPalindrome = [];
	for(var i=0;i<s.length;i++){
	    isPalindrome[i] = [];
		for(j=0;j<s.length;j++) {
			if(j===i) isPalindrome[i][j] = 1;
			if(j=== (i+1)) isPalindrome[i][j] = s[i]===s[j]?2:1;
			else isPalindrome[i][j] = 1;           //一定要为1！区分上面
			maxLen = Math.max(maxLen,isPalindrome[i][j]);
		}
	}

    for(var len=3;len<=s.length;len++){
    	for(i=0;i<=s.length-len;i++){
    		j = i+len-1;
    		if(s[i]===s[j]) isPalindrome[i][j] = isPalindrome[i+1][j-1]+2;
    		else isPalindrome[i][j] = Math.max(isPalindrome[i+1][j],isPalindrome[i][j-1]);
    		maxLen = Math.max(maxLen,isPalindrome[i][j])
    	}
    }
    return maxLen;
};