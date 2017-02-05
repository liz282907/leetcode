/**
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

Example 2:
Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

Subscribe to see which companies asked this question
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 * 思路： 因为最终出来的也要是一个排序数组，那么就需要对intervals数组遍历，
 * 在此基础上进行增删。因为要插入，那么需要先看new的end
 * 第一种情况： new.end< cur.start. 插入，return
 *   intervals:       [3,6]
 * newInterval: [1,2]^
 * 第2种情况： new.start< cur.end. cur不动，直接还保留在interval中，pass
 *   intervals:   [1,2]
 * newInterval:        ^[3,6]
 * 第3种情况： new.end 在
 *   intervals(cur):      |   |
 * newInterval.end          |   |
 * newInterval.start    |   |
 * 合并就好，合并完以后把原来的cur给删除，
 */
var insert = function(intervals, newInterval) {
    var result = [];
    for(var i=0;i<intervals.length;){   //！！不要i++
        var cur = intervals[i];
        if(newInterval.end < cur.start) {
            intervals.splice(i,0,newInterval);
            // console.log(intervals);
            return intervals;
        }else if(newInterval.start > cur.end){
            i++;
            continue;
        }else{
            newInterval.start = Math.min(cur.start,newInterval.start);
            newInterval.end = Math.max(cur.end,newInterval.end);
            intervals.splice(i,1);
        }
    }
    intervals.push(newInterval);
    return intervals;
};