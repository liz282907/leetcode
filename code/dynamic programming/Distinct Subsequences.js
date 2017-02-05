/**
Given a string S and a string T, count the number of distinct subsequences of T in S.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

Here is an example:
S = "rabbbit", T = "rabbit"

Return 3.

Subscribe to see which companies asked this question
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 //method1: backtrack的方法超时。。。give up:(
var numDistinct = function(s, t) {

    var num = 0;
    removeRundant(s,t,s.length-t.length,0);
    return num;


    function removeRundant(cur,t,count,start){
        if(count===0 && cur===t) {
            num++;
            return;
        }
        if(count<=0) return;

        for(var i=start;i<s.length;i++){
            var prev = s[i];
            removeRundant(s.replace(s[i],''),t,count-1,start+1);
        }
    }
};

//method2： dp。可以知道，对于新来的s[j],不管是否与t[i]一样，子序列的个数只可能增加不会
//减少，也就是说 如果之前s是
/*
    r a b b b i t
  1 1 1 1 1 1 1 1
r 0 p
a 0 q m n
b 0
b 0
i 0
t 0
假设我们现在在m位置，s[j-1]===a,t[i-1]===a。其实不管是否相等。Count[s('rab'),t('ra')]都不小于
Count[s('ra'),t('ra')]也就是numArr[i-1][j-1]，即图中q的位置。
等于，自然是现有字符不相等的情况（n的位置）。
大于，自然是，当s[j-1]===t[i-1]的情况。这个时候(m的位置)，还可以增加的子序列count是由
p的位置决定的。意会一下...
注意点：
1， 本来初始化的时候我直接是生成的[t.length][s.length]的数组。但实际上，应该各自留一行一列空字符串。
防止 s='ccc',t='c'的情况。否则初始化的第一行跟第一列意义就不对了...
2. 因为多出行、列的初始化，注意字符串的访问...见

*/

var numDistinct = function(s, t) {

    var numArr = [];
    for(var i=0;i<=t.length;i++){      //attention1: 多留行列
        numArr[i] = new Array(s.length+1);
    }
    //第一行初始化。只要不断删除就可以，因此都是1
    for(var j=0;j<=s.length;j++){
        numArr[0][j] = 1;
    }
    //第一列初始化，因为t是target,现在s<t。那么无论如何都不行
    for(i=1;i<=t.length;i++)
        numArr[i][0] = 0;

    for(i=1;i<=t.length;i++)
        for(j=1;j<=s.length;j++){
            numArr[i][j] = numArr[i][j-1];
            if(s[j-1]===t[i-1]) numArr[i][j]+=numArr[i-1][j-1]; //attetion2!，s[j-1]t[i-1]
        }
    return numArr[t.length][s.length];


};

/*
看到这么一种解法...
prefixVec stores the numbers of t's prefixes occur when we iterate through s. the dp equation is when we encounter a character which also occurs in t at position i, then prefixVec[i] += prefixVec[i-1] (i > 0), prefixVec[i]++ (i = 0). we calculate prefixVec backwards so the new value produced won't influence the calculation of next value (at i-1), otherwise we need a temp vector.

int numDistinct(string s, string t) {
    int tLen = t.size();
    vector<int> prefixVec(tLen,0);
    for (auto c: s)
        for (int i = tLen-1;i >= 0;--i)
            if (t[i] == c)
                prefixVec[i] = (i > 0 ? prefixVec[i-1] : 1) + prefixVec[i];
    return prefixVec.back();
}

/*
example showing how prefixVec is calculated when we eat a new char
rabbbit rabbit

rabbit
000000
100000 r
110000 a
111000 b
112100 b
113300 b
113330 i
113333 t
*/



*/