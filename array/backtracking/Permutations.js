/**
 * @param {number[]} nums
 * @return {number[][]}
 * 思路： next permutaion那题计算的是比本轮大的下一个排列。那么简单来想，最开始
 的时候升序排列，每次递归调用nextpermutation后得到新一轮值后push进数组中，然后下一轮计算
 注意点： 除了next permutation里提到的。还包括js 引用传值的问题。即line 41行，如果传入的是nums数组，则最终会是一模一样的值

思路二： 用backtracking。枚举并剪枝。注意需要用一个used对象去存储已经用过的数字。保证这是一个排列而不是组合。然后每次回退后需要重新置false。使得下一次循环还可以用该数
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



/*****************************method2*****************************/
/**
 * @param {number[]} nums
 * @return {number[][]}
 ，时间复杂度同样是O(n!)
 */
var permute = function(nums) {
        var result = [];
        var used = {};
        solution = [];
        backtrack(0,nums,result,used);

        return result;

    };

    var solution = [];

    function backtrack(n,nums,result,used){
        if(n===nums.length){
            result.push([].concat(solution));
            return;
        }

        for(var i=0;i<nums.length;i++){

            if(!used[nums[i]]){
                used[nums[i]] = true;

                solution[n] = nums[i];
                backtrack(n+1,nums,result,used);

                used[nums[i]] = false;          //attention

            }
        }

    }