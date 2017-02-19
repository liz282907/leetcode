/**
 * Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given s = "aab",
Return

[
  ["aa","b"],
  ["a","a","b"]
]
aaba
 */
/**
 * @param {string} s
 * @return {string[][]}
 * 思路，回溯....啊，放上去虽然立刻ac了,但是代码好慢,尴尬....O(N)的空间复杂度，
 * 时间复杂度
 * Roughly,
T(n)=T(n-1)+T(n-2)+..+T(1)

T(n+1)=T(n)+T(n-1)+..+T(1)

T(n+1)=2T(n)

T(n)=2^n
 */
var partition = function(s) {

	var result = [];
	recursion(s,s,[]);
	return result;
	
	function recursion(s,root,cur){
		if(!s && cur.join('')===root){
			result.push([].concat(cur));
			cur = [];
			return
		}
		if(!s) return;
		for(var i=1;i<=s.length;i++){
			var curStr = s.slice(0,i);
			if(isPalindrome(curStr)){
				cur.push(curStr);
				recursion(s.slice(i),root,cur);
				cur.pop(curStr);
			}
		}
	}
	function  isPalindrome(s) {
		return s.split('').reverse().join('') === s;
	}
};










