/*
The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
*/
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
  fs.appendFile("appendfile.txt","This file was created using appendFile method",function(err){
    if (err) throw err;
    console.log("File Saved");
  });
}).listen(3000);
console.log("server listening at port 3000");