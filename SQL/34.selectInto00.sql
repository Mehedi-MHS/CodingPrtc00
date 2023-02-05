/*
The SQL SELECT INTO Statement
The SELECT INTO statement copies data from one table into a new table.

SELECT INTO Syntax
Copy all columns into a new table:

SELECT *
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition;


Copy only some columns into a new table:

SELECT column1, column2, column3, ...
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition;
The new table will be created with the column-names and types as defined in the old table. You can create new column names using the AS clause.
*/




-- The following SQL statement creates a backup copy of Customers table

SELECT * INTO CustomersBackup2023 FROM Customers;

-- Not working
