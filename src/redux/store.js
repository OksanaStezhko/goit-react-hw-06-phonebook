import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import contactsReducer from './contactReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    // applyMiddleware(...middleware),
    applyMiddleware(),
  ),
);

export default store;
