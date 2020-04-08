import thunk from 'redux-thunk'; // no changes here 😀
import { createStore, combineReducers, applyMiddleware } from 'redux';
import todosState from './todos'

const localRootReducer = combineReducers({
    todos: todosState,
});

const store = createStore(localRootReducer, applyMiddleware(thunk));

export default store;