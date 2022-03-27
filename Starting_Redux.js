// first, install redux in your project
// npm install redux

// then import what you need for your code
// example:
import { createStore } from 'redux';

// THE STATE
// State is the current information behind a web application
// example:
const state = [ 'Take Five', 'Claire de Lune', 'Respect'];

// ACTIONS
// actions are objects that contains data that will modify the state
// every action must to have an 'type' property with a string value
// tipically, payload property contains an object value
// example
const addNewSong = {
  type: 'songs/addSong',
  payload: 'Halo'
}

const removeSong = {
  type: 'songs/removeSong',
  payload: 'Take Five'
}

const removeAll = {
  type: 'songs/removeAll'
}

// REDUCERS or REDUCER FUNCTION
// is a plain JavaScript function that defines how the current state and an action are used in combination to create the new state
// RULES:
// ...... 1) They should only calculate the new state value based on the state and action arguments.
// ...... 2) They are not allowed to modify the existing state. Instead, they must copy the existing state and make changes to the copied values.
// ...... 3) They must not do any asynchronous logic or have other “side effects”(anything that the function does aside from returning a value).
// example
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'songs/addSong': {
      return [...state, action.payload];
    }
    case 'songs/removeSong': {
      return state.filter(song => song !== action.payload);
    }
    default: {
      return state;
    }
  }
}
