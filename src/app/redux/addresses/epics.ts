import AsyncStorage from '@react-native-community/async-storage';
import {Epic, ofType} from 'redux-observable';
import {ignoreElements, mergeMap, map, switchMap, take} from 'rxjs/operators';
import {from} from 'rxjs';

import {Actions, ActionTypes} from './actions';
import {Address, AddressFieldsData} from './state';
import {getAddressesEntities} from './selectors';

export const addAddressEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.ADD_ADDRESS),
    mergeMap((action) =>
      from(AsyncStorage.getItem('addresses')).pipe(
        map((response: string | null) => {
          const parseValue = response ? JSON.parse(response) : [];
          const newData = [...parseValue, action.payload];
          AsyncStorage.setItem('addresses', JSON.stringify(newData));
        }),
      ),
    ),
    ignoreElements(),
  );

export const deleteAddressEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.DELETE_ADDRESS),
    mergeMap((action) =>
      from(AsyncStorage.getItem('addresses')).pipe(
        map((response: string | null) => {
          const parseValue = response ? JSON.parse(response) : [];
          const newValue =
            parseValue.length &&
            parseValue.filter((item: Address) => item.id !== action.payload);
          AsyncStorage.setItem('addresses', JSON.stringify(newValue));
        }),
      ),
    ),
    ignoreElements(),
  );

export const getLocalStorageDataEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.GET_LOCAl_STORAGE_DATA),
    mergeMap(() =>
      from(AsyncStorage.getItem('addresses')).pipe(
        map((response: string | null) => {
          const parseValue: AddressFieldsData[] | [] = response ? JSON.parse(response) : [];
          return Actions.setAddresses(parseValue);
        }),
      ),
    ),
  );

export const editAddressEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.EDIT_ADDRESS),
    switchMap(() => state$.pipe(
      take(1),
      map(getAddressesEntities))
    ),
    mergeMap((entities) =>
      from(AsyncStorage.setItem('addresses', JSON.stringify(entities))),
    ),
    ignoreElements(),
  );
