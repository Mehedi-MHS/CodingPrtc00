var http=require("http");
var os=require("os");
http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"});
  res.write("<h1>TempDir : "+os.tmpdir()+"</h1></br>");
  res.write("<h1>HomeDir : "+os.homedir()+"</h1></br>");
  res.end();
}).listen(3000);
console.log("Listening port 3000");

/*
TempDir : /data/data/com.termux/files/usr/tmp

HomeDir : /data/data/com.termux/files/home
*/