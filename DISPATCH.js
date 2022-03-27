// Dispatch is a method that dispatches an action to the store, indicating that you wish to update the state.

// the action that will be dispatched
const action = { type: 'actionDescriptor' }; 

// using the method dispatch
store.dispatch(action);

// checking the new status
console.log(store.getState())
