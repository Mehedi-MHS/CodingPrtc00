const express = require('express');
const app = express();
app.use(express.static("./public"));
const server = app.listen(3000,console.log("Socket.io Hello World server started!"));
const io = require('socket.io')(server);
io.on('connection', (socket) => {
 //console.log("Client connected!");
 socket.on('message-from-client-to-server', (msg) => {
 console.log(msg);
 })
 socket.emit('message-from-server-to-client', 'Hello World!');
});
app.get("/",(req,res)=> res.send(/pages/));