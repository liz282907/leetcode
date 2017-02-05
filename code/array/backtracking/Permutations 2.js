/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

    var result = [];
    var used = {};
    solution = [];
    nums.sort(function(a,b){return a-b;});
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

            //第一个与保证不是组合，第二个与保证下一个并列的选项不是重复的。
            if(used[i]) continue;
            //2

            solution[n] = nums[i];
            used[i] = true;

            backtrack(n+1,nums,result,used);

            used[i] = false;          //attention
            while(nums[i+1]===nums[i]) i++;        //注意不能写在2位置，要不然所有本轮第一个但是与上一轮相同的数值会被pass掉。
            //就比如[1,1,2],当前处在i = 1的那个1的位置上。n=1,本轮中，1是第一个数值，但是因为和nums[0]是同样的数值。所以会被pass。
            //而且也不能用continue，否则下一轮重复的话还是会进循环。
        }

    }