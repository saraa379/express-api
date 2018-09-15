import {TAB_CLICKED, ADD_BOOK, DELETE_BOOK, EDIT_BOOK} from '../actions/constants.js';
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case TAB_CLICKED:
      return state + 1
    case ADD_BOOK:
      return state - 1
    default:
      return state
  }
};

const initializeStore = initialState => {
  return createStore(reducer, initialState);
};

// exports the functionality to initialize the store
// rather than exporting the store instance
export default initializeStore;