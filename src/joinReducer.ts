import { ActionTypes, JoinState, ReducerAction } from './types';

export default (state: JoinState, action: ReducerAction) => {
  switch (action.type) {
    case ActionTypes.JOINED:
      return {
        ...state,
        joined: true,
        userName: action.payload.userName,
        roomId: action.payload.roomId,
      };

    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case ActionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };

    case ActionTypes.NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
}