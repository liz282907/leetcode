/**
 * Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.

Note:
You may assume both s and t have the same length.

Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems

 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 双向映射，s->t, t->s
 */
var isIsomorphic = function(s, t) {
    var dic = {},dic2 = {}
    for(var i=0;i<s.length;i++){
    	var cur = s[i];
    	if(!dic[cur]) dic[cur] = t[i];
    	else if(dic[cur]!==t[i]) return false;
    }
    for(i=0;i<t.length;i++){
    	cur = t[i];
    	if(!dic2[cur]) dic2[cur] = s[i];
    	else if(dic2[cur]!==s[i]) return false;
    }
    return true;

};