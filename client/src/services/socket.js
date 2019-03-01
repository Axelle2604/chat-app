import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:8080');

export const receiveMessage = callback =>
  socket.on('message', message => callback(message));

export const sendMessage = message => {
  socket.emit('newMessage', message);
};
