/**
 * @param {number[]} nums
 * @return {number}
 思路：二分法查找。如果nums[i]<nums[mid]即 4,5,6,7,0,1,2这种情况，那么在右边查找。
 否则在左边查找
 */
var findMin = function(nums) {
        var i = 0, j = nums.length-1,mid = Math.floor((i+j)/2);
        var min = nums[i];
        while( i <= j ){
            if(nums[i]<nums[mid]){
                i = mid+1;
            }
            else{
                i = i+1;
                j = mid;
            }

            min = nums[i]<min? nums[i]:min;
            mid = Math.floor((i+j)/2);
        }
        return min;
    };

/**
注意点： i<j
2,因为mid>=i,所以最好用反面的j来与mid进行比较。否则i==mid的时候，等于条件放哪边都会有点问题（考虑升序和降序数组）

45670123
56701234
var findMin = function(nums) {
        var i = 0, j = nums.length-1,mid = Math.floor((i+j)/2);
        var min = nums[i];

        while( i < j ){

            if(nums[j]<nums[mid]){
                i = mid+1;
            }
            else{
                j = mid;
            }
            mid = Math.floor((i+j)/2);
        }
        return nums[i];
    };



*/