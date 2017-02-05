/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 思路： 因为对事件复杂度有log的要求，我们考虑用二分。先找到一个。然后以它为中心各向左右查找。
 起初想在找到一个后扩散查找时继续用二分。但是想想好像不太对。不能保证边界。
 */
var searchRange = function(nums, target) {

    var i = 0,
        j = nums.length - 1;
    var oneIndex = -1;
    while (i <= j) {
        var mid = Math.floor((i + j) / 2);
        if (nums[mid] < target)
            i = mid + 1;
        else if (nums[mid] > target)
            j = mid - 1;
        else {
            oneIndex = mid;
            break;
        }
    }
    if (oneIndex === -1) return [-1, -1]; //attention！没有找到target元素
    i = mid - 1;
    j = mid;
    while (i >= 0 && nums[i] === target) i--;
    while (j <= nums.length - 1 && nums[j] === target) j++;

    return [i + 1, j - 1];


};
/**
 * 但上面好像方法还不是很好。因为下面是o(n)的时间复杂度
 */
//注意点： j = nums.length；防止[1]这种情况，一开始 i = 0,j = nums.length-1 = 0.这样的话循环就进不了。
//那么 如果target不存在的话，是无法正确返回应该插入的index的。


var searchRange = function(nums, target) {

    function searchIndex(target1){

        //break条件是i==j时，这个时候包括两种情况。一种是target存在的情况。那么是i=j=mid时。另一种是target其实不存在
        var i = 0,
            j = nums.length;          //attention！
        while (i < j) {
            var mid = Math.floor((i + j) / 2);
            if (nums[mid] < target1)
                i = mid + 1; //i是最左边的===target的元素
            else
            //归并上面两种情况，即target小于等于nums[mid],把高边界条件放大到mid.对target<nums[mid]其实没有什么影响
            //但是可以一直压缩，考虑 2 2。因为mid始终是倾向于i，靠左的。所以当重复时，会找到最边边的那个index
                j = mid;
        }
        return i;
    }
    var first = searchIndex(target);
    if(nums[first]!==target) return [-1,-1];//没有找到该元素
    else
        return [first,searchIndex(target+1)-1];

};
