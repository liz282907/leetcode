/**
 * The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive.

Subscribe to see which companies asked this question.
楼主最开始最直观的想法是生成所有的全排列，然后找第K个，但是好像有点小题大做，然后就想了一个用回溯算每一位的方法，比如n=3,k=3，
先看第一位，后两位共有2！=2中排列，那么比第3个数小的应该有 k/2 = 1个，那么它暂时应该是2，
然后看第二位，共1个排列，现在找确定了第1位的所有排列中的第3%2 = 1个。 1/0！= 1；...不对，怎么感觉有点怪...等会调试一下。。
后来扫了下结题报告，提到了康托编码，戳链接https://github.com/int32bit/algorithms/tree/master/cantor。
可以实现 给出n,找到第k个排列，以及给出一个排列，反向得出序号。实现之...
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

//wrong method
var getPermutation = function(n, k) {
    var m = n - 1,
        count = 1;

    while (m) {
        count *= m;
        m--;
    }
    var excludeNum = Math.ceil(k / count),
        solution = [excludeNum],
        used = {
            [excludeNum]: true };

    backtrack(n, used, 0);
    return solution.join('');

    function backtrack(n, used, index) {

        if (index === n - 1) return;
        for (var i = 1; i < n; i++) {
            if (used[i]) continue;

            solution[index] = i;
            used[i] = true;
            backtrack(n, used, index + 1);
            used[i] = false;
        }

    }

    function getNum()
};

//ac method
//attention:
//1, math.floor
//2, findKth传的是下标，比如 题目中问的是第k个，那么findKth就应该是k-1, 从0开始的康托编码
var getPermutation = function(n,k){
	var arr = [],findKth = k-1,locationOfSeq = k,temp = [];
	var result = '',used = {};

	for(var i=0;i<n;i++){
		var childCounts = factorial(n-i-1);
		arr[i] = Math.floor(findKth / childCounts); // math.floor一定不能忘！
		locationOfSeq = findKth % childCounts;
		findKth = locationOfSeq;
	}
	for(i=0;i<n;i++) temp[i] = i+1;

	for(i=0;i<n;i++){
		var initial = temp[arr[i]];
		result += initial;
		temp.splice(arr[i],1);
	}
	return result;

	function factorial(n){
		if(n===0) return 1;
		var result = 1;
		while (n) {
	        result *= n;
	        n--;
	    }
	    return result;
	}

}
// 稍微简化代码的版本
var getPermutation1 = function(n,k){
    if(n===1 && k===1 ) return '1';
    var findKth = k-1,locationOfSeq = k,temp = [];
    var result = '',used = {};
    for(i=0;i<n;i++) temp[i] = i+1;
    var index=0;
    for(var i=n-1;i>0;i--){
        var childCounts = factorial(i);
        index = Math.floor(findKth / childCounts);
        result += temp[index];
        temp.splice(index,1);
        locationOfSeq = findKth % childCounts;
        findKth = locationOfSeq;
    }
    result += temp[0];
    return result;
    
    function factorial(n){
        if(n===0) return 1;

        var result = 1;
        while (n) {
            result *= n;
            n--;
        }
        return result;
    }

}