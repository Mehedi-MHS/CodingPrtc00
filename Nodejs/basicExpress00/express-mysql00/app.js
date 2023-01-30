const mysql=require("mysql");
const connection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"db00"
});
connection.connect(function(err,results){
  if (err){
    throw new Error(err);
  }
});
connection.query("SELECT * FROM mytable",function(err,rows){
  for (var i =0;i<rows.length;i++){
    console.log("Name : "+rows[i].id +" - id : "+rows[i].username +" - email : "+rows[i].email);  }
});
connection.end();
