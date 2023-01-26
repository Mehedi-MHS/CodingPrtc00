-- sql ORDER BY keyword
-- ORDER BY (default ascending) ASC | DESC

select PersonID,FirstName from Persons order by PersonID; -- default ascending
/*
PersonID        FirstName
1       John
2       Lorem
3       Jennifer
4       John
 */

 select PersonID,FirstName from Persons order by PersonID desc;
/*
PersonID        FirstName
4       John
3       Jennifer
2       Lorem
1       John */

