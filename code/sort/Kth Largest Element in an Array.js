/**
 * Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.

Subscribe to see which companies asked this question
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 思路：排序后返回
 */
//插入排序
var findKthLargest = function(nums,k){
    insertSort(nums,0,nums.length-1);

    function insertSort(arr,start,end){
        for(var i=start+1;i<=end;i++){
            var cur = arr[i];
            for(var j=i-1;j>=0;j--){
                if(cur>arr[j]) arr[j+1] = arr[j];
                else break;
            }
            arr[j+1] = cur;

        }
    }

    return nums[k-1];

}

//partition的方法，一个一个挖坑填过去。
var findKthLargest = function(nums, k) {
    quick_sort(nums,0,nums.length-1);
     return nums[k-1];

    function quick_sort(nums,start,end){
        if(end>start){    //attention！不能遗忘限定条件，因为会有insertIndex-1，+1,不加限定条件的话会越界
            var insertIndex  = partition(nums,start,end);
            quick_sort(nums,start,insertIndex-1);
            quick_sort(nums,insertIndex+1,end);
        }
    }
    function partition(nums,start,end){
        var pivot = nums[start];
        while(start<end){
            while(nums[end]<pivot && start<end) end--; //相等的也要交换。其次是，因为while里面有while循环，里面也要判断是否越界
            if(start<end) {
                nums[start] = nums[end];
                start++;
            }
            while(nums[start]>pivot && start<end) start++;
            if(start<end) {   //限定条件不能忘
                nums[end] = nums[start];
                end--;
            }
        }
        nums[start] = pivot;
        return start;
    }
    function swap(nums,i,j){
        var temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
    }
};


/**
 * 最规整的快排...思路少于三位时插入排序，否则快排。用median3求出主元，同时放置在倒数第二位，
 * 首位，主元，末位是有序的，接着对start+1,end-2(end 最开始值为length-1)进行夹逼交换，
 *把大于pivot的挪到最前面，小于它的挪到后面。最终的start=end的位置就应该是pivot的位置。
 *然后二分。
 * @param  {[type]} nums [description]
 * @param  {[type]} k    [description]
 * @return {[type]}      [description]
 */
var findKthLargest = function(nums, k) {
    quick_sort(nums,0,nums.length-1);
    return nums[k-1];

    function quick_sort(nums,start,end){
        if((end-start+1)<=3){
            insertSort(nums,start,end);
        }
        else{
            var pivot = findMedian(nums,start,end);
            var insertIndex  = partition(nums,pivot,start+1,end-2);
            swap(nums,insertIndex,end-1);
            quick_sort(nums,start,insertIndex-1);
            quick_sort(nums,insertIndex+1,end);
        }

    }
    //一定要注意这边的限定条件，
    function partition(nums,pivot,start,end){
        while(true){
            while(nums[start]>pivot) start++; //最多是越过[]，碰到自己，start= end+1
            while(nums[end]<pivot) end--;
            if(start<end) swap(nums,start++,end--);   //别忘了start++,end--
            else break;
        }
        return start;
    }
    function insertSort(arr,start,end){
        for(var i=start+1;i<=end;i++){
            var cur = arr[i];
            for(var j=i-1;j>=0;j--){
                if(cur>arr[j]) arr[j+1] = arr[j];
                else break;
            }
            arr[j+1] = cur;

        }
    }

    function findMedian(nums,start,end){
        var middle = start+ Math.floor((end-start)/2);
        if(nums[start]<nums[middle]) swap(nums,start,middle);
        if(nums[start]<nums[end]) swap(nums,start,end);
        if(nums[middle]<nums[end]) swap(nums,middle,end);

        swap(nums,middle,end-1);
        return nums[end-1];
    }

    function swap(nums,i,j){
        var temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
    }

};
