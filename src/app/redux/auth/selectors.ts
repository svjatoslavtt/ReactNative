import {createSelector} from 'reselect';

import {RootState} from '../store';

const getAddressState = (state: RootState) => state.auth;

export const getUserData = createSelector(getAddressState, (state) =>
  state.authData ? state.authData.user : null,
);

export const getToken = createSelector(getAddressState, (state) =>
  state.authData && state.authData.idToken ? state.authData.idToken : null,
);
