/**
 * 统计一个数字在排序数组中出现的次数
 * LeetCode原题= =，思路就是二分，找一个数的startidnex,然后找 k+1的index，中间的间隔就是他们的次数。
 */

function GetNumberOfK(data, k)
{
    
    var start = findIndex(data,k),end = findIndex(data,k+1);
    return end-start;  //注意这边的end-start  不要再减一了

    function findIndex(data,num){

    	var start = 0,end = data.length;
    	while(start<end){
    		var mid = Math.floor((start + end)/2);
    		if(data[mid]<num) start = mid+1;
    		else end = mid;       //注意这边的end = mid 而不是end-1。因为包括了相等的情况
    	}
    	return start;
    }
}