const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const sockets = [];
const lastMessages = [];
const rooms = new Array(1).fill(1);

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

function nameRoom(tabRooms) {
  const number = randomNumber();
  const isAlreadyExists = tabRooms.find(room => room === number);
  return !isAlreadyExists ? number : nameRoom(tabRooms);
}

const createNewRoom = () => {
  rooms.push(nameRoom(rooms));
};

const deleteRoom = roomName => {
  index = rooms.findIndex(room => room === roomName);
  rooms.splice(index, 1);
};

const sendMessageToServerAndBroadcastIt = (roomName, messageObj) => {
  lastMessages.push(messageObj);
  roomIndex = rooms.indexOf(roomName);
  io.sockets.in(rooms[roomIndex]).emit('serverBroadcastAMessage', messageObj);
};

io.on('connection', socket => {
  sockets.push(socket);
  io.sockets.emit('updateRoomsTab', rooms);

  socket.on('createRoom', () => {
    createNewRoom();
    io.sockets.emit('updateRoomsTab', rooms);
  });

  socket.on('deleteRoom', roomName => {
    deleteRoom(roomName);
    io.sockets.emit('updateRoomsTab', rooms);
  });

  socket.on('joinRoom', (roomName, userName) => {
    const messageObj = {
      userName: 'NOTIFICATION CHAT',
      message: `${userName} is connected to the chat.`,
    };

    roomIndex = rooms.indexOf(roomName);
    socket.join(rooms[roomIndex]);
    lastMessages.push(messageObj);
    socket.emit('serverBroadcastPrevMessages', lastMessages);
  });

  socket.on('leaveRoom', (roomName, userName) => {
    const messageObj = {
      userName: 'NOTIFICATION CHAT',
      message: `${userName} has left the chat.`,
    };
    sendMessageToServerAndBroadcastIt(roomName, messageObj);

    roomIndex = rooms.indexOf(roomName);
    socket.leave(rooms[roomIndex]);
  });

  socket.on('chatterSendAMessage', (messageObj, roomName) => {
    sendMessageToServerAndBroadcastIt(roomName, messageObj);
  });
});

server.listen(8080, () => console.log('server started'));
