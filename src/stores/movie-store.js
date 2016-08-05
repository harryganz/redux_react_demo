import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import newMovie from '../reducers/new-movie.js';

const reducer = combineReducers({newMovie: newMovie});
module.exports = createStore(reducer, applyMiddleware(thunk));
