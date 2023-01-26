SQL: 
========
-- type 'ss' to run sql file inside neovim
- Statements are case insensitive, 'select' is same as 'SELECT'

- :!mysql -u [password] -p[password] [databaseName] > % 
to run sql file inside neovim. But make sure to start server in another tab using $mysqld command
Here % is used instead of fileName.

- $mysqladmin -u [password] -p shutdown
to stop sql server.

- Some of The Most Important SQL Commands:
  ----------------------------------------
SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index


INSERT INTO:
-------------
INSERT INTO Syntax
It is possible to write the INSERT INTO statement in two ways:

1. Specify both the column names and the values to be inserted:

---
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
---

2. If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the INSERT INTO syntax would be as follows:

---
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
---

        Operators in the WHERE Clause:
    =======================================
The following operators can be used in the WHERE clause:

Operator	Description	Example
=	Equal	
>	Greater than	
<	Less than	
>=	Greater than or equal	
<=	Less than or equal	
<>	Not equal. Note: In some versions of SQL this operator may be written as !=	
BETWEEN	Between a certain range	
LIKE	Search for a pattern	
IN	To specify multiple possible values for a column


Note: 'WHERE condition'  is important for update , delete
=====  otherwise all the records will be updated/deleted.


-SELECT TOP , LIMIT:
--------------------
Note: Not all database systems support the SELECT TOP clause. MySQL supports the LIMIT clause to select a limited number of records, while Oracle uses FETCH FIRST n ROWS ONLY and ROWNUM.

--MIN() and MAX() functions : returns smallest or largest value from a selected column
  select MIN(column_name)  
  from table_name
  where condition;


