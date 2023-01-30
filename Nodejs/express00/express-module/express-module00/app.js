var server=require("./routes/server.js");
var port=process.env.PORT||3000;
server(port);