/*
fs.writeFile() method is used to replace  existing writeFile
*/
var fs=require("fs");
fs.writeFile("UpdatedByWriteFile00.txt","Ha ha ha I have replaced the previous text :) ",function(err){
  if (err) throw err;
  console.log("Text replaced!");
});
