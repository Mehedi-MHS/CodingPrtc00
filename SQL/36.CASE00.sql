
--The SQL CASE Expression:

/*
The CASE expression goes through conditions and returns a value when the first condition is met (like an if-then-else statement). So, once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the ELSE clause.

If there is no ELSE part and no conditions are true, it returns NULL.

CASE Syntax
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END;

*/

--The following SQL goes through conditions and returns a value when the first condition is met:
SELECT orderID,quantity,
CASE WHEN quantity > 10 THEN 'Quantity is greater than 30'
 WHEN quantity < 10 THEN 'Quantity is equals to 10'
 ELSE 'Quantity is under 10'
END AS QuantityText
FROM OrderDetails;


/*
orderID quantity        QuantityText                                        10308   12      Quantity is greater than 30                                 10309   10      Quantity is under 10
10310   5       Quantity is equals to 10
10311   10      Quantity is under 10                                        10312   40      Quantity is greater than 30
10313   6       Quantity is equals to 10
 */




/*
The following SQL will order the customers by City. However, if City is NULL, then order by Country:

Example
SELECT CustomerName, City, Country
FROM Customers
ORDER BY
(CASE
    WHEN City IS NULL THEN Country
    ELSE City
END);
 */





