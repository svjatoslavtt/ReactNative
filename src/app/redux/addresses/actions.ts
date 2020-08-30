import {ActionType, createAction} from 'typesafe-actions';

import {Address, AddressFieldsData} from './state';

export enum ActionTypes {
  ADD_ADDRESS = 'ADD_ADDRESS',
  SET_ADDRESSES = 'SET_ADDRESSES',
  DELETE_ADDRESS = 'DELETE_ADDRESS',
  GET_LOCAl_STORAGE_DATA = 'GET_LOCAl_STORAGE_DATA',

  EDIT_ADDRESS = 'EDIT_ADDRESS',
  EDIT_ADDRESS_SUCCESS = 'EDIT_ADDRESS_SUCCESS',
}

export const Actions = {
  addAddress: createAction(ActionTypes.ADD_ADDRESS)<AddressFieldsData>(),
  setAddresses: createAction(ActionTypes.SET_ADDRESSES)<
    AddressFieldsData | AddressFieldsData[]
  >(),
  deleteAddress: createAction(ActionTypes.DELETE_ADDRESS)<number>(),
  getLocalStorageData: createAction(ActionTypes.GET_LOCAl_STORAGE_DATA)(),

  editAddress: createAction(ActionTypes.EDIT_ADDRESS)<Address>(),
  editAddressSuccess: createAction(ActionTypes.EDIT_ADDRESS_SUCCESS)<
    AddressFieldsData | AddressFieldsData[]
  >(),
};

export type ActionTypeUnion = ActionType<typeof Actions>;
