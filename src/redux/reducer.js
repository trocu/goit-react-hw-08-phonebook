import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContact, filterContact } from './actions';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
  [fetchContact]: (state, action) => {
    return action.payload;
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [filterContact]: (state, action) => {
    return action.payload;
  },
});
