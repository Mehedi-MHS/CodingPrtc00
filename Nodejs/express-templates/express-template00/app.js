const express=require("express");
const app=express();
app.get("/",function(req,res){
	res.send("<h1>Express 02 Template</h1>");
});
app.listen(3000,function(){
	console.log("Express server started");
});
