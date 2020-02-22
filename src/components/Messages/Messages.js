import React from 'react';
import { Segment, Comment } from 'semantic-ui-react'
import firebase from "../../firebase";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import Message from "./Message";
class Messages extends React.Component {
  state = {
    messagesRef: firebase.database().ref('messages'),
    messages: [],
    channel: this.props.currentChannel,
    user: this.props.currentUser,
    messageLoading: true,
    progressBar: false,
    nonUniqueUsers: '',
  }

  componentDidMount() {
    const { channel, user } = this.state;

    if (channel && user) {
      this.addListeners(channel.id)
    }
  }

  addListeners = channelId => {
    this.addMessageListener(channelId);
  }

  addMessageListener = channelId => {
    let loadedMessages = [];
    this.state.messagesRef.child(channelId).on('child_added', snap => {
      loadedMessages.push(snap.val());
      // console.log(loadedMessages);
      this.setState({
        messages: loadedMessages,
        messageLoading: false
      });
      this.countUniqueUsers(loadedMessages)
    });
  }

  countUniqueUsers = messages => {
    const uniqueUsers = messages.reduce((acc, message) => {
      if(!acc.includes(message.user.name)) {
        acc.push(message.user.name)
      }
      return acc;
    }, []);
    const plural = uniqueUsers.length > 1 || uniqueUsers.length === 0;
    const nonUniqueUsers = `${uniqueUsers.length} user${plural ? 's' : ''}`;
    this.setState({ nonUniqueUsers })
  }

  displayMessages = messages => (
    messages.length > 0 && messages.map(message => (
      <Message
        key={message.timestamp}
        message={message}
        user={this.state.user}
      />
    ))
  );

  displayChannelName = channel => channel ? `#${channel.name}` : '';

  isProgressBarVisible = percent => {
    if(percent > 0) {
      this.setState({ progressBar: true})
    }
  }

  render() {
    const { messages, messagesRef, channel, user, progressBar, nonUniqueUsers } = this.state;

    return (
      <React.Fragment>
        <MessagesHeader
          channelName={this.displayChannelName(channel)}
          nonUniqueUsers={nonUniqueUsers}
        />
        <Segment>
          <Comment.Group className={progressBar ? 'messages__progress' : 'messages'}>
            { this.displayMessages(messages) }
          </Comment.Group>
        </Segment>

        <MessageForm 
          messagesRef={messagesRef} 
          currentChannel={channel} 
          currentUser={user} 
          isProgressBarVisible={this.isProgressBarVisible}
        />
           
      </React.Fragment>
    )
  }
}

export default Messages;