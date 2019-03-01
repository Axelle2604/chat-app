import React, { Component } from 'react';

import { receiveMessage, sendMessage } from '../services/socket';

const addNewMessage = newMessage => prevState => ({
  messages: [...prevState.messages, newMessage],
});

export default class ChatRoom extends Component {
  state = {
    messages: [],
    newMessage: '',
  };
  componentDidMount() {
    this.setState({
      messages: this.props.prevMessages,
    });
    receiveMessage(message => {
      this.setState(addNewMessage(message));
    });
  }
  changeInputMessage = ({ target: { value } }) =>
    this.setState({
      newMessage: value,
    });

  sendNewMessage = () => {
    sendMessage({
      userName: this.props.userName,
      message: this.state.newMessage,
    });
    this.setState({
      newMessage: '',
    });
  };

  onKeyDown = e => {
    if (e.key === 'Enter') {
      this.sendNewMessage();
    }
  };

  render() {
    const { messages, newMessage } = this.state;
    const showMessage = messages.map(({ userName, message }, index) => (
      <p key={index}>
        <b>{userName} : </b>
        {message}
      </p>
    ));
    return (
      <div className="App">
        <div>{showMessage}</div>
        <div>
          <input
            type="text"
            value={newMessage}
            onChange={this.changeInputMessage}
            onKeyDown={this.onKeyDown}
          />
          <button onClick={this.sendNewMessage.bind(this)}>send</button>
        </div>
      </div>
    );
  }
}
