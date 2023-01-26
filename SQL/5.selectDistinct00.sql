/*
The SQL SELECT DISTINCT Statement:
==================================

The SELECT DISTINCT statement is used to return only distinct (different) values.

Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct) values.

SELECT DISTINCT Syntax
SELECT DISTINCT column1, column2, ...
FROM table_name;
 */


-- Without distinct (including duplicates)
SELECT FirstName FROM Persons;

/*
FirstName
John
Lorem
Jennifer
John
 */


--Using distinct (No duplicates)

SELECT DISTINCT FirstName
FROM Persons;

/*
FirstName
John
Lorem
Jennifer

 */


 -- Count function 
 SELECT COUNT(DISTINCT FirstName) FROM Persons;

/*COUNT(DISTINCT FirstName)
 3 */

