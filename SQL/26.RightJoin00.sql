/*
SQL RIGHT JOIN Keyword
The RIGHT JOIN keyword returns all records from the right table (table2), and the matching records from the left table (table1). The result is 0 records from the left side, if there is no match.

RIGHT JOIN Syntax
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
Note: In some databases RIGHT JOIN is called RIGHT OUTER JOIN.
*/

SELECT Customers.CustomerName,Orders.OrderID
FROM Customers
RIGHT JOIN Orders
ON Customers.CustomerID=Orders.CustomerID
ORDER BY Orders.OrderID; -- optional

/*
CustomerName    OrderID
Jennifer James  10308
Lorem Ipsum     10309
John Doe        10310
 */

SELECT Customers.CustomerName,Orders.OrderID
FROM Customers
RIGHT JOIN Orders
ON Customers.CustomerName=Orders.OrderID; --No match

/*
CustomerName    OrderID
NULL             10308
NULL             10309
NULL             10310
 */ 








