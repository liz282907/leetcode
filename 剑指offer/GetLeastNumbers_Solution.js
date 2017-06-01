function GetLeastNumbers_Solution(input, k) {
    var len = input.length,
        index, start = 0,
        end = len - 1;
    if (len < k || len < 1) return input;
    index = partition(input, start, end);
    while (index !== k - 1) {
        if (index < k - 1) start = index + 1;
        if (index > k - 1) end = index - 1;
        index = partition(input, start, end);
    }
    return input.slice(0, k);

    function partition(arr, start, end) {
    	var randomIndex = Math.floor(Math.random() * (end - start + 1)） + start; swap(arr, randomIndex, end);
        var i = start, j = end - 1, cur = arr[end];
        while (i < j) {
            while (i < j && arr[i] < cur) i++;
            while (i < j && arr[j] > cur) j--;
            if (i < j) swap(arr, i++, j--);
        }
        swap(arr, i, end);
        return i;
    }

    function swap(arr, i, j) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
}



    module.exports = {
        GetLeastNumbers_Solution: GetLeastNumbers_Solution
    };
