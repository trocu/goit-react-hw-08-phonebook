import { createStore } from 'redux';
// import { legacy_createStore as createStore } from 'redux';
// import { configureStore } from 'redux';

const state = {
  contacts: [],
  filter: '',
};

const store = createStore();

//add new contact
//delete item
//filter record
