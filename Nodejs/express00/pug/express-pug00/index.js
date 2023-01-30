const express=require("express");
const app=express();
app.set("view engine","pug");
app.get("/",function(req,res){
	res.render("home.pug");
});
app.listen(3000,function(){
	console.log("Express server started");
});
