/**
 * @param {string[]} strs
 * @return {string}
 思路： 寻找a,b的公共子串，然后从这个子串慢慢减少长度去匹配。
 算法复杂度： n1*n
 */
var longestCommonPrefix = function(strs) {

    if(strs.length<2) return strs[0]||"";

    var commonPrefix = "";
    strs = strs.sort(function(s1,s2){
        return s1.length<s2.length;
    });
    var i=0,j=0;
    var left = strs[0],right = strs[1];
    while(left[i]===right[j] && i<left.length && j< right.length){ //注意界限判断
        i++;
        j++;
    }
    for(;i>=0;i--){      //attention2: i》=0 而不是>=1,因为可能公共为空串
        commonPrefix = left.slice(0,i);
        for(j=2;j<strs.length;j++){
            var curStr = strs[j];
            if(curStr.slice(0,i)!==commonPrefix) break;
        }
        if(j>=strs.length) break;    //attention3: 一旦当前是所有串的公共子串，那么就直接break就好了，不要再循环了here
    }
    return commonPrefix;

};

//方法二，横向扫描，以str[0]为初始的commonPrefix，然后对这每一个字符，对每一个单词进行检验
//算法复杂度： O(n1+n2+...)
var longestCommonPrefix = function(strs) {

    if(!strs.length) return "";
    var commonPrefix = strs[0];

    for(var i=0;i<commonPrefix.length;i++){
        for(var j=0;j<strs.length;j++){
            if(strs[j][i]!==commonPrefix[i]) {
               commonPrefix = commonPrefix.slice(0,i);
               return commonPrefix;
            }
        }
    }

    return commonPrefix;

};