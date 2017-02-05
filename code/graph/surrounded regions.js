/**
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

For example,
X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Subscribe to see which companies asked this question
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
         X X X X           X X X X             X X X X
         X X O X  ->       X X O X    ->       X X X X
         X O X X           X 1 X X             X O X X
         X O X X           X 1 X X             X O X X
    对于visited数组，最朴素的是对原始数组另开一个同样大小的数组，然后设true,false。
    但是这样空间开销大，比较好的是用一个set
 */
var solve = function(board) {
    if(board.length<=0) return;   //attention！防止board为空下面board[0]undefined
    var row = board.length;
    var col = board[0].length;

    var visited = new Set();

    //对第一列和最后一列
    for(var i=0;i<row;i++)
    {
        bfs(i,0,visited,board);
        bfs(i,col-1,visited,board);
    }
    //对第一行跟最后一行中每一个进行BFS，但实际上是对里面为O的当成一个子图。
    for(var j=0;j<col;j++)
    {
        bfs(0,j,visited,board);
        bfs(row-1,j,visited,board);
    }

    //与边界相联通的置为1的都置回O，其他O都置为X
    for(i=0;i<row;i++)
        for(j=0;j<col;j++){
            if(board[i][j]==='O') board[i][j] = 'X';
            if(board[i][j]==='1') board[i][j] = 'O';
        }
};

//相当于图中有若干个连通图，对每个连通图都要去建立一个队列，但是visited数组是全局的
//思路是，只要有为O的， 就相当于一个bfs的中心节点，一层层找它的邻接点是否为O，如果是，那么就放进去，传统的BFS是对所有的邻接点都push进queue.一旦这么处理了，就会把所有的与O联通的O给置1，那么内部被X包围的O就会留下，最后反转capture即可。
//注意这是一个非连通图。
function bfs(x,y,visited,board){
    var row = board.length;
    var col = board[0].length;

    var queue = [];
    visited.add(JSON.stringify([x,y]));
    if(board[x][y]!=='O') return;

    board[x][y] = '1';
    queue.push([x,y]);

    while(queue.length){
        var cur = queue.shift();
        var curX = cur[0];var curY = cur[1];
        //邻接点
        addAdj(curX-1,curY,queue,visited);
        addAdj(curX+1,curY,queue,visited);
        addAdj(curX,curY-1,queue,visited);
        addAdj(curX,curY+1,queue,visited);

    }
    function addAdj(x,y,queue,visited){
        if(x<0 || x>=row || y<0 || y>=col) return;
        if(board[x][y]==='O' && !visited.has(JSON.stringify([x,y]))){
                visited.add(JSON.stringify([x,y]));//注意此时才要设置访问过
                board[x][y] = '1';
                queue.push([x,y]);
        }
    }

}



/* ugly and wrong code = =
var solve = function(board) {
    var row = board.length;
    var col = board[0].length;
    //对周围的'O'置为X，因为这个肯定是不包围的，可能对里面有影响
    //待重写，因为会影响原board
    var queue = [];
    var visited = new Set();

    for(var i=0;i<row;i++)
    {
        if(board[i][0]==='O') {
            board[i][0] = '1';
            queue.push([i,0]);
        }
        if(board[i][col-1]==='O') {
            board[i][col-1] = '1';
            queue.push([i,col-1]);
        }
    }
    for(var j=0;j<col;j++)
    {
        if(board[0][j]==='O') {
            board[0][j] = '1';
            queue.push([0,j]);
        }
        if(board[row-1][j]==='O') {
            board[row-1][j] = '1';
            queue.push([row-1,j]);
        }
    }
    for(var k=0;k<queue.length;k++)
        visited.add(JSON.stringify(queue[k]));
    //放进visited

    while(queue.length){
        var cur = queue.shift();
        var curX = cur[0],curY = cur[1];
        //邻接点
        addAdj(curX-1,curY,queue,visited);
        addAdj(curX+1,curY,queue,visited);
        addAdj(curX,curY-1,queue,visited);
        addAdj(curX,curY+1,queue,visited);

    }

    for(i=0;i<row;i++)
        for(j=0;j<col;j++){
            if(board[i][j]==='O') board[i][j] = 'X';
            if(board[i][j]==='1') board[i][j] = 'O';
        }

    function addAdj(x,y,queue,visited){
        visited.add(JSON.stringify([x,y]));
        if(x>=0 && x<row && y>=0 && y<col && board[x][y]==='O' && !visited.has(JSON.stringify([x,y]))){
                board[x][y] = '1';
                queue.push([x,y]);
        }
    }


};

function Point(x,y){
    this.x = x;
    this.y = y;
}

*/