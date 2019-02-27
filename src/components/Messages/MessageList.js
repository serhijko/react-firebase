import React from 'react';

import MessageItem from './MessageItem';

const MessageList = ({
  messages,
  onEditMessage,
  onRemoveMessage,
  authUser,
}) => (
  <ul>
    {messages.map(message => (
      <MessageItem
        key={message.uid}
        message={message}
        onEditMessage={onEditMessage}
        onRemoveMessage={onRemoveMessage}
        authUser={authUser}
      />
    ))}
  </ul>
);

export default MessageList;
