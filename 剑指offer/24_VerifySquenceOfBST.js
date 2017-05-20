/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 * 思路： divide and conquer。 注意边界条件
 */
function VerifySquenceOfBST(sequence)
{
    if(sequence.length<=0) return false;   //这边不可以省略。！
    return verifySequence(sequence,0,sequence.length-1);
    function verifySequence(nums,start,end){
    	if(start>=end) return true;
    	var root = nums[end],i = start,leftEnd;
    	while(nums[i]<root && i<end) i++;
    	leftEnd = i-1;
    	while(nums[i]>root && i<end) i++;
    	
    	if(i<end) return false;
    	return verifySequence(nums,start,leftEnd) && verifySequence(nums,leftEnd+1,end-1);
    }

}
module.exports = {
    VerifySquenceOfBST : VerifySquenceOfBST
};