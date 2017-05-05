/**
 * Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
Subscribe to see which companies asked this question.
 */
/**
 * @param {string} s
 * @return {number}
 * 思路： 找到那些count为偶数的字符，然后计算个数为奇数的字符最大有多少个，sum起来，
 * 哈哈哈，思路是错的。。因为我可以在奇数里面取它的偶数个。= =
 * testcase: ccc
 */
//ac
var longestPalindrome = function(s) {
    var dic = {},result = 0,existOne = false;
    for(var i=0;i<s.length;i++){
    	var cur = s[i];
    	if(!dic[cur]) dic[cur] = 0;
    	dic[cur]++;
    }
    Object.keys(dic).forEach(function(c){
    	result+=dic[c];
    	if((dic[c]&1)===1) {
    		result -= 1;
    		existOne = true;
    	}
    })
    if(existOne) result+=1;
    
    return result;
};

//这种写法是onepass, 所有字符初始化为false, 如果出现一次，就!dic[cur],如果发现又变为false了，说明出现了两次。就加2.
//最终加上的是偶数个，如果count<len,说明，里面还有奇数，再加1即可，放中间。
var longestPalindrome = function(s) {
	var count = 0;
    for(var i=0;i<s.length;i++){
    	var cur = s[i];
    	if(!dic[cur]) dic[cur] = false;
    	dic[cur] = !dic[cur];
    	if(!dic[cur]) count += 2;
    }

    if(count<s.length) coun +=1;
    return count;
};


