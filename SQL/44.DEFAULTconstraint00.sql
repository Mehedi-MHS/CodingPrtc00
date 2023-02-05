
/*

SQL DEFAULT Constraint:
------------------------
The DEFAULT constraint is used to set a default value for a column.

The default value will be added to all new records, if no other value is specified.

SQL DEFAULT on CREATE TABLE
The following SQL sets a DEFAULT value for the "City" column when the "Persons" table is created:

My SQL / SQL Server / Oracle / MS Access:

CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255) DEFAULT 'Sandnes'
);
The DEFAULT constraint can also be used to insert system values, by using functions like GETDATE():

CREATE TABLE Orders (
    ID int NOT NULL,
    OrderNumber int NOT NULL,
    OrderDate date DEFAULT GETDATE()
);
SQL DEFAULT on ALTER TABLE
To create a DEFAULT constraint on the "City" column when the table is already created, use the following SQL:

MySQL:

ALTER TABLE Persons
ALTER City SET DEFAULT 'Sandnes';
SQL Server:

ALTER TABLE Persons
ADD CONSTRAINT df_City
DEFAULT 'Sandnes' FOR City;

*/

create table demoDEFAULT1(
   ID int NOT NULL AUTO_INCREMENT,
   FirstName varchar(50) NOT NULL,
   City varchar(50) DEFAULT "Noakhali" ,
   PRIMARY KEY (ID) -- PRIMARY KEY is most important,otherwise table creation will fail.
   );
--Query OK, 0 rows affected (0.042 sec)

insert into demoDEFAULT1 (FirstName,City) values ("Lorem","London"), ("Ipsum",""), ("Dolor","Kajakistan");
--Query OK, 3 rows affected (0.012 sec)
--Records: 3  Duplicates: 0  Warnings: 0

select * from demoDEFAULT1;                                +----+-----------+------------+

/*

| ID | FirstName | City       |
+----+-----------+------------+
|  1 | Lorem     | London     |
|  2 | Ipsum     |            |
|  3 | Dolor     | Kajakistan |
+----+-----------+------------+
3 rows in set (0.001 sec)

*/

insert into demoDEFAULT1 (FirstName) values ("Lorem2"), ("Ipsum");
--Query OK, 2 rows affected (0.014 sec)
--Records: 2  Duplicates: 0  Warnings: 0


select * from demoDEFAULT1;
/*
+----+-----------+------------+
| ID | FirstName | City       |
+----+-----------+------------+
|  1 | Lorem     | London     |
|  2 | Ipsum     |            |
|  3 | Dolor     | Kajakistan |
|  4 | Lorem2    | Noakhali   |
|  5 | Ipsum     | Noakhali   |
+----+-----------+------------+
5 rows in set (0.001 sec)

*/





