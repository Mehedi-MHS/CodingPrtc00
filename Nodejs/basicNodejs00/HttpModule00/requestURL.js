var http=require("http");
http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"});
  res.write(req.url);
  res.end();
}).listen(3000);
console.log("server started at port 3000");

/*
*searched : http://localhost:3000
*output : /
*searched : http://localhost:3000/login
*output : /login
*/