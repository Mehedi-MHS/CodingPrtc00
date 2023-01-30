/*
Rename Files
To rename a file with the File System module,  use the fs.rename() method.
The fs.rename() method renames the specified file:
*/
var fs=require("fs");
fs.rename("renamefile00.txt","fileRenamed00.txt",function(err){
  if(err) throw err;
  console.log("File renamed");
});