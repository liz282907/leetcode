/**
There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

For example:

2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

2, [[1,0],[0,1]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

Note:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.

click to show more hints.

Hints:
This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
Topological sort could also be done via BFS.
Subscribe to see which companies asked this question
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 思路：因为涉及到入度，出度，而邻接表对于入度不太好统计，因此我们用邻接矩阵
 每次shift入度为0的点，
 */
 //memory exteed = =
var canFinish = function(numCourses, prerequisites) {
    var arr = [];   //邻接矩阵
    var queue = [];//存储入度为0的点
    var inDegreeArr = [],count=0; //度数数组

    for(var i=0;i<numCourses;i++)
        arr[i] = new Array(numCourses);

    for(i=0;i<prerequisites.length;i++){
        var cur = prerequisites[i];
        arr[cur[1]][cur[0]] = 1;
    }
    for(i=0;i<numCourses;i++) {
        inDegreeArr[i] = InDegree(i,arr,numCourses);
        if(inDegreeArr[i]===0) queue.push(i);
    }
    while(queue.length){
        cur = queue.shift();
        count++;
        //对它的每个邻接点，入度减1,同时，如果减了以后，入度为0，放入queue
        for(i=0;i<numCourses;i++){
            if(arr[cur][i]!==0) {
                if((--inDegreeArr[i])===0) queue.push(i);
            }
        }

    }
    if(count!==numCourses) return false;
    else return true;
};

function InDegree(courseIndex,arr){
    var result = 0;
    for(var i=0;i<numCourses;i++)
        if(arr[i][courseIndex]!==0) result++;
    return result;
}
/*
function findInDegreeNodes(numCourses,arr){
    var result = [];
    for(var j=0;j<numCourses.length;j++){
        isZero = true;
        for(var i=0;i<numCourses.length;i++)
            if(arr[i][j])!==0 isZero = false;
        if(isZero) result.push([i,j]);
    }
    return result;
}
*/

//accepted： 用邻接表代替上面的邻接矩阵，写的时候犯了若干小错误....
var canFinish = function(numCourses, prerequisites) {
    var adjList = [];   //邻接表
    var queue = [];//存储入度为0的点
    var inDegreeArr = [],count=0; //度数数组

    //初始化邻接表
    for(var i=0;i<numCourses;i++) adjList[i] = [];

    //now :这边构造出度邻接表。
    //before 构造的是入度邻接表// 2->1  3->1  then adjList[1] = [2,3]
    for(i=0;i<prerequisites.length;i++){
        var cur = prerequisites[i];
        adjList[cur[1]].push(cur[0]);  // 1->2 1->3  then adjList[1] = [2,3]
    }
    //构造入度数组
    for(i=0;i<numCourses;i++) inDegreeArr[i] = 0;
    for(i=0;i<numCourses;i++){
        // inDegreeArr[i] = 0;   不可以放这边
        for(var j=0;j<adjList[i].length;j++){
            var adjV = adjList[i][j];
            inDegreeArr[adjV]+=1;
        }
    }
    //不要angular初始化0度数组
    for(i=0;i<inDegreeArr.length;i++){
        if(inDegreeArr[i]===0) queue.push(i);
    }

    while(queue.length){
        cur = queue.shift();
        count++;
        //对它的每个邻接点，入度减1,同时，如果减了以后，入度为0，放入queue
        for(i=0;i<adjList[cur].length;i++){
            var curAdj = adjList[cur][i];
            if((--inDegreeArr[curAdj])===0) queue.push(curAdj);
        }

    }
    if(count!==numCourses) return false;
    else return true;
};
