/**
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3

Credits:
 * @param {character[][]} grid
 * @return {number}
 思路：
 related problem: surrounded regions。差不多。这一次要对全数组进行bfs,
 二不是从边边开始，用1来蔓延，直到被河流阻挡。当queue里面为空时，说明这个岛屿已经全部找到了，最终的
 count++。之所以要对全数组遍历，是因为防止中间是被河流阻隔访问不到，但是内部还有多个独立的岛屿的情况
 */
var numIslands = function(grid) {
    if(grid.length===0) return 0;
    var visited = new Set();
    var count = 0;
    for(var i=0;i<grid.length;i++)
        for(var j=0;j<grid[0].length;j++){
            count = bfs(i,j,visited,grid,count);
        }

    return count;


    //未访问过的岛屿，在最后queue空时才会count++
    function bfs(x,y,visited,grid,count){
        if(visited.has(JSON.stringify([x,y]))) return count;//注意这边跟刚刚surrounded regions不一样
        if(grid[x][y]==='0') return count;

        visited.add(JSON.stringify([x,y]));

        var queue = [[x,y]];

        while(queue.length){
            //岛屿
            var cur = queue.shift();
            var curX = cur[0];var curY = cur[1];
            //邻接点
            addAdj(curX-1,curY,queue,visited);
            addAdj(curX+1,curY,queue,visited);
            addAdj(curX,curY-1,queue,visited);
            addAdj(curX,curY+1,queue,visited);
        }
        return count+1;
    }

    function addAdj(x,y,queue,visited){
        if(x<0 || x>=grid.length || y<0 || y>=grid[0].length) return;
        if(grid[x][y]==='1' && !visited.has(JSON.stringify([x,y]))){
                visited.add(JSON.stringify([x,y]));
                queue.push([x,y]);
        }
    }
};