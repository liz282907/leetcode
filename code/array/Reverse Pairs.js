/**
 * Given an array nums, we call (i, j) an important reverse pair if i < j and nums[i] > 2*nums[j].

You need to return the number of important reverse pairs in the given array.

Example1:

Input: [1,3,2,3,1]
Output: 2
Example2:

Input: [2,4,3,5,1]
Output: 3
Note:
The length of the given array will not exceed 50,000.
All the numbers in the input array are in the range of 32-bit integer.
Subscribe to see which companies asked this question.
Note:
The length of the given array will not exceed 50,000.
All the numbers in the input array are in the range of 32-bit integer.
Subscribe to see which companies asked this question.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * //思路一，divide and conquer。 大体思路就是先二分（左右两个数组各计算内部的逆序对A+B）,
 * 然后A,B各自排序，两个指针从尾部开始，计算数组间的逆序对C 。a+b+c就是最终的。
 * 但是不明白为什么有测试通不过。。。逻辑上没问题啊... :(
 */
var reversePairs = function(nums) {
    return reverse(nums,0,nums.length-1)

    function reverse(nums,start,end){
        if(start>=end) return 0
        var mid = Math.floor((start+end)/2);
        var leftCount = reverse(nums,start,mid),
            rightCount = reverse(nums,mid+1,end),
            left = nums.slice(start,mid+1).sort(),
            right = nums.slice(mid+1,end+1).sort();
        var i = left.length-1,j = right.length-1,count = leftCount+rightCount;
        while(i>=0 && j>=0){
            if(left[i]>2*right[j]) {
                count+= (j+1);
                i--;
            }else{
                j--;
            }
        }
        return count;
    }
    function compare(a,b){
        return a-b;
    }
};

//思路二： 上面的思路是先排序然后再计算，会省去很多比较的操作，但是楼主不明白为什么有测试用例通不过。。。
//下面这种思路是看解题报告的，总结来说是边计算边归并排序。设左，右数组，i,j各是从start,mid+1开始，即left,right
//两个数组的头部开始，firstK记录的right数组中比left[i]小的第一个数，也就是说循环以i为基准，
//每次有两步操作：
//（1）从小到大扫描right（确切的说是从j开始扫描，因为nums[i]已经大于2*nums[j]了，而left又是排序后的
//因此，right中j之前的一定比left[i-start+1]小。）, 找到第一个是的nums[i]<2nums[j]的j,那么j左边的都是逆序对，count+= (j-1-mid)即可。
//（2）从小到大扫描right（确切的说是从firstK开始扫描），把比nums[i]小的全存到tempArr数组中，然后存nums[i]。这样保证到nums[i]之前的
//都已经排序好了。
//总之。经过上面的步骤以后，可以
var reversePairs = function(nums) {
    return reverse(nums,0,nums.length-1)
    function reverse(nums,start,end){
        if(start>=end) return 0
        var mid = Math.floor((start+end)/2);
        var leftCount = reverse(nums,start,mid),
            rightCount = reverse(nums,mid+1,end),
            totalLen = end-start+1,
            count = leftCount+rightCount;
        var arrIndex = 0, tempArr = [];
        //各自内部已经排好序了，因为之前用的递归
        for(var i=start,j = mid+1,firstK = mid+1; i<=mid;i++){
        	while(nums[i]>2*nums[j] && j<=end) j++;
        	count += (j-1-mid);       //注意这边是j-1，因为符合要求的是j-1的index, 应该用j-1-(mid+1)+1 = j-1-mid
        	while(nums[firstK]<=nums[i] && firstK<=end) {
        	    tempArr.push(nums[firstK++]);
        	}
        	tempArr.push(nums[i]);
        }
        while(firstK<=end) tempArr.push(nums[firstK++]);  //别忘了这边的情况，因为上面所做的只是计算个数以及把比nums[i]小的给记录下来，
        //有可能right数组中仍然存在着比nums[i]还大的数，
        for(var m = 0;m<tempArr.length;m++) nums[start+m] = tempArr[m];
        return count;
    }
};




