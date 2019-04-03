import React, { Component } from 'react';

import Begin from './components/Begin';
import Rooms from './components/Rooms';
import ChatRoom from './components/ChatRoom';

import {
  joinRoom,
  createRoom,
  updateRoomsTab,
  userLeavesRoom,
  deleteRoom,
} from './services/socket';

import { GlobalBodyStyle, AppContainer } from './appStyled';

const BEGIN = 'BEGIN';
const ROOMS = 'ROOMS';
const CHAT = 'CHAT';

class App extends Component {
  state = {
    chatState: BEGIN,
    userName: '',
    prevMessages: [],
    roomName: null,
    roomsTab: [],
  };

  componentDidMount = () => {
    updateRoomsTab(roomsTab => {
      this.setState({ roomsTab });
    });
  };

  changeInputUserName = ({ target: { value } }) =>
    this.setState({
      userName: value,
    });

  onKeyDownInputUserName = keyCode => {
    keyCode === 13 && this.onClickChat();
  };

  onClickChat = () => {
    if (!this.state.userName.length) {
      this.setState({
        userName: Date.now(),
      });
    }
    this.setState({
      chatState: ROOMS,
    });
  };

  joinRoom = roomName => {
    const { userName } = this.state;
    this.setState(
      {
        roomName,
        chatState: CHAT,
      },
      () => joinRoom(roomName, userName)
    );
  };

  onClickDeleteRoom = roomName => {
    deleteRoom(roomName);
  };

  leaveRoom = (userName, roomName) => {
    userLeavesRoom(userName, roomName);
    this.setState({
      chatState: ROOMS,
      room: null,
    });
  };

  onClickCreateRoom = () => {
    createRoom();
  };

  render() {
    const {
      userName,
      prevMessages,
      roomName,
      roomsTab,
      chatState,
    } = this.state;
    const chatStates = {
      BEGIN: (
        <Begin
          userName={userName}
          changeInputUserName={this.changeInputUserName}
          onClickChat={this.onClickChat}
          onKeyDownInputUserName={this.onKeyDownInputUserName}
        />
      ),
      ROOMS: (
        <Rooms
          onClickCreateRoom={this.onClickCreateRoom}
          joinRoom={this.joinRoom}
          onClickDeleteRoom={this.onClickDeleteRoom}
          roomsTab={roomsTab}
        />
      ),
      CHAT: (
        <ChatRoom
          userName={userName}
          prevMessages={prevMessages}
          roomName={roomName}
          leaveRoom={this.leaveRoom}
        />
      ),
    };

    return (
      <AppContainer>
        <GlobalBodyStyle />
        {chatStates[chatState]}
      </AppContainer>
    );
  }
}

export default App;
