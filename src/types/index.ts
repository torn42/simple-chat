export enum ActionTypes {
  JOINED = 'JOINED',
  SET_USERS = 'SET_USERS',
  NEW_MESSAGE = 'NEW_MESSAGE',
  SET_MESSAGES = 'SET_MESSAGES'
}

export interface JoinState {
  joined: boolean;
  roomId: string;
  userName: string;
  users: string[];
  messages: Message[];
}

export interface JoinAction {
  type: ActionTypes.JOINED;
  payload: JoinData;
}

export interface GetUsersAction {
  type: ActionTypes.SET_USERS;
  payload: string[];
}

export interface GetMessageAction {
  type: ActionTypes.NEW_MESSAGE;
  payload: Message;
}

export interface SetMessagesAction {
  type: ActionTypes.SET_MESSAGES;
  payload: Message[];
}

export type ReducerAction = JoinAction | GetUsersAction | GetMessageAction | SetMessagesAction;

export interface JoinData {
  roomId: string;
  userName: string;
}

export interface Message {
  text: string;
  userName: string;
}