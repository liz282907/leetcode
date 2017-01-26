/**
* 常用技巧
1.missing number可以考虑桶排序（nums[i]=i）+原地交换

注意点：
1. 对于grid[0].length这种，首先要判断grid是否为null
2. while循环时的越界控制
 while(left[i]===right[j] && i<left.length && j< right.length){ //注意界限判断
        i++;
        j++;
    }
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
快排夹逼的while循环的判断条件
while(true){
    while(nums[start]>pivot) start++; //最多是越过[]，碰到自己，start= end+1
    while(nums[end]<pivot) end--;
    if(start<end) swap(nums,start++,end--);   //别忘了start++,end--
    else break;
}
3. 空判断： ListNode fast = head.next; 首先就要考虑head是否为空

经典的递归解法：
generate parentheses
longest substring 可以考虑 pointer 。详见 longest substring without repeating character



to see:
Implement strStr() KMP算法、Boyer-Mooer算法和Rabin-Karp算法
findKthLargest  快排时间复杂度
堆排序


summary:
快排和归并都用了递归，快排是从上到下，自己先处理，然后处理子，类似于先序遍历。归并类似于后序遍历，是从下到上。


ask:
dict初始化的问题
*/
