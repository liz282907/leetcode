/**
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 O(m*n)
 */
var strStr = function(haystack, needle) {

    if(!needle) return 0; //注意边界，有可能needle为空字符串
    for(var i=0;i<=haystack.length-needle.length;i++){
        if(haystack[i]!==needle[0]) continue;
        var k = i,j=0;
        while(k<haystack.length && j< needle.length && haystack[k]===needle[j]){k++;j++;}//注意while循环时，k,j要不能越界
        if(j>=needle.length) return i;
    }
    return -1;

};