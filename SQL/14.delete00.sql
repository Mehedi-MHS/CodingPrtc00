-- sql delete statement
/*
DELETE FROM TableName WHERE condition;
 */
-- WHERE clause is important,otherwise all the records of this table will be deleted

SELECT * FROM Persons; -- to show values before deleting
/*
PersonID        FirstName       LastName        Address City
1       John    Doe     1000 Mountain View      Los Angels
3       Jennifer        James   1000 Mountain View      Los Angels
4       John    Dull    Main road       London
5       Tim     Don     34 avenew,masl  NULL
6       Updated John    Updated Doe     1000 Mountain  View     Los Angels
7       dadada  hahaha  lsalfj  london
 */

DELETE FROM Persons WHERE PersonID=7; -- deleting a value


SELECT * FROM Persons; -- to show values after deleting

/*
PersonID        FirstName       LastName        Address City
1       John    Doe     1000 Mountain View      Los Angels
3       Jennifer        James   1000 Mountain View      Los Angels
4       John    Dull    Main road       London
5       Tim     Don     34 avenew,masl  NULL
6       Updated John    Updated Doe     1000 Mountain  View     Los Angels
 */


-- Delete all records:
/*
DELETE FROM tableName;
 */
