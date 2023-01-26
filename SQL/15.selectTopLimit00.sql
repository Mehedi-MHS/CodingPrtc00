-- sql SELECT TOP clause or LIMIT clause

/*
For sql server/ms access

SELECT TOP number|percent column_name(s)
FROM table_name
WHERE condition;
*/

/*
MySQL Syntax:

SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;
*/


SELECT FirstName,LastName
FROM Persons
WHERE PersonID>0 AND PersonID<7
LIMIT 3;

/*
FirstName    LastName
John         Doe
Lorem        Ipsum
Jennifer     James */

