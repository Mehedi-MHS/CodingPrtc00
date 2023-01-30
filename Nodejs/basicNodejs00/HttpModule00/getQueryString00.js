// need to use "url" module
var http=require("http");
var url=require("url");
http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"});
  var q=url.parse(req.url,true).query;
  res.write("Year : "+q.year +" and Month : "+q.month);
  res.end();
}).listen(3000);
console.log("server started at port 3000");
console.log("Search : http://localhost:3000/?year=2021&month=12");

/*
*output : Year :2021 and Month : 12