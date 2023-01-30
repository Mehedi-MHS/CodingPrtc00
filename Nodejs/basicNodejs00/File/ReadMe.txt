1 : To read a File → readFile()
2: To write a file → appendFile(),open(),writeFile()
[the open() function takes parameter (w,r,a ,r+ , a+ etc.) ]
*The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
*The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
*The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

3 : Update Files
The File System module has methods for updating files:

fs.appendFile()
fs.writeFile()
*The fs.appendFile() method appends the specified content at the end of the specified file:

4 : Delete Files
To delete a file with the File System module,  use the fs.unlink() method.

The fs.unlink() method deletes the specified file:

5 : Rename Files
To rename a file with the File System module,  use the fs.rename() method.

The fs.rename() method renames the specified file:
