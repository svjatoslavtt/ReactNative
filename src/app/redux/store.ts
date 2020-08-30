import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

import {Addresses} from './addresses/state';
import {AuthState} from './auth/state';
import {addAddressReducer} from './addresses/reducer';
import {
  addAddressEpic,
  getLocalStorageDataEpic,
  deleteAddressEpic,
  editAddressEpic,
} from './addresses/epics';
import {authReducer} from './auth/reducer';
import {
  loginEpic,
  logoutEpic,
  getAuthTokenEpic,
  setAuthDataToAsyncStorageEpic,
} from './auth/epics';

const epicMiddleware = createEpicMiddleware();

export interface RootState {
  addresses: Addresses;
  auth: AuthState;
}

const rootEpic = combineEpics(
  getLocalStorageDataEpic,
  addAddressEpic,
  loginEpic,
  logoutEpic,
  deleteAddressEpic,
  getAuthTokenEpic,
  editAddressEpic,
  setAuthDataToAsyncStorageEpic,
);

const rootReducer = combineReducers({
  addresses: addAddressReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);

export default store;
