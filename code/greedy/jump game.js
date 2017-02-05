/**
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.

Subscribe to see which companies asked this question
 * @param {number[]} nums
 * @return {boolean}
 */
 //bad time limit exceed
var canJump = function(nums) {
    var count = 0;
    backtrack(nums.length-1,nums,0);
    if(count>0) return true;
    else return false;

    function backtrack(leftSum,nums,start){
        if(leftSum===0 && start===nums.length-1){
            count++;
            return;
        }
        if(start>nums.length-1) return;

        for(var i=1;i<=nums[start];i++){
            if(leftSum<i) return;
            backtrack(leftSum-i,nums,start+i);
        }
    }
};

//wrong
var canJump = function(nums) {
    // var count = 0;
    var memoTable = [];
    memoTable[nums.length-1] = true;
    backtrack(0,nums,0);
    return memoTable[0]===true;

    function backtrack(curSum,nums,start){
        if(curSum >= nums.length-1){
            // count++;
            memoTable[curSum-nums[start]] = true;
            return;
        }

        // if(nums[start]===0 && curSum<nums.length-1 ) return;
        if(start>nums.length-1) return;

        for(var i=nums[start];i>=0;i--){
            if(memoTable[curSum+i]===true){
                memoTable[start] = true;
                break;
            }else
                backtrack(curSum+i,nums,start+i);
        }
    }
};


//假设每次跳>=1时，肯定可以到达，其实整个超过最终的nums.length-1就可以。算每一步的最大值，
//注意0的位置就终止
//计算看最远能到哪，
//accepted
var canJump = function(nums) {
    var maxReach = 0;
    //两个限定条件，前者是防止maxReach<nums.length  [1,0,0]这种，它只能到第二个，那么第二个0以后就不能计算了
    //后者是防止maxReach超过了数组长度，会越界
    for(var i=0;i<= maxReach && i<nums.length;i++){
        maxReach = Math.max(maxReach,i+nums[i]);
    }
    return maxReach>=(nums.length-1);

};
