/**
 * Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".

Subscribe to see which companies asked this question.
 */
/**
 * @param {string} s
 * @return {string}
 * vowels:aeiouAEIOU
 * 思路： two pointers
 */
var reverseVowels = function(s) {
    
    var vowels = 'aeiouAEIOU'
    var arr = s.split(''),dic = constructDict(vowels);
    var left = 0, right = arr.length-1;
    while(left<right){
    	while(!dic[arr[left]] && left< right) left++;
    	while(!dic[arr[right]] && left< right) right--;
    	if(left<right) swap(arr,left++,right--);
    }
    return arr.join('')

    function constructDict(vowels){
    	return vowels.split('').reduce(function(prev,cur){
    		prev[cur] = true;
    		return prev;
    	},{})
    }
    function swap(nums,i,j){
    	var temp = nums[j];
    	nums[j] = nums[i];
    	nums[i] = temp;
    }
};