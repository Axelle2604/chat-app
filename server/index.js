const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const sockets = [];
const lastMessages = [];

broadcast = message => {
  sockets.forEach(socket => socket.emit('message', message));
};

io.on('connection', socket => {
  sockets.push(socket);
  socket.emit('message', lastMessages);
  socket.on('newMessage', message => {
    if (lastMessages.length < 5) {
      lastMessages.push(message);
    } else {
      lastMessages.shift();
      lastMessages.push(message);
    }
    broadcast(message);
  });
});

server.listen(8080, () => console.log('server started'));
