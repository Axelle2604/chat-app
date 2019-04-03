import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:8080');

export const serverBroadcastPrevMessages = callback =>
  socket.on('serverBroadcastPrevMessages', lastMessages =>
    callback(lastMessages)
  );

export const serverBroadcastAMessage = callback =>
  socket.on('serverBroadcastAMessage', messageObj => callback(messageObj));

export const chatterSendAMessage = (messageObj, roomName) => {
  socket.emit('chatterSendAMessage', messageObj, roomName);
};

export const joinRoom = (roomName, userName) => {
  socket.emit('joinRoom', roomName, userName);
};

export const deleteRoom = roomName => {
  socket.emit('deleteRoom', roomName);
};

export const createRoom = newRoom => {
  socket.emit('createRoom', newRoom);
};

export const updateRoomsTab = cb => {
  socket.on('updateRoomsTab', roomsTab => cb(roomsTab));
};

export const userLeavesRoom = (roomName, userName) => {
  socket.emit('leaveRoom', roomName, userName);
};
