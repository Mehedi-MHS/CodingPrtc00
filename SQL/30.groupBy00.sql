/*
The SQL GROUP BY Statement
The GROUP BY statement groups rows that have the same values into summary rows, like "find the number of customers in each country".

The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns.

GROUP BY Syntax
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);

 */

-- The following SQL statement lists the number of customers in each country

SELECT COUNT(CustomerID),Country
FROM Customers
GROUP BY Country;

/*
COUNT(CustomerID)       Country
    1                     London
    1                     Los Angels
    2                     New York
 */


-- The following SQL statement lists the number of customers in each country sorted high to low
SELECT COUNT(CustomerID),Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;

/*
COUNT(CustomerID)    Country
        2             New York
        1             London
        1             Los Angels

 */



         --- GROUP BY with JOIN ---
-- The following SQL lists the number of orders sent by each shipper
-- First Join 2 table then group them

SELECT Shippers.ShipperName,COUNT(Orders2.OrderID) AS NumberOfOrders
FROM Orders2 
LEFT JOIN Shippers ON Orders2.ShipperID=Shippers.ShipperID
GROUP BY ShipperName;

/*
ShipperName       NumberOfOrders
Federal Shipping        3
Speedy Express          4
United Package          3

 */







