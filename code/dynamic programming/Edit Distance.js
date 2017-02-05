/**
Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)

You have the following 3 operations permitted on a word:

a) Insert a character
b) Delete a character
c) Replace a character
Subscribe to see which companies asked this question
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 比较经典的一道dp题目，思路可以看lc的discussion，虽然我觉得delete,insert讲反了
 https://discuss.leetcode.com/topic/17639/20ms-detailed-explained-c-solutions-o-n-space
 简要来说是，先初始化，
情况1： word1[i+1]===word2[j+1] 那么distance[i][j] = distance[i-1][j-1];
情况2：不等，那么现在已知d[i-1][j-1]，看word[i+1][j+1]是怎么由对角线的左上角来确定的。分为三种情况：
 (为简便起见，都是对word1去进行操作)
 (1)case1: replace distance[i][j] = distance[i-1][j-1]+1;
     s t d
   s
   t
   m
 (2)case 2: delete distance[i][j] = distance[i][j-1]+1;
     s  t  ''  k...
   s
   t
   m      here
   p
   可以看到此时需要对word1的m进行删除，因为word2此时空。那么只要在word2为st,word1为stm的基础上(distance[i][j-1])删除就好

(3)case 3: insert distance[i][j] = distance[i][j-1]+1;
     s  t  d  k...
   s
   t
   ''     here
   p
   可以看到此时需要对word1的空格部分进行insert d，因为word2此时空。那么只要在word2为std,word1为st的基础上(distance[i-1][j])删除就好


 */
var minDistance = function(word1, word2) {
    var distance = initArr();

    distance[0][0] = 0;
    for(var i=1;i<=word1.length;i++)
        distance[i][0] = i;
    for(var j=1;j<=word2.length;j++)
        distance[0][j] = j;

    for(i=1;i<=word1.length;i++)
        for(j=1;j<=word2.length;j++){
            //distance[i][j]
            if(word1[i-1]===word2[j-1]) distance[i][j] = distance[i-1][j-1];
            else
                //分别对应于insert,delete,resplace
                distance[i][j] = Math.min(distance[i-1][j],distance[i][j-1],distance[i-1][j-1])+1;
        }

    return distance[word1.length][word2.length];
    function initArr(){
        var arr = [];
        for(var i=0;i<=word1.length;i++)
            arr[i] = new Array(word2.length+1);
        return arr;
    }
};

