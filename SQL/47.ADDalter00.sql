

--The ADD command in SQL is used to add a new column in an existing table.

select * from demo1;
/*
+----+-----------+------+
| ID | FirstName | Age  |
+----+-----------+------+
|  1 | aaa       |   19 |
|  2 | bbb       |   18 |
|  3 | ccc       |   21 |
+----+-----------+------+
*/


ALTER TABLE demo1
ADD City varchar(255);


select * from demo1;

/*
ID      FirstName  Age  City
1       aaa         19  NULL
2       bbb         18  NULL
3       ccc         21  NULL
*/

