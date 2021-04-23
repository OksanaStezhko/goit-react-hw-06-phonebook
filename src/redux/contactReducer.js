import { combineReducers } from 'redux';

import contactTypes from './contactTypes';

const init = {
  items: [
    { id: '1', name: 'Oksana', number: '+380679337495' },
    { id: '2', name: 'Volodka', number: '+380679337495' },
    { id: '3', name: 'Nady', number: '+380679337495' },
    { id: '4', name: 'Vova', number: '+380679337495' },
  ],
  filter: '',
};

const itemsReducer = (state = init.items, { type, payload }) => {
  switch (type) {
    case contactTypes.ADD_CONTACT:
      if (state.find(item => item.name === payload.name)) {
        alert(`${payload.name} is already in contacts`);
        return state;
      }

      return [...state, payload];

    case contactTypes.DELETE_CONTACT:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};
const filterReducer = (state = init.filter, { type, payload }) => {
  switch (type) {
    case contactTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
