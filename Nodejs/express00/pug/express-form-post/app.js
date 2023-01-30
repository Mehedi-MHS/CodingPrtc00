const express=require("express");
const app=express();
app.set("view engine","pug");
app.use(express.json());
app.get("/",function(req,res){
  res.render("body.pug");
});
app.post("/form",function(req,res){
	const uname=req.body.name;
	res.render("body",{name:uname});
});
app.listen(3000,function(){
	console.log("Express server started at port 3000");
});
