import {Epic, ofType} from 'redux-observable';
import {ignoreElements, mergeMap, map, catchError} from 'rxjs/operators';
import {from, of} from 'rxjs';
import {GoogleSignin} from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-community/async-storage';

import {Actions, ActionTypes} from './actions';

import {Auth} from '../../shared/interfaces/signIn';

export const loginEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.LOGIN),
    mergeMap(() => from(GoogleSignin.hasPlayServices())),
    mergeMap(() => from(GoogleSignin.signIn())),
    map((authData) => {
      const userData: Auth = {
        idToken: authData.idToken,
        user: {
          photo: authData.user.photo,
          email: authData.user.email,
          name: authData.user.name,
        },
      };
      return Actions.loginSuccess(userData);
    }),
    catchError((err) => of(Actions.loginFailed(err))),
  );

export const getAuthTokenEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.GET_AUTH_TOKEN),
    mergeMap(() => from(AsyncStorage.getItem('auth'))),
    map((response: string | null) => {
      const authData = response ? JSON.parse(response) : '';
      return Actions.loginSuccess(authData);
    }),
    catchError((err) => of(Actions.loginFailed(err))),
  );

export const logoutEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.LOGOUT),
    mergeMap(() => from(AsyncStorage.removeItem('auth'))),
    ignoreElements(),
  );

export const setAuthDataToAsyncStorageEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.LOGIN_SUCCESS),
    mergeMap((action) =>
      from(AsyncStorage.setItem('auth', JSON.stringify(action.payload))),
    ),
    ignoreElements(),
  );
