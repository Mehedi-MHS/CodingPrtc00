/*
SQL Stored Procedures for SQL Server
What is a Stored Procedure?
A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.

So if you have an SQL query that you write over and over again, save it as a stored procedure, and then just call it to execute it.

You can also pass parameters to a stored procedure, so that the stored procedure can act based on the parameter value(s) that is passed.

Stored Procedure Syntax
CREATE PROCEDURE procedure_name
AS
sql_statement
GO;


Execute a Stored Procedure
EXEC procedure_name;
 */



--The following SQL statement creates a stored procedure named
--"SelectAllCustomers" that selects all records from the "Customers"table:


DELIMITER $$
 
CREATE PROCEDURE SelectAllCustomers()
 BEGIN
    SELECT * FROM Customers
END $$

DELIMITER;


CALL SelectAllCustomers();










