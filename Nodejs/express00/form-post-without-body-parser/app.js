//post request without body parser
const express=require("express");
const app=express();
var path=require("path");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(express.json()); //must use this
app.use(express.urlencoded({extended:true})); //must use this
app.get("/",function(req,res){
  res.render("pages/home",{fullname:"....."});
});

app.post("/form",function (req,res){
  const firstname=req.body.firstname;
  const lastname=req.body.lastname;
  var full_name=firstname+" "+lastname;
  res.render("pages/home",{fullname:full_name});
});

app.listen(3000,function(){
	console.log("Express server started at port 3000");
});
