const express=require("express");
var crud=require('./helper/crud');
const app=express();
app.use(express.json());

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/addUser",function(req,res){
  
  crud.add(req.body)
});



const port=process.env.PORT||3000;
app.listen(port,function(){
  console.log(`Server listening port ${port}`);
});
