import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');

export const fetchContact = createAction('contacts/fetchContact');

export const filterContact = createAction('filter/setContactFilter');
