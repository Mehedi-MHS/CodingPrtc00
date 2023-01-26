/*
The SQL WHERE Clause:
========================

The WHERE clause is used to filter records.

It is used to extract only those records that fulfill a specified condition.

WHERE Syntax
SELECT column1, column2, ...
FROM table_name
WHERE condition;
Note: The WHERE clause is not only used in SELECT statements, it is also used in UPDATE, DELETE, etc.!
 */


--text fields needs quotation. Here FirstName is a text field.

 SELECT * FROM Persons WHERE FirstName="Jennifer";

/*

PersonID    FirstName   LastName    Address               City
3           Jennifer    James   1000 Mountain View      Los Angels */


--don't use quotation in number fields. PersonID is a number field
SELECT * FROM Persons WHERE PersonID=2;
/*
PersonID   FirstName  LastName     Address              City
2            Lorem   Ipsum       1299 Mountain view    New York
 */









