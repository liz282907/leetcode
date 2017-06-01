/**
 * Longest Substring Without Repeating Characters
 * 思路：
 * 1，大体思路就是hashtable存放最近的index,对每个s[i],如果之前有，那么对当前来说，应该更新下startindex.
 * 有两种可能。比如这边的当前在w,之前的startindex在p,但是现在发现w有重复了，start应该更新为map(s[i])+1.
 * 还有一种是，虽然找到了，但是是在当前最长序列的start左边，那么无所谓。
 * 2，动态规划。每个s[i]维持一个最长子串数组。然后对s[i]来说，遍历lastArr[i-1]数组，如果发现都没有，那么s[i]的lastArr[i] = lastArr[i]+s[i]
 * p w w k e w
 * |   |
 */