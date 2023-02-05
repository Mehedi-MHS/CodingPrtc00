/*

SQL CHECK Constraint
The CHECK constraint is used to limit the value range that can be placed in a column.

If you define a CHECK constraint on a column it will allow only certain values for this column.

If you define a CHECK constraint on a table it can limit the values in certain columns based on values in other columns in the row.

SQL CHECK on CREATE TABLE
The following SQL creates a CHECK constraint on the "Age" column when the "Persons" table is created. The CHECK constraint ensures that the age of a person must be 18, or older:

MySQL:

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
);
SQL Server / Oracle / MS Access:

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int CHECK (Age>=18)
);
To allow naming of a CHECK constraint, and for defining a CHECK constraint on multiple columns, use the following SQL syntax:

MySQL / SQL Server / Oracle / MS Access:

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);


SQL CHECK on ALTER TABLE
To create a CHECK constraint on the "Age" column when the table is already created, use the following SQL:

MySQL / SQL Server / Oracle / MS Access:

ALTER TABLE Persons
ADD CHECK (Age>=18);
To allow naming of a CHECK constraint, and for defining a CHECK constraint on multiple columns, use the following SQL syntax:

MySQL / SQL Server / Oracle / MS Access:

ALTER TABLE Persons
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');
DROP a CHECK Constraint
To drop a CHECK constraint, use the following SQL:

SQL Server / Oracle / MS Access:

ALTER TABLE Persons
DROP CONSTRAINT CHK_PersonAge;

*/


create table demo1(
    ID int not null,
    FirstName varchar(255) not null,
    Age int,
    CHECK (Age>=18)
);
--Query OK, 0 rows affected (0.027 sec)


insert into demo1 values
     (1,"aaa",19),
     (2,"bbb",15), -- Here age is less than 18 so it will show error. and insert will fail
     (3,"ccc",21);
--ERROR 4025 (23000): CONSTRAINT `CONSTRAINT_1` failed for `DB001`.`demo1`

insert into demo1 values
(1,"aaa",19),
(2,"bbb",18),
(3,"ccc",21);
--Query OK, 3 rows affected (0.004 sec)
--Records: 3  Duplicates: 0  Warnings: 0

select * from demo1;
/*
+----+-----------+------+
| ID | FirstName | Age  |
+----+-----------+------+
|  1 | aaa       |   19 |
|  2 | bbb       |   18 |
|  3 | ccc       |   21 |
+----+-----------+------+
3 rows in set (0.001 sec)

*/


