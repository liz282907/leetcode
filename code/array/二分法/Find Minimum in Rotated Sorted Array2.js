/**
 * @param {number[]} nums
 * @return {number}
 思路：二分法查找。如果nums[i]<nums[mid]即 4,5,6,7,0,1,2这种情况，那么在右边查找。
 否则在左边查找,比之前那道题多一个重复的可能性。既然重复，我们就把它去除，保留一个。因为不影响，同时就算它是最小的，留下一个后还是正常的。
 */
var findMin = function(nums) {
        var i = 0, j = nums.length-1,mid = Math.floor((i+j)/2);
        var min = nums[i];
        while( i <= j ){
            if(nums[i]<nums[mid]){
                i = mid+1;
            }
            else if(nums[i]>nums[mid]){
                i = i+1;
                j = mid;
            }else{
                i++
            }

            min = nums[i]<min? nums[i]:min;
            mid = Math.floor((i+j)/2);
        }
        return min;
    };

/* method 2
var findMin = function(nums) {
        var i = 0, j = nums.length-1,mid = Math.floor((i+j)/2);
        while(i<j){
            //45670123
            if(nums[j]<nums[mid]) i = mid+1;
            //56701234
            else if(nums[j]>nums[mid]) j = mid;
            else j--;
            mid = Math.floor((i+j)/2);
        }
        return nums[i];
    };
*/