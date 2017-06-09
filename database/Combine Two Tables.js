/**
 * Table: Person

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| PersonId    | int     |
| FirstName   | varchar |
| LastName    | varchar |
+-------------+---------+
PersonId is the primary key column for this table.
Table: Address

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| AddressId   | int     |
| PersonId    | int     |
| City        | varchar |
| State       | varchar |
+-------------+---------+
AddressId is the primary key column for this table.

Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people:

FirstName, LastName, City, State
Subscribe to see which companies asked this question.
 */


/*
Write your MySQL query statement below:

select FirstName,LastName,City,State from Person left join Address on Person.PersonId = Address.PersonId;

或者 using
# Write your MySQL query statement below
select FirstName,LastName,City,State from Person left join Address using(PersonId);
注意这是个左连接，因为题目中说不管address里面有没有，通常的where是inner join.

outerjoin: 包括，left join, right join
innerjoin： 交集的概念。同时存在才会挑出来。
 */
