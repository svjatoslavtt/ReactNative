import {ActionTypes, ActionTypeUnion} from './actions';

import {AuthState} from './state';

export const authState: AuthState = {
  authData: null,
  authError: '',
};

export const authReducer = (state = authState, action: ActionTypeUnion) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authData: action.payload,
      };
    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        authError: action.payload,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        authData: null,
      };
    default:
      return state;
  }
};
