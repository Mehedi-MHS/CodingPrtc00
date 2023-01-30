var http=require("http");
var formidable=require("formidable");
var fs=require("fs");
var path=require("path");
http.createServer(function (req,res) {
  if(req.url=="/upload" && req.method.toLowerCase()=="post" ){
   const form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
      if(err) console.log(err);
     /* var oldpath=files.mhs.path;
      var newpath=path.join(__dirname,"Uploads")+"/"+files.mhs.name;
      var rawData=fs.readFileSync(oldpath);
      fs.writeFile(newpath,rawData,function(err){
        if (err) console.log(err);
         return res.send("File uoloaded successfully!");
      }); 
      */
      res.writeHead(200,{"Content-Type":"text/html"});
      var f=Object.entries(fields);
      /*for (var i = 0; i < f.length; i++) {
        console.log("\n fields : "+f[i][0]);
      }
      */
      res.write(f);
      var fi=Object.entries(files);
      /*for (var i = 0; i < fi.length; i++) {
        console.log("\n files : "+fi[i][0]);
      }*/
        res.write(fi);
      
    
      
    });
  } else {
    res.writeHead(200,{"Content-Type":"text/html"});
   var data= fs.readFile("index.html",function(err,data){
     if(err) throw err;
     res.write(data);
     return res.end();
   });
  }
}).listen(3000);
console.log("Server started at port 3000");