const MongoClient=require("mongodb").MongoClient;
var url ='mongodb://localhost:27017/test';
MongoClient.connect(url,function(err,db){
  if (err) {
    throw new Error(err);
  }
  console.log("Connected to mongodb");
  db.close();
});