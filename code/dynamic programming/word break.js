/**
Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

For example, given
s = "leetcode",
dict = ["leet", "code"].

Return true because "leetcode" can be segmented as "leet code".

Subscribe to see which companies asked this question
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 初步思路是跟distinct subsequence一样。把dict首先聚成string， 再用之前的方法。但是想了一下
 好像不能解决 s里面有多个重复字符串的问题。而且可能会遇到多种分隔的问题
 */
var wordBreak = function(s, wordDict) {
      var findDict = [];
     findDict[0] = true;
     for(var i=1;i<=s.length;i++) findDict[i] = false;

   for(i=1;i<=s.length;i++){
        for(var len=1;len<=i;len++){
            var temp = s.slice(i-len,i);
            if(findDict[i-len] &&(wordDict.has(temp))){
                findDict[i] = true;
                break;
            }

        }

    }
    return findDict[s.length];
};