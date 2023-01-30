/*
The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
*/
var fs=require("fs");
fs.writeFile("writeFile00.txt","This text is written using writeFile() method",function(err){
  if (err) throw err;
  console.log("File saved using writeFile() method");
  
});