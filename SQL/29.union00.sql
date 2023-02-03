/*
The SQL UNION Operator
The UNION operator is used to combine the result-set of two or more SELECT statements.

Every SELECT statement within UNION must have the same number of columns
The columns must also have similar data types
The columns in every SELECT statement must also be in the same order
UNION Syntax
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;


UNION ALL Syntax
The UNION operator selects only distinct values by default. To allow duplicate values, use UNION ALL:

SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;
Note: The column names in the result-set are usually equal to the column names in the first SELECT statement.

 */
select * from Supplier;
/*Customers table:
---------------------
CustomerID      CustomerName    ContactName     Country
77      John Doe        John    New York
2       Jennifer James  Jennifer        London
37      Lorem Ipsum     Lorem   Los Angels


Supplier table:
--------------
supplierID  supplierName  contactName  country
1001         Abul Kashem     Kashem  Germany
1002         Hashem khan     Hashem  Australia
1003          Hero khan       Hero    Bangladesh

 */


            --- UNION --- (duplicates are not allowed)


SELECT CustomerName from Customers
UNION
SELECT SupplierName from Supplier;

/*
CustomerName
John Doe
Jennifer James
Lorem Ipsum
Abul Kashem
Hashem khan
Hero khan */


        --- UNION with WHERE ----
SELECT CustomerName,Country FROM Customers WHERE Country="London"
UNION
SELECT SupplierName,Country FROM Supplier WHERE Country="Germany";


/*
CustomerName    Country
Jennifer James  London
Abul Kashem     Germany */


                --- UNION ALL --- (duplicates are allowed)

SELECT CustomerName FROM Customers
UNION ALL
SELECT SupplierName FROM Supplier;

/*
CustomerName
John Doe
Jennifer James
Lorem Ipsum
John Doe
Abul Kashem
Hashem khan
Hero khan
Hero khan */



        --- UNION ALL with WHERE ---
SELECT CustomerName,Country FROM Customers WHERE Country="New York"
UNION ALL
SELECT SupplierName,Country FROM Supplier WHERE Country="Bangladesh";


/*
CustomerName    Country
John Doe        New York
John Doe        New York
Hero khan       Bangladesh
Hero khan       Bangladesh */
