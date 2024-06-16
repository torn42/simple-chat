import React, { useReducer } from 'react';
import { JoinBlock } from './components/JoinBlock';
import joinReducer from './joinReducer';
import { JoinData } from './types';

import socket from './socket';
import { Chat } from './components/Chat';
import { newMessage, setMessages, setUsers, userJoin } from './action-creators';
import axios from 'axios';

function App() {

  const [state, dispatch] = useReducer(joinReducer, {
    joined: false,
    roomId: '',
    userName: '',
    users: [],
    messages: [],
  });

  const onLogin = async (obj: JoinData) => {
    dispatch(userJoin(obj));
    socket.emit('ROOM:JOIN', obj);
    const { data } = await axios.get(`/rooms/${obj.roomId}`);
    dispatch(setUsers(data.users));
    dispatch(setMessages(data.messages));
  };

  React.useEffect(() => {
    socket.on('ROOM:SET_USERS', (users: string[]) => dispatch(setUsers(users)));
    socket.on('ROOM:NEW_MESSAGE', (message) => dispatch(newMessage(message)));
  }, []);

  window.socket = socket;

  return (
    <div className="wrapper">
      {!state.joined ?
        <JoinBlock onLogin={onLogin} /> :
        <Chat {...state} />
      }
    </div>
  );
}

export default App;