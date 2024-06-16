import React, { FC, useEffect } from 'react';
import { Message } from '../../types';

interface ChatMessagesProps {
  messages: Message[];
  scrollToBottom: () => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export const ChatMessages: FC<ChatMessagesProps> = ({ messages, scrollToBottom, messagesEndRef }) => {

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((message: Message, index: number) => (
        <div key={index} className="message">
          <p>{message.text}</p>
          <div>
            <span>{message.userName}</span>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};