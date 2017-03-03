* 获取index的题不能排序，考虑hash存放index
* 有next的访问前，需要先判断下是否为空，否则会报错
* result.push([].concat(solution)); 不能直接push solution，因为这样是把引用放进去，后面会继续变动solution的
* 重复的要pass的问题，之前一定要排序，这样才可以到一起去
* 数组为空的边界判断 
    * if(!nums.length)return0;var result=nums[0];

---



* two sum： hash存index， 特殊情况： index找到自己，排除掉
* 3sum： 两重遍历，内循环2pointer；不可用js原生排序；i,j,k都要略过重复
* 3sum closest： 同上，sum=nums[i]+nums[j]+nums[k];计算gap，gap小更新
* 4sum: num[I],num[j], hash求得的所有可能值得index数组，需要注意的是，I,j要防重复，因为hash里面放的是index，因此最后求得结果，要json.stringify以后放入set中去重。
* Delete Node in a Linked List:  next覆盖当前node，o(1)的复杂度
* insert interval： 插入newInterval,分情况考虑，end>cur.start,start<cur.end, 生成新的newInterval，注意点：for循环中I不要主动++，最后要push进newInterval
* Merge Intervals: 创建一个newIntervals []，遍历之前的intervals，调用上面的insert interval
* remove element： 思路同nums[index++]=nums[i];或者把右边换过来，替代当前重复值，注意for循环的i也不要直接++
* remove duplicate element from sorted array: 一样的思路，比较是和 arr[index-k]比较
* permutation系列: 
    * next permutation(找到逆序的最前一个，与里面的最小交换)
    * Permutations： 全排列，used存放是否已访问，注意回溯前后used的恢复
    * Permutations2: 注意过滤掉重复的，（sum系列的题目中是直接continue掉了，这边是在一次计算后面判断pass）
    * 总结就是： used + 防止重复，还有一种方法是在回溯的时候写start index，
* combinations系列： 
    * start ，注意剪枝（leftsum<cur |leftsum<0 return），重复的在后面用while循环pass掉
    * 注意push的时候是result.push([].concat(solution));
* 二分系列
    * 只有find target的时候是while(I<=j)，其他基本都是I<j
    * 是否有重复值决定了nums[mid] nums[j]是否会相等
    * 高级版本的二分模板，注意j是从nums.length开始，其他都是nums.length-1
    * Find peak 需要注意 边界，即找到0，nums.length-1的时候
    * Search in Rotated Sorted Array 综合了 search minimum与高版本的二分搜索，两者的注意点都要attention
* Bit 系列（single number）
    * 重复3次的数里面找一个重复1次的，32位，每一位看有多少个1，遍历完所有的nums[i]以后，对sum mod3.把那些重复三次的给pass掉，剩下的就是那个single number在该位的值，然后把它们合并起来。取某一位用nums[j]>>i来计算
    * a^a  找出重复两次的数中只重复一次的
    * 重复两次里面找两个只重复一次的： 分组single number
    * a&-a是把从右到左第一个为1的位给找到，注意异或的初始值可以为0，
    * (cur&diff)===0 注意运算符号的优先级，=== 大于 &
* 树
    * 见Evernote树相关的笔记，递归时可以考虑IIFE
    * 递归终止条件为 !root（可以用叶子节点，但不是很好，外层还要加一个root空判断）,非递归的方法是 (!root | stack.length)，递归返回可以是return，也可以是return val,看需求
    * 引用传值的问题，跟backtrack类比
    * Level order 2: 倒序，可以考虑UNshift，或者reverse
    * construct类： 用递归，var node = new TreeNode(preorder.shift()),node.left = buildTree(preorder.slice(0,leftCount),inorder.slice(0,leftCount)); ,node.right = buildTree() return node;
    * Compute related:
        * 先序遍历 | 层次遍历 
        * maxHeight: 后序遍历，递归（!node,return 0，叶子节点：return 1，其他，return 1+ Math.max(node.left,node.right)）
        * minHeight: 后序遍历，同上，只不过空节点的时候要判断，要加一个sibling，防止root有左节点，无右节点的时候，min被设为0，if(!node) return hasSibling? Number.POSITIVE_INFINITY: 0;
        * Balanced tree: 类似于height 的先序遍历解法
        * Path sum 系列的: 先序遍历
        * Same tree: 先序遍历或者层次遍历 （stack push左右两个节点，pop出的时候进行判断，注意如果p,q都为空的时候continue而不是return TRUE，因为可能是左节点或者右节点为null的时候）
        * symmetric tree： 左右子树同时的先序遍历 | 层次遍历 （push的时候顺序区分） 
        * Invert Tree : 后序遍历的递归解法，然后交换cur.left, cur.right 
    * 二叉搜索树
        * 查找、插入、删除都是用的先序遍历，（基于上面的construct类型的题目）其中插入if(!node) 生成一个node, return it, 删除的代码需要仔细看下，很有借鉴意义
        * Validate bst: 先序遍历，设置left，right bound ： node.val > leftBound && node.val < rightBound && isBST(node.left,leftBound,node.val) && 右节点
    * 平衡二叉树
        * convert sorted array -> balanced bst: (同construct类题目)二分，中间的即为root，创建节点，然后类似于bst 的insert方法 。var root = new TreeNode(nums[mid]), root.left = insert(…),root.right = insert()
    * Populate next right pointers in each node: connect(parent,node) | connect(node,sibling)
* string
    * parenthesis系列： 
        * Valid parenthesis: 遍历string，push 到stack中，遇到左括号就push，右括号就判断，最后看stack中是否还剩余
        * Generate parenthesis: 用回溯生成所有的情况，然后用valid去filter，方法二是：递归，recursion(leftCount,n,rightCount,s)，l<n,可以加左括号，l>r,可以加右括号，递归解法
        * longestValidParentheses： 遇到（就push index，遇到)就pop看是否匹配，不匹配 push index，否则pop,这样一来，最后剩下的就是不匹配的那些分隔符，他们之间的（index gap）就是valid parenthesis的长度，取其中最大的即可
        * 
    * Anagram系列：利用hash table 
    * 
    *

---

- Longest Consecutive sequence: 以当前num[I]为中心，看周围的是否存在于数组中，length++，访问过的就continue
- Longest  Palindrome: expandAroundCenter，以当前节点问中心，依次计算回文长度，更新
- longestValidParentheses：遇到（就push index，遇到)就pop看是否匹配，不匹配 push index，否则pop,这样一来，最后剩下的就是不匹配的那些分隔符，他们之间的（index gap）就是valid parenthesis的长度，取其中最大的即可
- Longest Common Prefix: 横向扫描，以str[0]为初始的commonPrefix，然后对这每一个字符，对每一个单词进行检验
- Longest Palindromic Substring: expandAroundCenter，以当前节点问中心，依次计算回文长度，更新
- maximum subarray: 动态规划，subArr[i] = Math.max(subArr[i-1]+nums[i],nums[i]);


Maximum Subarray 
anagram： shuffle 字符串
Palindrome: 回文
Parenthesis: 括号
Could you implement it without using extra memory?
遇到这种，可以考虑in place变动数组,或者来回交换位置



