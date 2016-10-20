/**
 * @param {number[]} nums
 * @return {number[][]}
 * 思路： next permutaion那题计算的是比本轮大的下一个排列。那么简单来想，最开始
 的时候升序排列，每次递归调用nextpermutation后得到新一轮值后push进数组中，然后下一轮计算
 注意点： 除了next permutation里提到的。还包括js 引用传值的问题。即line 41行，如果传入的是nums数组，则最终会是一模一样的值
 */
var permute = function(nums) {
    var result = [];
    nums.sort(function(a,b){ return a-b});
    result.push([].concat(nums));

    nextPermutation(nums,result);
    return result;

};


var nextPermutation = function(nums,result) {

    var i=nums.length-1,j = i;
    //降序排列的数组，左边一个数字即为要更改的部分。
    while(nums[i-1]>=nums[i]) i--;
    var baseIndex = i-1;

    //对右边排序。降序数组变为升序排列，用左右夹逼交换即可。
    while(i<j && i>=0){
        swap.call(nums,i,j);
        i++;
        j--;
    }

    //排序后找到第一个比baseIndex大的进行交换。交换需要注意baseIndex是否是数组以内的
    if(baseIndex>=0){
        i= baseIndex+1;
        while(nums[i]<=nums[baseIndex])
            i++;
        swap.call(nums,i,baseIndex);

        var curResult = [].concat(nums);
        result.push(curResult);              // attention
        nextPermutation(nums,result);
    }else return;



};


function swap(i,j){
    var temp;
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
    return this;
}