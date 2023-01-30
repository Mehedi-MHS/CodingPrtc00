var http=require("http");
var fs=require('fs');
var url=require('url');
var ext='.html';
var server=http.createServer(function(req,res){
try {
var q=url.parse(req.url,true);
  var filename;
 if (req.url=='/'){
   filename="index.html";
   }else{
    filename="."+q.pathname+ext;
    }
  fs.readFile(filename,function(err,data){
    if(err){
  res.writeHead(404,{'Content-Type':'text/HTML'});
  res.write(filename);
 return  res.end("<h1>Invalid request :(<\h1>");
}
res.writeHead(200,{'Content-Type':'text/html'});
res.write(data);
return res.end();
   });
 }catch(err){
 console.log(err);
 }
 });
server.listen(5000);
console.log('Server is running at port 5000');