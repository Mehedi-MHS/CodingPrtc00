-- sql combine and or not operators

select * from Persons where not FirstName="John" and not city="Los Angels";

/*
PersonID        FirstName       LastName        Address City
2       Lorem   Ipsum   1299 Mountain view      New York
 */
 
 select * from Persons where not FirstName="John" and (PersonID=2 or PersonID=4);

/*
PersonID        FirstName       LastName        Address City
2       Lorem   Ipsum   1299 Mountain view      New York
 */


