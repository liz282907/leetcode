/**
 * Write a SQL query to get the nth highest salary from the Employee table.

+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
For example, given the above Employee table, the nth highest salary where n = 2 is 200. If there is no nth highest salary, then the query should return null.

+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+
Subscribe to see which companies asked this question.





solution:
注意点：
（1） sql里面limit后好像不支持变量。只能支持numeric constants
The LIMIT clause can be used to constrain the number of rows returned by the SELECT statement. LIMIT takes one or two numeric arguments, which must both be nonnegative integer constants (except when using prepared statements).

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE M INT;
  set M = N-1;
  RETURN (
      # Write your MySQL query statement below.
      select Salary  from Employee 
        union select null  
        order by Salary desc limit M,1
  );
END
 */