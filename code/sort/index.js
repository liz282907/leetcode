/**
 *
 1. 循环条件边界问题：
 partition 挖坑一个一个依次填。如果是一个大while循环中不嵌套while，只有一轮if判断，则不需再加start<end的
 判断。
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
快排夹逼的while循环的判断条件。不用start<end判断
while(true){
    while(nums[start]>pivot) start++; //最多是越过[]，碰到自己，此时start= end+1，一定会break
    while(nums[end]<pivot) end--;
    if(start<end) swap(nums,start++,end--);   //别忘了start++,end--
    else break;
}

2. o(n)且常数空间，考虑桶排序（nums[i]=i）+原地交换， 见 first missing positive
 */

/**
 * **********************************************************************
 * **********************************************************************
 *                                 快速排序
 * **********************************************************************
 * **********************************************************************
 */
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


/**
 * **********************************************************************
 * **********************************************************************
 *                                 插入排序
 * **********************************************************************
 * **********************************************************************
 */
//插入排序——数组版本
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
//链表版本见insertion sort list

/**
 * **********************************************************************
 * **********************************************************************
 *                                 归并排序
 * **********************************************************************
 * **********************************************************************
 */

var sortList = function(head) {

    if(!head || !head.next) return head;
    //找到中间节点：
    var fast = head,slow = head;
    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    fast = slow;
    slow = slow.next;//l2的开始。注意顺序，一定要在action2执行之前做，否则会使得slow为undefined。
    fast.next = null;//action2: 断开成第一段l1

    var l1 = sortList(head);
    var l2 = sortList(slow);
    return mergeTwoLists(l1,l2);
};

var mergeTwoLists = function(l1, l2) {

    var head = new ListNode(-1),
        prev = head;
    while(l1 && l2){
        if(l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        }else{
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;           //2
    }
    prev.next = l1?l1:l2;
    return head.next;

};