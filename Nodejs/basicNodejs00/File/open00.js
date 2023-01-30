/*
The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
*/
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
  fs.open("open00.txt","w",function(err,file){
    if (err) throw err;
    console.log("File saved");
  });
}).listen(3000);
console.log("server started at port 3000");