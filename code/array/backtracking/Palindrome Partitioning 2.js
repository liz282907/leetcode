/**
 * Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

For example, given s = "aab",
Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.

Subscribe to see which companies asked this question.
 */
/**
 * @param {string} s
 * @return {number}
 * 思路： 楼主本来想继续沿用上面的palindrome partition的方法，虽然也剪枝了，但是还是超时了
 */

//not ac
var minCut = function(s) {
    var result = partition(s);
    return Math.min.apply(null,result);
};


var partition = function(s) {

	var result = [], minCurCut = Number.POSITIVE_INFINITY;
	recursion(s,s,[]);
	return result;
	
	function recursion(s,root,cur){
		if(!s && cur.join('')===root){
			result.push(cur.length-1);
			minCurCut = Math.min(minCurCut,cur.length-1);
			cur = [];
			return
		}
		if(!s) return; 
		if(cur.length > minCurCut) return;    //剪枝

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

//f(i)=    [i, n-1]间的最小cut 数
//ac methods,动态规划
//      O(n^2)       O(n^2)
var minCut = function(s) {
	var cutLen = [],isPalindrome = [],n = s.length;

	function init(isPalindrome,len,cutLen){
    	for(var i=0;i<=len;i++){ //   <=
	    	cutLen[i] = len-1-i;
	    	isPalindrome[i] = new Array(len);
	    }
    }

    init(isPalindrome,n,cutLen);

    for(var i=n-2;i>=0;i--){
    	//i不动，j从i+1位置开始找，也就是说对于cutLen(i)来说，有遍历j个可能的值，取其中最小的即可
    	for(var j=i;j<n;j++){  //attention！一定要从i开始，test case为 cdd,初始化时（2，1，0）
    		// 当i在c位置的时候，右侧为0，因此应该为1 cut，而不是本身的2.

    		var tempStr = s.slice(i,j+1);//一般是要做isPalindrome(tempStr)处理的
    		if((s[i]===s[j] && j-i<=1) ||
    			s[i]===s[j] && isPalindrome[i+1][j-1]  ){
    				cutLen[i] = Math.min(cutLen[i],1+cutLen[j+1]);
    				isPalindrome[i][j] = true;
    			}                         
    	}
    }

    return cutLen[0]; 

};


