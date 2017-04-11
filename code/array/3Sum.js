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

//二刷版本
//有几个注意点： 
//1, i的取值范围，
//2，i,j,k防止重复要做的判断，同时注意越界问题，以及保障第一个case是可以通过而不是被continue掉的
//3，push了以后别忘了j++,k-- !!
var threeSum = function(nums) {
    nums.sort(function(a,b){return a-b;});

    var result = [];
    for(var i=0;i<nums.length-2;i++){             //1
        if(i>0 && nums[i]===nums[i-1] ) continue;
        var j = i+1,k=nums.length-1,sum;
        while(j<k){
            sum = nums[i]+nums[j]+nums[k];
            if(sum<0) j++;
            else if(sum>0) k--;
            else {
                if(j> i+1 && nums[j]===nums[j-1]) j++;              //2
                else if(k<nums.length-1 && nums[k]===nums[k+1]) k--; //3
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

//二刷之存储[]
//注意点： push index时要都放进去，不要做重复判断
//
var threeSum = function(nums) {
    nums.sort(function(a,b){return a-b;});
    var dict = {},result = []

    for(var i=0;i<nums.length-1;i++){
        for(var j=i+1;j<nums.length;j++){       //j的起始位置
            var sum = nums[i]+nums[j];
            if(!dict[sum]) dict[sum] = [];
            dict[sum].push([i,j]);
        }
    }
    for(i=0;i<nums.length-2;i++){
        if(i>0 && nums[i]===nums[i-1]) continue     //重复判断
        var cur = nums[i];
        if(dict[-cur]) {
            for(var j=0;j<dict[-cur].length;j++){
                var curArr = dict[-cur][j],firstI = curArr[0],secondI = curArr[1];
                if(firstI>i)
                    result.push([cur,nums[firstI],nums[secondI]])
                    break
            }
        }
    }
    return result;
        
};


