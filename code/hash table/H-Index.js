/**
 * Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

For example, given citations = [3, 0, 6, 1, 5], which means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3.

Note: If there are several possible values for h, the maximum one is taken as the h-index.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
0 1 3 5 6
    3  2  1
    思路： 首先hash一遍，统计每个citation的数目，同时统计出里面的maxCitation。然后说明citation的可能情况有maxCitation+1种
    （0，1...maxCitation）。然后从后往前遍历，比如上面的5，>=5 citation的数目是自身个数加上6的个数，然后依次往左边加。
    然后这样就可以统计出结果。
    最后再遍历一遍，知道找到最大的那个符合要求的citation。。
    注意最后的返回结果，有可能找不到，即测试用例为[],那么i是-1，应该取0.
    楼主又看了下解题报告，思路基本上一样，只不过有剪枝的部分，即因为h-index最大只可能是citations.length，所以其实没有必要算到maxCitation.并且，只要
    >=len的，都放到一个bucket里面去(可能的h-index为0,1...len)，因为他们其实并没有什么作用，只有计数的功能。
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    
    var dic = {},len = citations.length,maxCount = 0;
    for(var i=0;i<len;i++){
    	var curCitation = citations[i];
    	maxCount = Math.max(maxCount,curCitation);
    	if(!dic[curCitation]) dic[curCitation] = 0;
    	dic[curCitation]++;
    }
    for(i=maxCount-1;i>=0;i--){
    	if(!dic[i]) dic[i] = 0;
    	dic[i] += dic[i+1];
    }
    for(i=maxCount;i>=0;i--){
    	if(dic[i]>=i) break;
    }
    return Math.max(i,0);      
};

//改进了的版本
var hIndex = function(citations) {
    
    var dic = {},len = citations.length;
    dic[len] = 0;         //初始化
    for(var i=0;i<len;i++){
    	var curCitation = citations[i];
    	if(!dic[curCitation]) dic[curCitation] = 0;
    	if(curCitation>=len) dic[len]++;
    	else dic[curCitation]++;
    }
    for(i=len;i>=0;i--){
    	if(!dic[i]) dic[i] = 0;
    	if(i<len) dic[i] += dic[i+1];
    	if(dic[i]>=i) break;
    }
    return Math.max(i,0);      
};