const mysql=require("mysql");
const connection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"test00"
});
connection.connect(function(err,results){
  if (err){
    throw new Error(err);
  }
});
connection.query("SELECT * FROM Person",function(err,rows){
  for (var i =0;i<rows.length;i++){
    console.log("Name : "+rows[i].name +" - id : "+rows[i].id);  }
});
connection.end();
