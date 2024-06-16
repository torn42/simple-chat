import React, { FC, useRef, useState } from 'react';
import socket from '../../socket';
import { Message } from '../../types';
import { ChatInput } from './ChatInput';
import { ChatMessages } from './ChatMessages';
import { ChatUsers } from './ChatUsers';

interface ChatProps {
  users: string[];
  messages: Message[];
  roomId: string;
  userName: string;
}

export const Chat: FC<ChatProps> = ({ users, messages, roomId, userName }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messageValue, setMessageValue] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onSendMessage = () => {
    const trimmedMessage = messageValue.trim();
    if (trimmedMessage !== '') {
      socket.emit('ROOM:NEW_MESSAGE', {
        userName,
        roomId,
        text: trimmedMessage,
      });
      setMessageValue('');
      textAreaRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (messageValue.trim()) onSendMessage();
    } else if (e.key === 'Enter' && e.shiftKey && !messageValue.trim()) {
      e.preventDefault();
    }
  };

  return (
    <div className="chat">
      <ChatUsers {...{ roomId, users }} />
      <div className="chat-messages">
        <ChatMessages {...{ messages, scrollToBottom, messagesEndRef }} />
        <ChatInput {...{
          textAreaRef,
          messageValue,
          setMessageValue,
          handleKeyDown,
          onSendMessage,
        }}
        />
      </div>
    </div>
  );
};