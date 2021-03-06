/**
* 常用技巧
1.missing number可以考虑桶排序（nums[i]=i）+原地交换
2. bit manipulation
n&(n-1)会把最右边的1给变为0，这样可以计算1的个数，也可以用来计算是否为2的倍数（只有一个1）
 * n&-n 是找到从右到左第一个为1的
3. 不用loop/recursion的话，考虑数学表达式，log啥的。bit啥的
4. 不用循环的话，可以考虑用数组的动态规划，这样内层可以不用再计算
5. 利用闭包降低动态规划的时间 279.perfect squares

var numSquares = (function() {
        var arr = [0,1];

        function countSquares(n) {
            var last = Math.floor(Math.sqrt(n)),
                result = [];
            for (var i = 1; i <= last; i++) {
                result.push(Math.pow(i, 2));
            }
            return result;
        }

        return function(n) {
            if (n < arr.length) return arr[n];
            for (var j = arr.length; j <= n; j++) {
                var minCount = Number.POSITIVE_INFINITY;
                var squares = countSquares(j);
                for (var k = 0; k < squares.length; k++) {
                    minCount = Math.min(minCount, arr[j - squares[k]] + 1);
                }
                arr[j] = minCount;
            }
            return arr[n];
        }

    })();







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
4. stack pop的时候先看下是否为空

经典的递归解法：
generate parentheses
longest substring 可以考虑 pointer 。详见 longest substring without repeating character
还有reverse linked list这题


经典的divide and conquer的解法
241.Different Ways to Add Parentheses
当有问题用其他方法没什么思路的时候看看divide and conquer，化繁为简


to see:
Implement strStr() KMP算法、Boyer-Mooer算法和Rabin-Karp算法
findKthLargest  快排时间复杂度
堆排序


summary:
快排和归并都用了递归，快排是从上到下，自己先处理，然后处理子，类似于先序遍历。归并类似于后序遍历，是从下到上。


ask:
dict初始化的问题
*/
