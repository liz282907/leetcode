/**
 * Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
Subscribe to see which companies asked this question.
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//       时间复杂度O(n^2*m^2)       空间：O(n^2)
//       对board的每个位置，都以它为初始值，遍历了一遍board，找其他值，因此时空复杂度如上。
//       有丢丢像动态规划+回溯的结合，唔，说动归也有丢丢牵强。
var exist = function(board, word) {
    var used = initArr(board.length,board[0].length);

    for(var i=0;i<board.length;i++)
        for(var j=0;j<board[0].length;j++){
            if(backtrack(i,j,used,0)) return true;
        }
    return false;

    function  backtrack(startX,startY,used,curIndex) {
        if(curIndex===word.length) {
            return true;
        }
        if(startY>=board[0].length || startY<0 || startX<0 || startX>=board.length) return false;
        if(used[startX][startY]) return false;
        if(board[startX][startY]!==word[curIndex]) return false;

        used[startX][startY] = 1;

        var result = (backtrack(startX,startY+1,used,curIndex+1) || backtrack(startX,startY-1,used,curIndex+1)
                ||backtrack(startX-1,startY,used,curIndex+1)||backtrack(startX+1,startY,used,curIndex+1));

        used[startX][startY] = 0;
        return result;
    }
    function initArr(m,n){
        var arr = [];
        for(var i=0;i<m;i++){
            arr[i] = new Array([]);
            for(var j=0;j<n;j++) arr[i][j] = 0;
        }
        return arr;
    }
};