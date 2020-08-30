import {createSelector} from 'reselect';

import {RootState} from '../store';

const getAddresses = (state: RootState) => state.addresses;

export const getAddressesEntities = createSelector(
  getAddresses,
  (state) => state.entities,
);
