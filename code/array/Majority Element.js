/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 思路：hash....
 */
var majorityElement = function(nums) {
    var len = nums.length,dic = {},targetLen = Math.floor(len/2);
    for(var i=0;i<len;i++){
    	var cur = nums[i];
    	if(!dic[cur]) dic[cur] = 0;
    	dic[cur]++;
    	if(dic[cur]>targetLen) return cur
    }

};

/**
 * 思路2，上面的方法虽然时间复杂度为O(n)，但是空间复杂度也比较高，楼主看了discussion，有这么一种方法，还比较巧妙，有
 * 丢丢动态规划的想法在里面
 * 一个一个排除掉
 * @param  {[type]} nums [description]
 * @return {[type]}      [description]
 */
var majorityElement = function(nums) {
    
    var major = nums[0],count = 1,len = nums.length;
    for(var i=1;i<len;i++){
    	if(major===nums[i]) count++;
		else count--;
		if(count===0){//当前count为0的话，肯定不会是major，因为major的次数至少要为n/2,那么对后来的没有贡献，就让位，有点像某个max sum的题
			major = nums[i];
			count = 1;
		} 
    }
    return major;
};

//method3 ： divide and conquer,本来楼主想在findMajor的同时把count返回过来的，这样就不用再起一个函数了，后来想了一下两侧的major有可能是不一样的= =
var majorityElement = function(nums) {
    
    return findMajor(nums,0,nums.length-1);
    function findMajor(nums,i,j){
		if(i===j) return nums[i];
		var mid = Math.floor((i+j)/2);

		var leftMajor = findMajor(nums,i,mid);
		var rightMajor = findMajor(nums,mid+1,j);
		if(leftMajor===rightMajor) return leftMajor;

		var leftCount = countTarget(nums.slice(i,j-i+1),leftMajor); //注意这边的slice，是对i到j之间的整个区间去进行查找
		var rightCount = countTarget(nums.slice(i,j-i+1),rightMajor);
		return leftCount>rightCount ? leftMajor:rightMajor;

	}
	function countTarget(nums,target){
		var count = 0;
		for(var i=0;i<nums.length;i++){
			if(nums[i]===target) count++;
		}
		return count;
	}
};



//not ac
var majorityElement = function(nums) {
    
    var index  = partition(nums,0,nums.length-1),
    	start = 0,end = nums.length-1,
		mid = Math.ceil((end+1)/2);
    while(index!==mid){
    	if(index>mid) end = index;
    	else if(index<mid) start = index;
    	index = partition(nums,start,end);
    }
    return nums[index]
    
    function partition(nums,start,end){
    	var randomIndex = start+Math.floor(Math.random()*(end+1-start));
    	swap(nums,randomIndex,end);
    	var i = start,j = end-1,target = nums[end]
    	while(i<j){
    		while(nums[i]<=target && i<j) i++;
    		while(nums[j]>=target && i<j) j--;
    		if(i<j) swap(nums,i++,j--);
    	}
    	swap(nums,i,end);
    	return i;
    }

    function swap(nums,i,j){
    	var temp = nums[j];
    	nums[j] = nums[i];
    	nums[i] = temp;
    }
};



