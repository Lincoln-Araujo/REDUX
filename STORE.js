// The store is an object that enforces the one-way data flow model that Redux is built upon. 
// It holds the current state inside, receives action dispatches, executes the reducer to get the next state, 
// and provides access to the current state for the UI to re-render.

// import store from redux
import { createStore } from 'redux';

// the initial state
const initialState = 0;

// the reducer function
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    default:
      return state;
  }
}

// creating the store
let store = createStore(countReducer);
