/**
 * Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
Subscribe to see which companies asked this question.
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
	var round = Math.ceil(s.length/(2*k)),arr = s.split('')
    for(var i=0;i<round;i++){
    	var left = 2*i*k,right = (2*i+1)*k-1;  //注意界限
    	while(left<right){
    		swap(arr,left++,right--);
    	}
    }
    return arr.join('')


    function swap(nums,i,j){
    	var temp = nums[j];
    	nums[j] = nums[i];
    	nums[i] = temp;
    }
};