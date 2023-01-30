var http=require("http");
http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/HTML"});
  res.end("<h1 style='color:green'>Hello world bro</h1>");
}).listen(3000);
console.log("Server running at port 3000");