const express=require("express");
const multer=require("multer");
const mysql=require("mysql");
const path=require("path");
const app=express();
app.use(express.static("./uploads"));

let txt="";
//basic multer settings
const storage=multer.diskStorage({
  destination:function(req,file,callback){
    callback(null,"./uploads");
  },
  filename:function(req,file,callback){
    callback(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname));
  }
});

//database settings
var connection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"db00"
});
connection.connect(function(err){
  if(err){
    console.error("err connecting - "+err.stack);
    return;
  }
  console.log("successfully connected to database - threadID %s",connection.threadId)
});

//handling routes
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

  var upload=multer({storage:storage});
app.post("/uploadfile",upload.single("mhs"),function(req,res){
  res.set("Content-Type","text/html");
  res.set("Access-Control-Expose-Headers","Content-Type");
  
  var file_name=req.file.filename;
  //console.log(file_name);
  let sql="INSERT INTO ??(??) VALUES(?)";
  let inserts=["singleFileUpload01","filePath",file_name];
  sql=mysql.format(sql,inserts);
  connection.query(sql,function(err,rows,fields){
    if(err){
      console.log(err);
    }
    txt+="Affected rows : "+rows.affectedRows+"<br/>";
    res.send(txt);
  });
  console.log(txt)
  //getting data from database
  var sql2="SELECT * FROM ??";
  var selects=["singleFileUpload01"];
  sql2=mysql.format(sql2,selects);
  connection.query(sql2,function(err,rows,fields){
    if(err){
      console.log(err);
    }
    txt+="<br/>Image name : "+results[0].filePath;
    console.log(txt);
  });
  
  console.log(txt);
  res.send(txt);
  res.end();
  connection.end();
});


var port=process.env.PORT||3000;
app.listen(port,()=>console.log("server is listening at port %s ",port));



