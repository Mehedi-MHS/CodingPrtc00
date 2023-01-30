/*

The SQL IN Operator:
--------------------
The IN operator allows you to specify multiple values in a WHERE clause.

The IN operator is a shorthand for multiple OR conditions.

SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
or:

SELECT column_name(s)
FROM table_name
WHERE column_name IN (SELECT STATEMENT);

 */


--IN 

SELECT FirstName,LastName,City
FROM Persons
WHERE FirstName IN ("Jennifer","Lorem",'Tim'); -- same as WHERE FirstName="Jennifer" OR FirstName="Lorem" OR FirstName="Tim";

/*
FirstName   LastName   City
Lorem       Ipsum     New York
Jennifer    James     Los Angels
Tim          Don     NULL
 */



--NOT IN
 SELECT FirstName,LastName,City
FROM Persons
WHERE FirstName NOT IN ("Jennifer",'Lorem',"Tim");

/*
FirstName    LastName            City
John            Doe              Los Angels
John             Dull            London
Updated John    Updated Doe     Los Angels

 */


-- Another:
/*
SELECT * FROM Customers
WHERE Country IN (SELECT Country FROM Suppliers);
*/
