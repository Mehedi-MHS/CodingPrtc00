

/*

The SQL INSERT INTO SELECT Statement
The INSERT INTO SELECT statement copies data from one table and inserts it into another table.

The INSERT INTO SELECT statement requires that the data types in source and target tables match.

Note: The existing records in the target table are unaffected.

INSERT INTO SELECT Syntax
Copy all columns from one table to another table:

INSERT INTO table2
SELECT * FROM table1
WHERE condition;
Copy only some columns from one table into another table:

INSERT INTO table2 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table1
WHERE condition;
*/

SELECT * FROM CustomersBackup2023;
-- returns nothing

-- Now copy all the records of Customers into CustomersBackup2023 table;

INSERT INTO CustomersBackup2023
SELECT * FROM Customers;

/*
CustomerID      CustomerName    ContactName     Country
77      John Doe        John    New York
2       Jennifer James  Jennifer        London
37      Lorem Ipsum     Lorem   Los Angels
77      John Doe        John    New York
21      Lara Johnson    Lara    London
22      James Bond      James   New York
23      Dalia Tony      Dalia   London
24      ABraka dabra    ABraka  London
25      Meghan Bond     Meghan  London
26      Pricila FK      Pricila London
 *;



/*
The following SQL statement copies "Suppliers" into "Customers" (the columns that are not filled with data, will contain NULL):

Example
INSERT INTO Customers (CustomerName, City, Country)
SELECT SupplierName, City, Country FROM Suppliers; 
 */



/*
The following SQL statement copies "Suppliers" into "Customers" (fill all columns):

Example
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT SupplierName, ContactName, Address, City, PostalCode, Country FROM Suppliers; 
 */



/*
The following SQL statement copies only the German suppliers into "Customers":

Example
INSERT INTO Customers (CustomerName, City, Country)
SELECT SupplierName, City, Country FROM Suppliers
WHERE Country='Germany';
 */

 
