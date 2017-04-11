/**
 * Given an array of integers, find out whether there are two distinct indices i and j in the array 
 * such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference
 *  between i and j is at most k.

Subscribe to see which companies asked this question.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 * 思路，楼主想复杂了！明明两层循环就可以搞定啊摔..见最下面的ac版本
 * 
 * 先找数值上的minGap,
 * 注意，不能排序，因为涉及到index的存储，或者其实也可以存储另一个数组来排序，然后就知道距离cur最近的max_floor和min_ceil.
 * 思路大概是这样的，对每个值，看它周边，与他gap最小的值，如果小于t，那么这条就成立。n个数
 * 只要有一个成立就可以。
 * 然后对每个数，维持一个gap绝对值为t的窗口，计算里面的index偏差,求里面的最小..
 * 好吧。这种方法是楼主想的最搓最搓的...超时了
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {

    var indexDict = {},len = nums.length,dic = {}, satisfyT = false;
    for(i=0;i<len;i++){
    	if(indexDict[nums[i]]===undefined) indexDict[nums[i]] = []
    	indexDict[nums[i]].push(i);//有可能有重复的,那么此时就为数组
    }
    for(i=0;i<len;i++){
    	if(!dic[nums[i]]) dic[nums[i]]= [];      //注意可能有重复的，要判断，不能覆盖...
    	for(var j=-t;j<=t;j++){
    		var valueIndex = indexDict[nums[i]+j];
    		if(valueIndex!==undefined){
    			dic[nums[i]] = dic[nums[i]].concat(valueIndex);
    		}
    	}
    	if(dic[nums[i]].length>1) satisfyT = true;
    }
    if(!satisfyT) return false;//剪枝，第一个条件不符合

    return Object.keys(dic).some(function(v){
    	var tempGap = Number.POSITIVE_INFINITY;
    	var arr = dic[v];
    	//找arr的minGap,其实就是求第一第二值，不考虑效率的话拍下序
    	arr.sort(function(a,b){return a-b});
    	for(j=1;i<arr.length;j++){
    		tempGap = Math.min(arr[j]-arr[j-1],tempGap);
    	}
    	return tempGap<=k;
    })
};
//上面的思路是从t出发，这边可以考虑遍历数组，从k出发，维持一个k的窗口，对这个窗口内，找cur的min_ceil和max_floor，然后比较t,
//嗯。好像这样会更方便点，不要上面来回算index
//注意这边的k有可能比len还要长。
//嗯...还是超时了= =，其实calFloorAndCeil可以简化的...
//
var containsNearbyAlmostDuplicate = function(nums, k, t) {

	if(t<0 || k<1 ) return false;
    var len = nums.length,arr = nums.slice(0,k+1);   //
    for(var i=0;i<len;i++){     //不做限制i<=len-k-1,改在2处限定，越界的不push
        var cur = nums[i];
        if(i>0) {
            arr.shift();
            if((i+k)<len) arr.push(nums[i+k]);    //2
        }
        var result = calFloorAndCeil(arr,cur);
        if((result.ceil && result.ceil-cur<=t) || (result.floor && cur-result.floor<=t)) return true; //防止cur是边界情况，比如一个窗口内的最大或者最小，那就相应的没有ceil,floor
    }

    return false;

    function calFloorAndCeil(arr,target) {

        var temp = [].concat(arr);
        temp.sort(function(a,b){return a-b})
        var index = temp.indexOf(target);

        return{
            ceil: index+1<=arr.length-1? temp[index+1]:null,
            floor: index-1>=0?temp[index-1]:null
        }
    }
};

//上述的改进版,ac
var containsNearbyAlmostDuplicate = function(nums, k, t) {

	if(t<0 || k<1 ) return false;
    var len = nums.length,arr = nums.slice(0,k+1);   
    for(var i=0;i<len;i++){
    	for(var j=i+1;j<=i+k && j<len;j++){
    		if(Math.abs(nums[i]-nums[j])<=t) return true;
    	}
    }
    return false;
};





