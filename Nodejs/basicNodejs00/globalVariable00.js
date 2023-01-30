var http=require("http");
var os=require("os"); // to get operating system related info
var server=http.createServer(function(req,res){
  if (req.url=="/") {
    res.writeHead(200,{"Content-Type":"text/HTML"}); //Must add this to view result in webpage. Otherwise result will be shown in only console
    res.end("Directory name : "+ __dirname+ " <br> And file name : "+__filename+ "<br> Free memory : "+os.freemem()
    +"<br> Homedir : "+ os.homedir()
    +"<br> Host name : "+ os.hostname()
     +"<br> Platform : "+ os.platform()
      +"<br> Tmpdir : "+ os.tmpdir()
       +"<br>Type : "+ os.type()
     +"<br>Release : "+ os.release()
       
       );
  }
});
server.listen(3000);
console.log("Server is running at port 3000");

//OUTPUT:
/*
Directory name : /storage/emulated/0/Nodejs00/basicNodejs00
And file name : /storage/emulated/0/Nodejs00/basicNodejs00/globalVariable00.js
Free memory : 80392192
Homedir : /data/data/com.termux/files/home
Host name : localhost
Platform : android
Tmpdir : /data/data/com.termux/files/usr/tmp
Type : Linux
Release : 3.18.35
*/