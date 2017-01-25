/**
* 常用技巧
1.

注意点：
1. 对于grid[0].length这种，首先要判断grid是否为null
2. while循环时的越界控制
 while(left[i]===right[j] && i<left.length && j< right.length){ //注意界限判断
        i++;
        j++;
    }
3. 空判断： ListNode fast = head.next; 首先就要考虑head是否为空

经典的递归解法：
generate parentheses
longest substring 可以考虑 pointer 。详见 longest substring without repeating character



to see:
Implement strStr() KMP算法、Boyer-Mooer算法和Rabin-Karp算法


ask:
dict初始化的问题
*/
