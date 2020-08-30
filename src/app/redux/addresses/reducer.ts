import {ActionTypes, ActionTypeUnion} from './actions';
import {Addresses, Address} from './state';

export const AddAddressInitialState: Addresses = {
  entities: [],
};

export const addAddressReducer = (
  state = AddAddressInitialState,
  action: ActionTypeUnion,
) => {
  switch (action.type) {
    case ActionTypes.ADD_ADDRESS:
      let dataId: Address = {
        ...action.payload,
        id: state.entities.length
          ? state.entities[state.entities.length - 1].id + 1
          : 1,
      };
      return {
        entities: state.entities.length
          ? [...state.entities, dataId]
          : [dataId],
      };
    case ActionTypes.SET_ADDRESSES:
      return {
        entities: action.payload,
      };
    case ActionTypes.DELETE_ADDRESS:
      const newEntities = state.entities.filter(
        (item) => item.id !== action.payload,
      );

      return {
        entities: newEntities,
      };
    case ActionTypes.EDIT_ADDRESS:
      let editedEntities: Address[] = [
        ...state.entities.filter((item) => item.id !== action.payload.id),
        action.payload,
      ].sort((a, b) => a.id - b.id);

      return {
        ...state,
        entities: editedEntities,
      };
    default:
      return state;
  }
};
