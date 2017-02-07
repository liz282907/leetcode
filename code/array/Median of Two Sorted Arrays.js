/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//method1
/**
 *  A: 0..i-1 | i..m  m = nums1.length
 *  B: 0..j-1 | j..n  
 *  i = m/2   i-1 = (m-1)/2 
 *  举个例子：
 *   奇数个数： 1，3|3，5 右半部分的index=1= 3/2 左半部分的最后一个是（3-1）/2 = 1    即 1，（3，3），5
 *   偶数个数： 1，2| 3，4 右半部分 index= 2（），左半部分为 （4-1）/2 = 2
 *   //For(2)  i + j == m-i+n-j => i + j = (m+n) / 2     (or: i + j == m-i+n-j+1 => j = (m+n+1)/2 - i)
 *    																	  		|这个1 是为了防止奇数个数  
 *    																	  		如 1，3，5  i+j=1+1=2, m+n = 3(应该补全一个数)，而对于偶数个数来说，加上一个1然后再除以2不影响
    
   // left_part          |        right_part
   // A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]
   // B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]

   时间复杂度 O(lg(min(m,n)))
   参考https://discuss.leetcode.com/topic/4996/share-my-o-log-min-m-n-solution-with-explanation
   注意点：
   1， 见下
   2，i,j的关联关系： (推导为左右两端的数目相等 ，即 i+j = m-1-i+1  + n-1-j+1   +1 ) 注意这个1
   3，math.floor不要忘记
   4，while循环内部的 i条件
 * @param  {[type]} nums1 [description]
 * @param  {[type]} nums2 [description]
 * @return {[type]}       [description]
 */
var findMedianSortedArrays = function(nums1, nums2) {

	//注意点1： nums1始终是少的数组（对0-m间进行二分遍历）
    if (nums2.length < nums1.length) return findKth(nums2, nums1);
    return findKth(nums1, nums2);

    function findKth(nums1, nums2) {
        var m = nums1.length,
            n = nums2.length,
            i, j;
        var minI = 0,
            maxI = nums1.length; // midI 始终为右半部分 

        while (minI <= maxI) { //Q
            i = Math.floor((minI + maxI) / 2);        //attention2: 不要忘了 math.floor
            j = Math.floor((m + n + 1) / 2) - i;        //attention3: 之所以要加一，是因为这种情况   12  3
            																		//4  5
            if (nums1[i - 1] > nums2[j] && i > 0) {
                //i应该减小,响应的j会变大
                maxI = i - 1;
            } else if (nums2[j - 1] > nums1[i] && i < m) {
                //i应该增大
                minI = i + 1; //i也可以
            } else {
            	//三种情况
                break;
            }
        }

        var maxleft, minRight, totalLen = n + m;
        //下面求的是第前i+j个数，（一半分界线）如果数组总个数为奇数的话，那么直接返回就好，否则要 计算 (arr[k-1]+arr[k])/2    
        //  1,2 | 3,4
        //  现在maxLeft = 2
        if (i === 0) maxleft = nums2[j - 1]; //nums2中j之前的都在前一半中,       |    |
        else if (j === 0) maxleft = nums1[i - 1]; //nums1中i之前的都在前一半中
        else maxleft = Math.max(nums1[i - 1], nums2[j - 1]); //第k个数
        if (totalLen % 2 === 1) return maxleft;

        //下面计算第k+1个数
        if (i === m) minRight = nums2[j];
        else if (j === n) minRight = nums1[i];
        else minRight = Math.min(nums1[i], nums2[j]);

        return (minRight + maxleft) / 2;

    }

};

/**
 * 若 nums1[mid]<= nums2[mid],则nums1 从0-mid(闭区间)内的都在前k个中，
 * 反证： 如果不在，假设最大的 nums1[mid] 是第k+1个数，那么nums1中共有mid-1 = k/2-1-1 个，nums2中最多有 mid-1个，
 * 也就是说左边最多有 (mid-1+ mid-1) 个 = k-2个数，那么高于k-4个数的必然是 nums1[mid],(因为 nums1[mid]<nums2[mid]<nums2[mid+1])
 * 也就是说 nums1[mid]实际上是第 k-1个数，但假设中它是第k+1个数。矛盾，所以不成立。
 */

/**
 * 通用的findKth的方法，注意点：
 * 1，nums1始终是最少的那个数组
 * 2，递归到某个时候的时候，最少的那个数组可能没有 k/2个数，因此 下标要取 min
 * @param  {[type]} nums1 [description]
 * @param  {[type]} nums2 [description]
 * @return {[type]}       [description]
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var totalLen = nums1.length + nums2.length;
    if (totalLen % 2 === 1) return findKth(nums1, nums2, (totalLen + 1) / 2);
    else return [findKth(nums1, nums2, (totalLen) / 2) + findKth(nums1, nums2, totalLen / 2 + 1)] / 2;



    function findKth(nums1,nums2, k) {

        if(nums1.length>nums2.length) return findKth(nums2,nums1,k); //保证左边的始终是最少数量的数组
        if(nums1.length===0) return nums2[k-1];
        if(k===1) return Math.min(nums1[0],nums2[0]);

        var halfLen = Math.floor(k / 2);
        var i = Math.min(nums1.length,halfLen)-1,  //取每个数组的第k/2个数比较，有可能最小的数组此时剩下的数少于k/2个  nums1.length < halfLen ? nums1.length-1: halfLen-1
            j = Math.min(nums2.length,halfLen)-1;


        if (nums1[i]<nums2[j]){                         // nums1的左半部分一定在前K个以内，忽略掉
            return findKth(nums1.slice(i+1),nums2,k-(i+1));
        }else
            return findKth(nums1,nums2.slice(j+1),k-(j+1));  //注意这边j,j+1

    }

};
