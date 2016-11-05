/**
 * @param {number[]} nums
 * @return {number[][]}
 有几个关键点：
 1. js里面的sort不稳定，确切的说是按照字符串排序的，也就是说每次比较前都转为字符串再比较，因此80要比9在先。-2在-4的左边。
 因此需要自定义排序函数。
 2. i,j,k都需要考虑重复的情况。
 3. k--,j++时都还得保证j<k
 */
var threeSum = function(nums) {
    nums.sort(function(a,b){return a-b;});
    var result = [];
    for(var i=0;i<nums.length-2;i++){
        var cur = nums[i];
        if(cur===nums[i-1]) continue;

        var targetSum = -cur;
        for(var j=i+1,k=nums.length-1;j<k;){

            if((nums[j]+nums[k])> targetSum){
                 k--;
                 // while(nums[k]===nums[k+1] && j<k) k--; 可省
            }

            else if((nums[j]+nums[k])< targetSum){
                j++;
                // while(nums[j]===nums[j-1] && j<k) j++; 可省

            }

            else{
                result.push([cur,nums[j],nums[k]]);
                k--;j++;
                while(nums[k]===nums[k+1] && j<k) k--;
                while(nums[j]===nums[j-1] && j<k) j++;
                // while(nums[k]===nums[k+1] && nums[j]===nums[j-1] && j<k) {
                //     k--;j++;
                // }
            }




        }
    }
    return result;
};

export default threeSum;