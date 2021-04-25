import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './contactActions';

const init = {
  items: [],
  filter: '',
};

const itemsReducer = createReducer(init.items, {
  [addContact]: (state, { payload }) => {
    if (
      state.find(item => item.name.toLowerCase() === payload.name.toLowerCase())
    ) {
      alert(`${payload.name} is already in contacts`);
      return [...state];
    } else {
      return [...state, payload];
    }
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
