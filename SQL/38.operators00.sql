-- SQL operators : same as Javascript operators.You can do all the arithmetic operations here.

/*

Orders3;
+------------+-----------+----------+--------------+------+
| customerID | productID | quantity | perItemPrice | tax  |
+------------+-----------+----------+--------------+------+
|         37 |         3 |        3 |          150 |   10 |
|         77 |         1 |        2 |          120 |    5 |
|         21 |         2 |        1 |           90 |    3 |
|          2 |         4 |        5 |          140 |    7 |
|         22 |         5 |        2 |          300 |    4 |
|         24 |         6 |        3 |          200 |    7 |
+------------+-----------+----------+--------------+------+

Customers;
+------------+----------------+-------------+------------+
| CustomerID | CustomerName   | ContactName | Country    |
+------------+----------------+-------------+------------+
|         77 | John Doe       | John        | New York   |
|          2 | Jennifer James | Jennifer    | London     |
|         37 | Lorem Ipsum    | Lorem       | Los Angels |
|         77 | John Doe       | John        | New York   |
|         21 | Lara Johnson   | Lara        | London     |
|         22 | James Bond     | James       | New York   |
|         23 | Dalia Tony     | Dalia       | London     |
|         24 | ABraka dabra   | ABraka      | London     |
|         25 | Meghan Bond    | Meghan      | London     |
|         26 | Pricila FK     | Pricila     | London     |
+------------+----------------+-------------+------------+

*/




SELECT Customers.ContactName AS CustomerName,(Orders3.quantity*Orders3.perItemPrice+Orders3.tax) AS Total
FROM Orders3
LEFT JOIN Customers ON Orders3.customerID=Customers.CustomerID;

/*

CustomerName    Total
John             245
Jennifer         707
Lorem            460
John             245
Lara              93
James            604
ABraka           607
 */
