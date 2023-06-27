import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContact, filterContact } from './actions';

const contactsInitialState = [];

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);
//     case fetchContact.type:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
//   [fetchContact]: (state, action) => {
//     return action.payload;
//   },
// });

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    // return state.filter(contact => contact.id !== action.payload);
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
  [fetchContact]: (state, action) => {
    return action.payload;
  },
});

//fetchContact i filterReducer do zrobienia

const filterInitialState = '';

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case filterContact.type:
//       return action.payload;
//     default:
//       return state;
//   }
// };

export const filterReducer = createReducer(filterInitialState, {
  [filterContact]: (state, action) => {
    return action.payload;
  },
});
