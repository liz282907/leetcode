/**
 * Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].

Subscribe to see which companies asked this question
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 * 继续用insert interval的方法，创建一个newIntervals，每次往这里面添加newInterval,
 * 这样就使得每一个intervals[i]都能被插入。
 */
var merge = function(intervals) {
    var newIntervals = [];
    for(var i=0;i<intervals.length;i++){
        newIntervals = insert(newIntervals,intervals[i]);
    }
    return newIntervals;
};

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