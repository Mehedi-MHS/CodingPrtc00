-- sql null values
-- If a field left blank during insertion,It's value will be Null. 
-- Best way to check Null values : IS NULL
-- Non Null value : IS NOT NULL

SELECT PersonID,FirstName,LastName FROM Persons WHERE city IS NULL;

/*
PersonID    FirstNam   LastName
5              Tim       Don
 */


SELECT PersonID,FirstName,LastName FROM Persons WHERE city IS NOT NULL;
/*

PersonID   FirstName    LastName
1            John        Doe
2            Lorem       Ipsum
3            Jennifer    James
4            John         Dull

 */


