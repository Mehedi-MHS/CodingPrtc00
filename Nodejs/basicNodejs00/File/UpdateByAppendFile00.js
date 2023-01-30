/*
Append "This is new updated text" to the end of the file "Updatefile00.txt":
*/
var fs=require("fs");
fs.appendFile("Updatefile00.txt","\nThis is new text updated by UpdateByAppendFile00.js",function(err){
  if (err) throw err;
  console.log("File updated");
});