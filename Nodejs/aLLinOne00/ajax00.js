//file: ajax00.js
const express=require("express");
const app=express();
app.use(express.static("public")); //for serving static file.Here homepage
app.use(express.json()); //for post request
app.use(express.urlencoded({extended:true})); // for post request
app.get("/",function(req,res){
	res.sendFile(__dirname+"/"+"public/ajax00.html");
});
app.post("/ajaxpost00",function(req,res){
  res.send("<h1>Hello this is from ajax response </h1>");
});

let port=process.env.PORT||3000;
app.listen(port,function(){
	console.log("Express server started");
});
