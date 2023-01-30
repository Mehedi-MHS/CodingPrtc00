/*

The SQL BETWEEN Operator:
------------------------

The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.

The BETWEEN operator is inclusive: begin and end values are included. 

BETWEEN Syntax
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;

 */

select * from Persons;
--BETWEEN
 SELECT productID,productName,price
FROM Products
WHERE price BETWEEN 10 AND 30;

/*
productID   productName     price
1            Chais           18
2            Chang           23
4            Ice cream       28

 */


--NOT BETWEEN
SELECT productID,productName,price
FROM Products
WHERE price NOT BETWEEN 10 AND 30;
/*
productID  productName     price
3         Thai soup       34

 */


 -- BETWEEN operator with IN statement
-- select between a price range but except some productID

SELECT categoryID,productName,price
FROM Products
WHERE price BETWEEN 10 AND 30
AND productID NOT IN (2,3,4);

/*
categoryID      productName     price
1                 Chais          18
 */

-- BETWEEN text values

SELECT PersonID,FirstName,LastName
FROM Persons
WHERE FirstName BETWEEN 'John' AND 'Lorem';



