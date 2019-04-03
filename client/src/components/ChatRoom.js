import React, { Component } from 'react';
import {
  serverBroadcastAMessage,
  chatterSendAMessage,
  serverBroadcastPrevMessages,
} from '../services/socket';
import {
  ChatContainer,
  ChatSubContainer,
  ChatterInput,
  Message,
  HeaderChat,
} from './styled-components/chatRoomStyled';

const addNewMessage = messageObj => ({ messages }) => ({
  messages: [...messages, messageObj],
});

const addPrevMessages = tabMessages => ({ messages }) => ({
  messages: [...messages, ...tabMessages],
});

export default class ChatRoom extends Component {
  state = {
    messages: [],
    newMessage: '',
  };

  componentDidMount = () => {
    this.setState({
      messages: this.props.prevMessages,
    });
    serverBroadcastAMessage(messageObj => {
      this.setState(addNewMessage(messageObj));
    });
    serverBroadcastPrevMessages(lastMessages => {
      this.setState(addPrevMessages(lastMessages));
    });
  };

  changeInputMessage = ({ target: { value } }) =>
    this.setState({
      newMessage: value,
    });

  sendNewMessage = (userName, message) => {
    const { roomName } = this.props;
    message.length > 0 &&
      chatterSendAMessage(
        {
          userName,
          message,
        },
        roomName
      );
    this.setState({
      newMessage: '',
    });
  };

  onKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      this.sendNewMessage(this.props.userName, this.state.newMessage);
    }
  };

  onClickLeaveRoom = () => {
    const { leaveRoom, userName, roomName } = this.props;
    leaveRoom(roomName, userName);
  };

  render() {
    const { messages, newMessage } = this.state;
    const { userName, roomName } = this.props;
    const showMessage = messages.map(({ userName, message }, index) => (
      <Message key={index}>
        <div>{userName} :</div>
        <div>{message}</div>
      </Message>
    ));
    return (
      <ChatContainer>
        <HeaderChat>Room {roomName}</HeaderChat>
        <ChatSubContainer>{showMessage}</ChatSubContainer>
        <ChatterInput>
          <input
            type="text"
            value={newMessage}
            onChange={this.changeInputMessage}
            onKeyDown={this.onKeyDown}
            placeholder={'Type your message.'}
          />
          <button
            onClick={this.sendNewMessage.bind(this, userName, newMessage)}
          >
            <i className="fas fa-paper-plane" />
          </button>
          <button onClick={this.onClickLeaveRoom}>
            <i className="fas fa-sign-out-alt" />
          </button>
        </ChatterInput>
      </ChatContainer>
    );
  }
}
