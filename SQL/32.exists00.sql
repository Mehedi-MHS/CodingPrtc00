/*
The SQL EXISTS Operator
The EXISTS operator is used to test for the existence of any record in a subquery.

The EXISTS operator returns TRUE if the subquery returns one or more records.

EXISTS Syntax
SELECT column_name(s)
FROM table_name
WHERE EXISTS
(SELECT column_name FROM table_name WHERE condition);

 */
/*
Supplier table

+------------+--------------+-------------+------------+
| supplierID | supplierName | contactName | country    |
+------------+--------------+-------------+------------+
|       1001 | Abul Kashem  | Kashem      | Germany    |
|       1002 | Hashem khan  | Hashem      | Australia  |
|       1003 | Hero khan    | Hero        | Bangladesh |
|       1003 | Hero khan    | Hero        | Bangladesh |
+------------+--------------+-------------+------------+

Products table

+-----------+-------------+------------+------------+--------------------+-------+
| productID | productName | supplierID | categoryID | unit               | price |
+-----------+-------------+------------+------------+--------------------+-------+
|         1 | Chais       |       1001 |          1 | 10 boxes x 20 bags |    18 |
|         2 | Chang       |       1002 |          1 | 24-12 oz bottles   |    23 |
|         3 | Thai soup   |       1003 |          2 | 2x1:1 bag          |    34 |
|         4 | Ice cream   |       1003 |          2 | 10 x 1             |    28 |
+-----------+-------------+------------+------------+--------------------+-------+

 */



--The following SQL statement returns TRUE and lists the suppliers with a product price less than 20:

 SELECT supplierName FROM Supplier
WHERE EXISTS (SELECT ProductName FROM Products
    WHERE Products.supplierID=Supplier.supplierID AND Price < 20);


/*
supplierName
Abul Kashem */



--The following SQL statement returns TRUE and lists the suppliers with a product price equal to 22:

SELECT supplierName FROM Supplier
WHERE EXISTS (SELECT ProductName FROM Products
WHERE Products.supplierID=Supplier.supplierID AND Price=22);

