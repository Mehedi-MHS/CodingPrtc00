var http=require("http");
var url=require("url");
var fs=require("fs");
http.createServer(function(req,res){
  var q = url.parse(req.url,true);
  console.log(req.url);
  var filename="."+q.pathname;
  fs.readFile(filename,function(err,data){
    if (err) {
      res.writeHead(404,{"Content-Type":"text/html"});
    return  res.end("<h1> 404 <br>  Page Not Found");
    }
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(data);
    return res.end();
  });
}).listen(3000);
console.log("server started at port 3000. visit : http://localhost:3000/summer.html  and  http://localhost:3000/winter.html");