import { createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk];
const intialState = {}

export const store = createStore(rootReducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))