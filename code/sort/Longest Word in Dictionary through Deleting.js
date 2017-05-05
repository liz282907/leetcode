/**
 * Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. 
 * If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

Example 1:
Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]      aabcelpp     aelpp
 
Output: 
"apple"
Example 2:
Input:
s = "abpcplea", d = ["a","b","c"]

Output: 
"a"
Note:
All the strings in the input will only contain lower-case letters.
The size of the dictionary won't exceed 1,000.
The length of all the strings in the input won't exceed 1,000.
Subscribe to see which companies asked this question.

Show Tags

 */
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    var isSubstr = isSubstrOf(s),count = 0,index = -1;
    d.sort(function(a,b){
    	var len = b.length - a.length ;
    	if(len!==0) return len;
    	else return a>b;
    })
	for(var i=0;i<d.length;i++){
		if(isSubstr(d[i])){
			return d[i];
		}
	}

    function isSubstrOf(parent){
    	var dic = {};
    	for(var i=0;i<parent.length;i++){
    		var cur = parent[i];
    		if(!dic[cur] ) dic[cur] = 0;
    		dic[cur]++;
    	}
    	return function(sub){
    		var dict = Object.assign({},dic);
    		for(var i=0;i<sub.length;i++){
    			var cur = sub[i];
    			if(!dict[cur]) return false;
    			dict[cur]--;
    		}
    		return Object.keys(dict).every(function(c){
    			return dict[c]>=0
    		})
    	}
    	
    }
};

//不清楚为什么有一个没有通过...
var findLongestWord = function(s, d) {
    var isSubstr = isSubstrOf(s),count = 0,index = -1;
    //按长度降序排序后按字典序升序排序
    d.sort(function(a,b){
    	var len = b.length - a.length ;
    	if(len!==0) return len;
    	else return a>b;
    })
	for(var i=0;i<d.length;i++){
		if(isSubstr(s,d[i])){
			return d[i];
		}
	}
	return '';

    function isSubstr(parent,sub){
    	var i=0;
    	for(var c of parent){
    		if(c===sub[i]) i++;
    	}
    	if(i===sub.length) return true;
    }
};
