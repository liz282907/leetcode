/**
 * 总结： 注意点
 * //二刷版本
//有几个注意点： 
//1, i的取值范围，
//2，i,j,k防止重复要做的判断，同时注意越界问题，以及保障第一个case是可以通过而不是被continue掉的
//3，push了以后别忘了j++,k-- !!
 * 
 * @param  {[type]} nums [description]
 * @return {[type]}      [description]
 */
var threeSum = function(nums) {
    nums.sort(function(a,b){return a-b;});

    var result = [];
    for(var i=0;i<nums.length-2;i++){       
        if(i>0 && nums[i]===nums[i-1] ) continue;
        var j = i+1,k=nums.length-1,sum;
        while(j<k){
            sum = nums[i]+nums[j]+nums[k];
            if(sum<0) j++;
            else if(sum>0) k--;
            else {
                if(j> i+1 && nums[j]===nums[j-1]) j++;
                else if(k<nums.length-1 && nums[k]===nums[k+1]) k--;
                else {
                    result.push([nums[i],nums[j],nums[k]]);
                    j++;
                    k--;
                }
            }
        }
        
    }
    return result;
};

var threeSum = function(nums) {
    nums.sort(function(a,b){return a-b;});
    var dict = {},result = []

    for(var i=0;i<nums.length-1;i++){
        for(var j=i+1;j<nums.length;j++){
            var sum = nums[i]+nums[j];
            if(!dict[sum]) dict[sum] = [];
            dict[sum].push([i,j]);
        }
    }
    for(i=0;i<nums.length-2;i++){
        if(i>0 && nums[i]===nums[i-1]) continue
        var cur = nums[i];
        if(dict[-cur]) {
            for(var j=0;j<dict[-cur].length;j++){
                var curArr = dict[-cur][j],firstI = curArr[0],secondI = curArr[1];
                if(firstI>i)
                    result.push([cur,nums[firstI],nums[secondI]])
            }
        }
    }
    return result;
        
};



/**
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. 
 * You may assume that each input would have exactly one solution.
For example, given array S = {-1 2 1 -4}, and target = 1. Thesumthatisclosesttothetargetis2. (-1+2+1=2).
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){return a-b;});
    var gap = Number.POSITIVE_INFINITY,result = Number.POSITIVE_INFINITY;
    
    for(var i=0;i<nums.length;i++){
        if(i>=1 && nums[i]===nums[i-1]) continue;
        for(var j=i+1,k=nums.length-1;j<k;){
            var sum = nums[i]+nums[j]+nums[k];
            var tempGap = Math.abs(sum-target);
            if(tempGap<gap){
                gap = tempGap;
                result = sum;
            }

            if(sum<target) {
                j++;
                while(nums[j]===nums[j-1] && j<k ) j++;
            }
            else if(sum>target) {
                k--;
                while(nums[k]===nums[k+1] && j<k ) k--;
            }
            else return target;
        }
    }

    return result;
};


var fourSum = function(nums, target) {
    var result =[], resultSet = new Set();
    nums.sort(function(a,b){ return a-b;})
    var dic = {};

    for(var i=0;i<nums.length-1;i++){
        for(var j=i+1;j<nums.length;j++){
            var sum = nums[i]+nums[j];
            if(!dic[sum]) dic[sum] = [];
            dic[sum].push([i,j])
        }
    }
    for(i=0;i<nums.length-3;i++){
        if(i>0 && nums[i]===nums[i-1]) continue;
        for(j=i+1;j<nums.length-2;j++){
            if(j>i+1 && nums[j]===nums[j-1]) continue
            var tempSum = nums[i]+nums[j];
            if(dic[target-tempSum]){
                var tempArr = dic[target-tempSum];
                for(var k=0;k<tempArr.length;k++){
                      if(j>= tempArr[k][0]) continue;
                      else {
                        result.push([nums[i],nums[j],nums[tempArr[k][0]],nums[tempArr[k][1]]]);
                      }
                }
            }
                
        }
    }
   
    return result;
};



