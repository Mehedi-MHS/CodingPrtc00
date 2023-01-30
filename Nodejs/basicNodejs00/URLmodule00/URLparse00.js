/*
Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
*/
var url=require("url");
var addr="http://localhost:8080/default.html?year=2021&month=December";
var q=url.parse(addr,true);
console.log("host : "+ q.host);

console.log("pathname : "+ q.pathname);

console.log("search : "+ q.search);

var qdata=q.query;
//returns an object: { year: 2017, month: 'february' }
console.log("year : "+qdata.year + " month : "+qdata.month);


/*OUTPUT
host : localhost:8080
pathname : /default.html
search : ?year=2021&month=December
year : 2021 month : December
*/