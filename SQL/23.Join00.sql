-- SQL Join  statement

/*
Orders table:
OrderID CustomerID      OrderDate
10308   2       1996-09-11
10309   37      1996-09-10
10310   77      1997-01-01

Customers table:

CustomerID      CustomerName    ContactName     Country
77      John Doe        John    New York
2       Jennifer James  Jennifer        London
37      Lorem Ipsum     Lorem   Los Angels
 */

SELECT Orders.OrderID,Customers.CustomerName,Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Customers.CustomerID=Orders.CustomerID;


/*
OrderID CustomerName    OrderDate
10310   John Doe        1997-01-01
10308   Jennifer James  1996-09-11
10309   Lorem Ipsum     1996-09-10

 */
