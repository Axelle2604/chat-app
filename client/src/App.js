import React, { Component } from 'react';

import Begin from './components/Begin';
import ChatRoom from './components/ChatRoom';

import { receiveMessage } from './services/socket';

class App extends Component {
  state = {
    chatState: 'BEGIN',
    userName: '',
    prevMessages: [],
  };
  componentDidMount() {
    receiveMessage(prevMessages => {
      this.setState({ prevMessages });
    });
  }

  changeInputUserName = ({ target: { value } }) =>
    this.setState({
      userName: value,
    });

  onClickChat = () => {
    if (!this.state.userName.length) {
      this.setState({
        userName: Date.now(),
      });
    }
    this.setState({
      chatState: 'CHAT',
    });
  };

  render() {
    const { userName, prevMessages } = this.state;
    const chatState = {
      BEGIN: (
        <Begin
          userName={userName}
          changeInputUserName={this.changeInputUserName.bind(this)}
          onClickChat={this.onClickChat.bind(this)}
        />
      ),
      CHAT: (
        <ChatRoom userName={this.state.userName} prevMessages={prevMessages} />
      ),
    };

    return <div className="App">{chatState[this.state.chatState]}</div>;
  }
}

export default App;
