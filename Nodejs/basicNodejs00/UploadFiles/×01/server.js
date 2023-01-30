var http=require("http");
var formidable=require("formidable");
var fs=require("fs");
http.createServer(function (req,res) {
  if(req.url == "/fileupload" ){
    var form=new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
      var oldpath=files.filetoupload.path;
      var newpath=__dirname+"/Uploads/"+files.filetoupload.name;
    
     fs.rename(oldpath,newpath,function(err){
        if(err) throw err; 
        res.writeHead(200,{"Content-Type":"text/html"});
     
        res.write("File uploaded and moved successfully!");
        res.end();
      }); 
       
      /* console.log( " old path : "+ oldpath +" newpath : "+newpath);
       res.end(); */
    });
  } else {
    res.writeHead(200,{"Content-Type":"text/html"});
   var data=`<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width =device-width,initial-scale=1">
    <title>Nodejs file upload using FormIdable module</title>
  </head>
  <body>
    <p>Nodejs file upload</p>
    
    <form action="/fileupload" method="post" enctype="multipart/form-data">
      <input type="file" name="filetoupload"/><br>
      <input type="submit" />
    </form>
  </body>
</html>`;
    res.write(data);
    return res.end();
  }
}).listen(3000);
console.log("Server started at port 3000");