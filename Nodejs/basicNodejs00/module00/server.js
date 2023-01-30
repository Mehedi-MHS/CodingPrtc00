var http=require("http");
var dt=require("./firstModule");
http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"});
  res.write("Now the date is : "+ dt.showDate());
  res.end();
}).listen(3000);
console.log("Server listening at port 3000");

/*Output
Now the date is : Fri Dec 24 2021 08:00:37 GMT+0600 (Bangladesh Standard Time)
*/