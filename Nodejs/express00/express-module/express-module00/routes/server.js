module.exports=function(port){
  const express=require("express");
  const app=express();
  app.get("/",function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
  res.send("<h1>Module is working properly !!!</h1>");
  });
app.listen(port,()=>console.log(`Server started at port ${port}`));
}