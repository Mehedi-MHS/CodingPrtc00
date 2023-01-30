var http=require("http");
var url=require("url");
http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"});
 var link="http://localhost:8080/?year=2021&month=January";
 
  var q=url.parse(link,true).query;
  res.write(q.month +" "+q.year);
  res.end();
}).listen(3000);
console.log("Server started at port 3000");

/*output
* January 2021
*/