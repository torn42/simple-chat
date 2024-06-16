import React, { FC, useState } from 'react';
import axios from 'axios';
import { JoinData } from '../types';

// import socket from '../socket.ts';

interface JoinBlockProps {
  onLogin: (obj: JoinData) => void;
}

export const JoinBlock: FC<JoinBlockProps> = ({ onLogin }) => {
  const [roomId, setRoomId] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert('Неверные данные');
    }
    const obj = {
      roomId,
      userName,
    };
    setIsLoading(true);
    await axios.post('/rooms', obj);
    onLogin(obj);
  };
  return (
    <div className="join-block">
      <input type="text"
             placeholder="Room ID"
             value={roomId}
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
      />
      <button disabled={isLoading} onClick={onEnter} className="btn btn-success">
        {isLoading ? 'ВХОД...' : 'ВОЙТИ'}
      </button>
    </div>
  );
};