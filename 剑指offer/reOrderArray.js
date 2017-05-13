/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 * 1,2,3,4,5,6,7
 * 1,3,2,4,5,6,7
 * 思路： 题目中如果没有稳定的要求的话，可以直接按照partition的方法，左右两个指针，然后同时交换
 * 但是现在要求稳定性，那么就只能用之前插入或者冒泡的思想。
 * 对于每个i,如果是奇数，过，如果为偶数，那么从它开始找到第一个奇数(位置为j)，然后把i..j-1之间的挪到i+1..j，然后那个奇数
 * 就挪到了第i个位置。直到发现找不到这个j，那就说明，奇数都已经在前面了。就是终止条件，break出来
 * 其实，如果不是inplace去改变数组，即可以有空间复杂度的话，可以考虑另开一个数组。。把奇数全放进了，anotherArr[index++] = oddValue
 */

function reOrderArray(array)
{
    if(array.length<=1) return array;
    var swaped = false,len = array.length;
    for(var i=0;i<len;i++){
        if(array[i]%2) continue;
        var j = i+1;
        while(array[j]%2===0 && j<len) j++;
        if(j>=len) break;     //注意提前退出，相当于冒泡里面的swap
        while(j>i){
            swap(array,j,j-1);
            j--;
        }
    }
    return array;
    
    function swap(nums,i,j){
        var temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
    }
}


//冒泡思想，冒泡的思路是，右>左，就交换，那这边是右为奇数，左为偶数，就交换
//1,2,3,4,5,6,7
//1,3,2,5,4,7,6
function reOrderArray(array)
{
    if(array.length<=1) return array;
    var swaped = false,len = array.length;
    for(var i=0;i<len;i++){
        for(var j=len-1;j>i;j--){
            if(array[j]&1 && !(array[j-1]&1)) {   //注意位运算的判断。。。===的优先级高
                swap(array,j,j-1);
                swaped = true;
            }
        }
        if(!swaped) break;
    }
    return array;
    
    function swap(nums,i,j){
        var temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
    }
}

module.exports = {
    reOrderArray : reOrderArray
};