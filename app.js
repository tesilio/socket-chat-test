//
//
// const app = require('express')();
// const http = require('http').createServer(app);
// const io = require('socket.io')(http);
//
//
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/test.html');
// });
// io.on('connection', (socket) => {
//   socket.on('chat', chat);
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });
// http.listen(3000, () => {
//   console.log('Connected at 3000');
// });


const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const chat = require('./chat');


const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/test.html');
});
io.on("connection", (socket) => {
  console.log(socket.handshake);
  socket.on('chat', (data) => {
    chat(socket, data);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

httpServer.listen(3000, () => {
  console.log('Connected at 3000');
});
