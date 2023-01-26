-- SQL UPDATE statement 
-- UPDATE tableName SET column1=value1,column2=value2,...WHERE condition
-- WHERE statement is important,if you omit this,all the table values will be updated

UPDATE Persons
SET FirstName="Updated John",LastName="Updated Doe"
WHERE PersonID=6;


SELECT * FROM Persons;

/*
PersonID        FirstName       LastName        Address City
1       John    Doe     1000 Mountain View      Los Angels
2       Lorem   Ipsum   1299 Mountain view      New York
3       Jennifer        James   1000 Mountain View      Los Angels
4       John    Dull    Main road       London
5       Tim     Don     34 avenew,masl  NULL
6       Updated John    Updated Doe     1000 Mountain  View     Los Angels
 */


 -- update multiple records (WHERE condition)
 /*

UPDATE Persons SET FirstName="updated" WHERE City="Los Angels";

 */

 -- All the FirstName will be updated where City is Los Angels


