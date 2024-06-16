import { ActionTypes, JoinData, Message, ReducerAction } from './types';

export const userJoin = (obj: JoinData): ReducerAction => {
  return { type: ActionTypes.JOINED, payload: obj };
};

export const setUsers = (users: string[]): ReducerAction => {
  return { type: ActionTypes.SET_USERS, payload: users };
};

export const newMessage = (message: Message): ReducerAction => {
  return { type: ActionTypes.NEW_MESSAGE, payload: message };
};

export const setMessages = (messages: Message[]): ReducerAction => {
  return { type: ActionTypes.SET_MESSAGES, payload: messages };
};