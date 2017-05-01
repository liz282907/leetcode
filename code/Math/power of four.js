/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num<=0) return false;
	var lgResult = Math.log10(num)/Math.log10(4);
    return parseInt(lgResult)===lgResult;
};


//楼主还看到discuss里面有这么一种方法，算是结合了 power of two以及4的一个feature(1的位置只存在于奇数位置 ，所以用5（101去&）)
public boolean isPowerOfFour(int num) {
        return num > 0 && (num&(num-1)) == 0 && (num & 0x55555555) != 0;
        //0x55555555 is to get rid of those power of 2 but not power of 4
        //so that the single 1 bit always appears at the odd position 
    }