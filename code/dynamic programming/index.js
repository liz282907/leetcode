/*
动态规划的原理就是 divider and conquer + memoization
记住分问题的答案，以空间换时间。划分子问题叫做 recurrence
    2-1. 確認每個問題需要哪些子問題來計算答案。（recurrence）
   2-2. 確認總共有哪些問題。（state space）
   2-3. 把問題一一對應到表格。（lookup table）
   2-4. 決定問題的計算順序。（computational sequence）
   2-5. 確認初始值、計算範圍。（initial states / boundary）
   因为问题最终划分为小的问题，因此应该把最初始的值先列出来，然后才能依次计算。

注意：正确的DP，应该是不用递归，而用空间来存储的。
分为两种：
 top-down :通常就是递归
 bottom-up:
     function dynamic_programming()
    {
        // [Initial]
        table[0] = 1;
        table[1] = 1;

        // [Compute]
        for (int i=2; i<=5; i++)
            table[i] = table[i-1] + table[i-2];
    }

*/