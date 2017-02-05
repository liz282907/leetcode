/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 思路：类似于two sum存储第三个值的所有可能index.做hash,然后遍历数组，得到i,j，那么第三个值用hash去遍历，同时
 需要保证index是逐渐增加的，即j< hashValue[0]
 注意点：
 1. 得到index的那个hash是不要去重的
 2. 第二次遍历数组的话，因为有关的都是数值，所以需要去重，i,j的nums是可以在遍历过程中去除的，但是第三个数的index对无法去掉。或者说可以去除，但是
 不便利。因此可以考虑在遍历过程中不进行判断，最后一次性去重，用set即可

 方法二：
两个阵营配对 sum1,sum2 sum1+sum2 = target,c++里面的multimap。对于某一个值sum1的可能数组,得到sum2的可能数组。
然后嵌套遍历。只要保证[a,b] [c,d]的index互不相同即可。js里面实现比较尴尬，很繁琐就米有写...
[],[],[]
 */


var fourSum = function(nums, target) {
        var result =[], resultSet = new Set();
        nums.sort(function(a,b){ return a-b;})
        var dic = {};

        //这边不可以去重，因为index是唯一的
        for(var i=0;i<nums.length-1;i++){
            // if(i>0 && nums[i]===nums[i-1])
            //     continue;
            for(var j=i+1;j<nums.length;j++){
                // if(j>i+1 && nums[j]===nums[j-1]) continue;
                if(dic[nums[i]+nums[j]] !== undefined)
                    dic[nums[i]+nums[j]].push([i,j]);
                else
                    dic[nums[i]+nums[j]] = [ [i,j] ];
            }

        }

        for(i=0;i<nums.length-3;i++){
            if(i>0 && nums[i]===nums[i-1]) continue;
            for(j=i+1;j<nums.length-2;j++){
                if(j>i+1 && nums[j]===nums[j-1]) continue;
                var another = target-nums[i]-nums[j];
                if(dic[another] !== undefined){
                    var tempArr = dic[another];

                    for(var k=0;k<tempArr.length;k++)
                        if(j>=tempArr[k][0])
                            continue;
                        else{
                            resultSet.add(JSON.stringify([nums[i],nums[j],nums[tempArr[k][0]],nums[tempArr[k][1]]]));
                        }
                }
            }
        }

        result = Array.from(resultSet).map(function(a){return JSON.parse(a)});
        return result;
    };

