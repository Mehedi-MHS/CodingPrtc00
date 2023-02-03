/*
SQL INNER JOIN Keyword
The INNER JOIN keyword selects records that have matching values in both tables.

INNER JOIN Syntax
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

 */


--Joining 2 tables
SELECT Orders.OrderID,Customers.CustomerName,Orders.OrderDate
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID=Customers.CustomerID;

/*
OrderID CustomerName    OrderDate
10308   Jennifer James  1996-09-11
10309   Lorem Ipsum     1996-09-10
10310   John Doe        1997-01-01
 */

-- Join three tables
SELECT Orders.OrderID,Customers.CustomerName,Persons.Address
FROM ((Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID)
INNER JOIN Persons ON Customers.ContactName=Persons.FirstName);


/*
OrderID CustomerName    Address
10310   John Doe        1000 Mountain View
10309   Lorem Ipsum     1299 Mountain view
10308   Jennifer James  1000 Mountain View
10310   John Doe        Main road

 */

