/*
SQL LEFT JOIN Keyword
The LEFT JOIN keyword returns all records from the left table (table1), and the matching records from the right table (table2). The result is 0 records from the right side, if there is no match.

LEFT JOIN Syntax
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
Note: In some databases LEFT JOIN is called LEFT OUTER JOIN.
 */


-- If there is match in left and right table
-- used customerID as matching which is available in both table

SELECT Customers.CustomerName,Orders.OrderID
FROM Customers
LEFT JOIN Orders 
ON Customers.CustomerID=Orders.CustomerID;

/*
CustomerName    OrderID
Jennifer James  10308
Lorem Ipsum     10309
John Doe        10310
 */



-- If there is no match 
-- It will still return result of table 1 but NULL for table 2

SELECT Customers.CustomerName,Orders.OrderID
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerName=Orders.OrderID;

/*
CustomerName    OrderID
John Doe        NULL
Jennifer James  NULL
Lorem Ipsum     NULL
 */



 
