/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var result = [];
    if(!nums || nums.length<=0) return nums;

    nums.sort(function(a,b){return a-b;});        //一定要排序哟，否则会遇到[4,4,4,1,4]这种情况

    for(var i=0;i<=nums.length;i++){       //attention,i<= ,从0开始
        var solution = [];
        backtrack(i,result,solution,0,nums);
    }
    return result;
};


function backtrack(size,result,solution,start,nums){
        if(solution.length===size){
            result.push([].concat(solution));
            solution = [];
            return;
        }
        for(var j=start;j<nums.length;j++){
            solution.push(nums[j]);
            backtrack(size,result,solution,j+1,nums);     //!attention: j+1 not start+1
            solution.pop(nums[j]);
            while(nums[j+1]===nums[j]) j++;
        }


    }