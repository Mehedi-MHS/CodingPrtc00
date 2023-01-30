const express=require('express');
const app=express();
app.get('/',function(req,res){
	res.send('<h1>Hello world</h1>');
});
var server=app.listen(5000,function(){
	console.log('Express server started');
});
