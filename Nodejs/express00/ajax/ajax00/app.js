const express=require("express");
const app=express();
var path=require("path");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(express.json()); //for post request
app.use(express.urlencoded({extended:true})); //for post request
app.get("/",function(req,res){
  res.render("pages/home");
});
app.post("/ajax",function(req,res){
  var name=req.body.name;
  var str="Hello mr/mrs "+name;
  res.send(str);
});
var port=process.env.PORT||3000;
app.listen(port,function(){
  console.log(`Server started at port ${port}`);
});
/*
//post request without body parser
*/