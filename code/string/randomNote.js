/**
 * Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
Subscribe to see which companies asked this question.
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 思路： 两次遍历，magazine里面的字符用dic来存放个数，然后再遍历ransomNote去--,如果最终发现有 count<0。
 * 或者dic里面有不存在的，就false.
 * 如果希望用常数空间的话，放一个大数即可（26位，对应于字母表，然后遍历magazine去设置某一位，啊，不行，不好设置次数...）
 */
var canConstruct = function(ransomNote, magazine) {
    
	var dic = {};
	for(var i=0;i<magazine.length;i++){
		var cur = magazine[i];
		if(!dic[cur]) dic[cur] = 0;
		dic[cur]++;
	}
	for(i=0;i<ransomNote.length;i++){
		cur = ransomNote[i];
		if(!dic[cur]) return false;
		dic[cur]--;
	}
	return Object.keys(dic).every(function(key){
		return dic[key]>=0;
	})

};