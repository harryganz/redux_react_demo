import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import newMovie from '../reducers/new-movie.js';

module.exports = createStore(newMovie, applyMiddleware(thunk));
