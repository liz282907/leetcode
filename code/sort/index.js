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
 */