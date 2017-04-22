//最搓的方法
function Find(target, array)
{
    
    for(var i=0;i<array.length;i++)
        for(var j=0;j<array[0].length;j++)
            if(array[i][j]===target) return true;
	return false;
}

//方法二，思路： 每次找当前查找区域的右上角，排除该区域中肯定比target大的（j--），肯定比target小的（i++）.其他两个区域不一定，要进入
//下一层循环继续查找。
//也可以从左下角考虑，排除比他大的（i--），比他小的（j++）
function Find(target, array)
	{
		return findTarget(array,0,array[0].length-1,target);
    	function findTarget(array,i,j,target){

	    	while(i<array.length && j>=0){      //注意i,j的边界
	    		var upperRight = array[i][j];
	    		if(upperRight>target) j--;
	    		else if(upperRight<target) i++;
	    		else return true;
	    	}
            return false
	    }
	}
module.exports = {
    Find : Find
};