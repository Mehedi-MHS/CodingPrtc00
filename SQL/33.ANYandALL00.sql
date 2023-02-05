/*
The SQL ANY and ALL Operators:
-------- -------- -----------
The ANY and ALL operators allow you to perform a comparison between a single column value and a range of other values.
 */

                      --- The ANY operator: ---
/*

returns a boolean value as a result
returns TRUE if ANY of the subquery values meet the condition
ANY means that the condition will be true if the operation is true for any of the values in the range.

ANY Syntax
SELECT column_name(s)
FROM table_name
WHERE column_name operator ANY
  (SELECT column_name
  FROM table_name
  WHERE condition);
Note: The operator must be a standard comparison operator (=, <>, !=, >, >=, <, or <=).

*/


-- The following SQL statement lists the ProductName if it finds ANY records in the Orders table has Price equal to 34 (this will return TRUE because the Price column has some values of 34):
SELECT productName FROM Products
WHERE productID=ANY (
    SELECT productID FROM OrderDetails
    WHERE quantity=10
);

/*
productName
Chang
Ice cream
 */


-- The following SQL statement lists the ProductName if it finds ANY records in the OrderDetails table has Quantity larger than 99 (this will return TRUE because the Quantity column has some values larger than 10):

SELECT productName FROM Products
WHERE productID = ANY (
    SELECT productID FROM OrderDetails
    WHERE  quantity > 10
);

/*
productName
Chais
Noodles
 */




         --- The ALL operator ---

/*
The ALL operator:
returns a boolean value as a result
returns TRUE if ALL of the subquery values meet the condition
is used with SELECT, WHERE and HAVING statements
ALL means that the condition will be true only if the operation is true for all values in the range. 

ALL Syntax With SELECT
SELECT ALL column_name(s)
FROM table_name
WHERE condition;
ALL Syntax With WHERE or HAVING
SELECT column_name(s)
FROM table_name
WHERE column_name operator ALL
  (SELECT column_name
  FROM table_name
  WHERE condition);
Note: The operator must be a standard comparison operator (=, <>, !=, >, >=, <, or <=).

*/


--The following SQL statement lists ALL the product names:

SELECT ALL productName 
FROM Products
WHERE TRUE;

/*
productName
Chais
Chang
Thai soup
Ice cream
Noodles
Hydrabadi biriyani */


--The following SQL statement lists the ProductName if ALL the records
--in the OrderDetails table has Quantity equal to 10. This will of 
--course return FALSE because the Quantity column has many different 
--values (not only the value of 10):


SELECT productName FROM Products
WHERE productID = ALL (
    SELECT productID FROM OrderDetails
    WHERE quantity=10
);

-- returns nothing



