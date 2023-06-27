import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

//add new contact
//delete item
//filter record

// export const addContact = (name, number) => {
//   return { type: 'contacts/addContact', payload: { id: nanoid(), name: name, number: number } };
// };

export const addContact = createAction('contacts/addContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

// export const deleteContact = contactId => {
//   return { type: 'contacts/deleteContact', payload: contactId };
// };

export const deleteContact = createAction('contacts/deleteContact');

// export const getContact = value => {
//   return { type: 'contacts/getContact', payload: value };
// };

export const fetchContact = createAction('contacts/fetchContact');

// export const filterContact = value => {
//   return { type: 'filter/setContactFilter', payload: value };
// };

export const filterContact = createAction('filter/setContactFilter');
