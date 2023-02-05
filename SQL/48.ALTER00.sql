
/*
ALTER TABLE:
---------------

The ALTER TABLE command adds, deletes, or modifies columns in a table.

The ALTER TABLE command also adds and deletes various constraints in a table.

The following SQL adds an "Email" column to the "Customers" table:

Example
ALTER TABLE Customers
ADD Email varchar(255);
The following SQL deletes the "Email" column from the "Customers" table:

Example
ALTER TABLE Customers
DROP COLUMN Email;
ALTER COLUMN
The ALTER COLUMN command is used to change the data type of a column in a table.

The following SQL changes the data type of the column named "BirthDate" in the "Employees" table to type year:

Example
ALTER TABLE Employees
ALTER COLUMN BirthDate year;

*/

-- ADD new column at the end of column
ALTER TABLE demo1
ADD age int;

SELECT * FROM demo1;

-- DELETE column
ALTER TABLE demo1
DROP COLUMN age;

-- Change column name
ALTER TABLE demo1
ALTER COLUMN City Address;


