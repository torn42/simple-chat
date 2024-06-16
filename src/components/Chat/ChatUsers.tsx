import React, { FC } from 'react';

interface UserListProps {
  roomId: string;
  users: string[];
}

export const ChatUsers: FC<UserListProps> = ({ roomId, users }) => {
  return (
    <div className="chat-users">
      Комната: <b>{roomId}</b>
      <hr />
      <b>Онлайн ({users.length}):</b>
      <ul>
        {users.map((name: string, index: number) => (
          <li key={name + index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};