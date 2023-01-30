-- COUNT() , AVG() , SUM() in SQL

-- COUNT() function returns the number of rows that matches a specefies criterion.
-- AVG()  returns the average value of a numeric column
-- SUM() returns the total sum of a numeric column.


SELECT COUNT(productID) FROM Products;
--COUNT(productID)
--4

SELECT AVG(price) FROM Products;
 --AVG(price)
 --25.7500

 SELECT SUM(price) FROM Products;
 --SUM(price)
 --103


