/*var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});
*/

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function (err, db) {
 if (err) throw new Error(err);
 db.collection('myCollection').insertOne({ // Insert method 'insertOne'
 "myFirstDocument": {
 "greetings": "Hellu",
 "farewell": "Bye"
 }
 }, function (err, result) {
 if (err) throw new Error(err);
 console.log("Inserted a document into the myCollection collection!");
 db.close(); // Don't forget to close the connection when you are done
 });
});
/*
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function (err, db) {
 if (err) throw new Error(err);
 var cursor = db.collection('myCollection').find(); // Read method 'find'
 cursor.each(function (err, doc) {
 if (err) throw new Error(err);
 if (doc != null) {
 console.log(doc); // Print all documents
 } else {
 db.close(); // Don't forget to close the connection when you are done
 }
 });
});
*/