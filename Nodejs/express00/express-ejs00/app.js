const express=require("express");
const app=express();
var path = require("path");
app.set("views",path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('./public'));
app.get("/",function(req,res){
	res.render('pages/home',{quote:'Honesty is the best policy'});
});
app.listen(3000,function(){
	console.log("Express server started at port 3000");
});
