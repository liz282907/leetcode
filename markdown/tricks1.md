## 常用技巧

### Memorization
1. 案例： 求 1 到 n 的全部整數的立方和， n 的範圍由 1 到 10 
```
int sum_of_cubes(int n)
{
    int sum = 0;
    for (int i=1; i<=n; i++)
        sum += i * i * i;
    return sum;
}
void print_sum_of_cubes(n)
{
    int i=1;
    while(i<=n) console.log(sum_of_cubes(i));
}
```
当然，这种既可以每计算一次就存储一次，也可以预先计算，然后最终求解的时候直接从预存储的表格中获取即可。

### Iteration 递推法
case: 字串變整數
直覺的方式是遞增法。個、十、百、千、萬、 …… ，每個位數分別乘上 10 的次方，通通加起來。此處按照高位數到低位數的順序進行處理，以符合字串的儲存順序。
更好的方式是遞推法！由高位數到低位數、也就是由左到右讀取字串，每讀取一個字元，就將數值乘以十、加上當前字元的對應數字。
```
void string_to_integer()
{
    char s[10] = "26962869";
 
    int n = 0;
    for (int i=0; s[i]; i++)
        n = n * 10 + s[i] - '0';
 
    cout << n;
}
```