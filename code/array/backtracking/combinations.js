/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var solution = [];
var result = [];
var combine = function(n, k) {

    result = [];
    solution = [];

    if(n<=0) return;

    combination(n,0,k);
    return result;
};
function combination(n,curSeq,length){
    if(curSeq===length){
        result.push([].concat(solution));
        return;
    }

    for(var i=solution[curSeq-1]+1||1;i<=n;i++){ //其实combination函数也可以加一个start,for(var i = start),back(i+1)


        solution[curSeq] = i;
        combination(n,curSeq+1,length);
    }


    //或者
    /*
    for(var i=1;i<=n;i++){
        if(curSeq>0 && i<=solution[curSeq-1]) continue;

        solution[curSeq] = i;
        combination(n,curSeq+1,length);
    }

    */
}

/*
function combination(n,curSeq,length){
    if(curSeq===length){
        result.push([].concat(solution));
        return;
    }

    for(var i=1;i<=n;i++){
        if(used[i]) continue;
        if(i<=solution[curSeq-1]) continue;

        solution[curSeq] = i;
        used[i] = true;
        combination(n,curSeq+1,length);
        used[i] = false;

    }
}
*/

