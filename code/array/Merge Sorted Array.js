/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 思路： 因为考虑到nums2的最小值比nums1的最小值可能小，那么从左往右遍历就不太好。该换成从数组的最右端开始
 *        起初以为还要删除重复的元素...
 */

var merge = function(nums1, m, nums2, n) {
	var k = m+n-1, i=m-1, j=n-1;

	while(i>=0 && j>=0){
		var curMax = nums1[i];
		if(nums1[i]>=nums2[j]){
			i--;
		}
		else{
			curMax = nums2[j];
			j--;
		}

		nums1[k--] = curMax;
	}

	//nums2还有剩余
	while(j>=0)
		nums1[k--] = nums2[j--];            //注意这边要为k--
		// nums1 = nums2.slice(0,j+1).concat(nums1.slice(k+1));

};

/*
删除重复的版本
var merge = function(nums1, m, nums2, n) {
	var k = m+n-1, i=m-1, j=n-1;

	while(i>=0 && j>=0){
		var curMax = nums1[i];
		if(nums1[i]>nums2[j]){
			i--;
		}
		else if(nums1[i]<nums2[j]){
			curMax = nums2[j];
			j--;
		}else{
			i--;j--;
		}

		nums1[k--] = curMax;
	}
	if(i<0){
		while(j>=0)
			nums1[k--] = nums2[j--];
	}
	else{
		while(i>=0)
			nums1[k--] = nums1[i--];
	}

	nums1 = nums1.slice(k+1);

};
*/