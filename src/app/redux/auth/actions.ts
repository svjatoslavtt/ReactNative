import {ActionType, createAction} from 'typesafe-actions';

import {Auth} from '../../shared/interfaces/signIn';

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILED = 'LOGIN_SUCCESS',
  LOGOUT = 'LOGOUT',
  GET_AUTH_TOKEN = 'GET_AUTH_TOKEN',
}

export const Actions = {
  login: createAction(ActionTypes.LOGIN)(),
  loginSuccess: createAction(ActionTypes.LOGIN_SUCCESS)<Auth>(),
  loginFailed: createAction(ActionTypes.LOGIN_FAILED)<string>(),
  logout: createAction(ActionTypes.LOGOUT)(),
  getAuthToken: createAction(ActionTypes.GET_AUTH_TOKEN)(),
};

export type ActionTypeUnion = ActionType<typeof Actions>;
