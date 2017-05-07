/**
 * There's a tree, a squirrel, and several nuts. Positions are represented by the cells in a 2D grid. 
 * Your goal is to find the minimal distance for the squirrel to collect all the nuts and put them under 
 * the tree one by one. The squirrel can only take at most one nut at one time and can move 
 * in four directions - up, down, left and right, to the adjacent cell. The distance is represented by the number of moves.

Example 1:
Input: 
Height : 5
Width : 7
Tree position : [2,2]
Squirrel : [4,4]
Nuts : [[3,0], [2,5]]
Output: 12
Explanation:

Note:
All given positions won't overlap.
The squirrel can take at most one nut at one time.
The given positions of nuts have no order.
Height and width are positive integers. 3 <= height * width <= 10,000.
The given positions contain at least one nut, only one tree and one squirrel.
 */
/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
var minDistance = function(height, width, tree, squirrel, nuts) {
    var dict = {},min = Number.POSITIVE_INFINITY,visited = [];
    for(var i=0;i<nuts.length;i++){
    	dict[JSON.stringify(nuts[i])] = true;
    }
    for(i=0;i<height;i++){
    	visited[i] = [];
    	for(var j=0;j<width;j++){
    		visited[i][j] = false;
    	}
    }
    graphTraverse(height,width,squirrel,nuts.length,tree,0,undefined,visited);
    return min;
    
    function graphTraverse(height,width,cur,leftCount,tree,distance,curNut,visited){

    	var x = cur[0],y = cur[1];
    	if(visited[x][y]) return;
    	if(x>=width || y>=height || x<0 ||y<0) return ; //越界判断

    	if(isSame(cur,tree) && leftCount===1){//到达tree且都送完了
    		min = Math.min(min,distance+1);
    		return;
    	}
    	if(isSame(cur,tree) && curNut){      //到达tree,放下一颗nut
    		dict[JSON.stringify(curNut)] = false;
    		leftCount--;
    		curNut = undefined; //寻找下一个nut
    	}
    	if(distance>=min) return;

    	if(curNut ===undefined && dict[JSON.stringify(cur)]){     //手里还没有nut,并且当前访问的是nut,捡起来
    		curNut = cur;
    	}
    	graphTraverse(height,width,[x,y+1],leftCount,tree,distance+1,curNut,visited);
    	graphTraverse(height,width,[x,y-1],leftCount,tree,distance+1,curNut,visited);
    	graphTraverse(height,width,[x+1,y],leftCount,tree,distance+1,curNut,visited);
    	graphTraverse(height,width,[x-1,y],leftCount,tree,distance+1,curNut,visited);

    	visited[x][y] = true;

    }
    function isSame(arr1,arr2){
    	return arr1[0]===arr2[0] && arr1[1]===arr2[1]
    }

};






