/**
 * Write a SQL query to get the second highest salary from the Employee table.

+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
For example, given the above Employee table, the query should return 200 as the second highest salary. If there is no second highest salary, then the query should return null.

+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+
Subscribe to see which companies asked this question.

# Write your MySQL query statement below
select max(Salary) as SecondHighestSalary from Employee  where Salary < (select max(Salary) from Employee);
 
 方法二：比较通用的方法：
 注意点是：
 （1）题目是如果没有返回null. 但是如果没有2的话，就是返回[]，空，因此要并
 （2）order by是在select选好的基础上进行的，因此by的是 新的fieldname。
 （3）limit some offset some，简写
select Salary as SecondHighestSalary from Employee 
union select null   //2
order by SecondHighestSalary desc limit 1,1;

 */