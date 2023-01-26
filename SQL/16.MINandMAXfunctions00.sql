-- sql MIN() and MAX() functions
-- MIN() returns the smallest value of the selected column
-- MAX() returns the largest valure of the selected column

SELECT * FROM Products;

/*
productID       productName     supplierID      categoryID      unit
price
1       Chais   1       1       10 boxes x 20 bags      18
2       Chang   1       1       24-12 oz bottles        23
3       Thai soup       1       2       2x1:1 bag       34
4       Ice cream       1       2       10 x 1  28
 */

SELECT MAX(price) AS LargestPrice FROM Products;
 
--LargestPrice
--34

SELECT MIN(price) AS LowestPrice FROM Products;
 --LowestPrice
 --18
