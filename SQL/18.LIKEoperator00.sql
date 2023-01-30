 --The SQL LIKE Operator:
 --======================
 --The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.
 --
 --There are two wildcards often used in conjunction with the LIKE operator:
 --
 -- The percent sign (%) represents zero, one, or multiple characters
 -- The underscore sign (_) represents one, single character

SELECT PersonID,FirstName,LastName 
FROM Persons
WHERE FirstName LIKE 'J%';

/*
PersonID        FirstName       LastName
1       John    Doe
3       Jennifer        James
4       John    Dull
 */

SELECT PersonID,FirstName,LastName 
FROM Persons
WHERE FirstName LIKE '_o%';

/*
PersonID  FirstName    LastName
1       John          Doe
2       Lorem        Ipsum
4       John         Dull
 */


SELECT PersonID,FirstName,Address
FROM Persons
WHERE Address LIKE '%Mountain%';

/*
PersonID        FirstName       Address
1       John    1000 Mountain View
2       Lorem   1299 Mountain view
3       Jennifer        1000 Mountain View
6       Updated John    1000 Mountain  View
 */








 --Here are some examples showing different LIKE operators with '%' and '_' wildcards:
 --
 --LIKE Operator	Description
 --WHERE CustomerName LIKE 'a%'	Finds any values that start with "a"
 --WHERE CustomerName LIKE '%a'	Finds any values that end with "a"
 --WHERE CustomerName LIKE '%or%'	Finds any values that have "or" in any position
 --WHERE CustomerName LIKE '_r%'	Finds any values that have "r" in the second position
 --WHERE CustomerName LIKE 'a_%'	Finds any values that start with "a" and are at least 2 characters in length
 --WHERE CustomerName LIKE 'a__%'	Finds any values that start with "a" and are at least 3 characters in length
 --WHERE ContactName LIKE 'a%o'	Finds any values that start with "a" and ends with "o"
