import {REQUEST_NEW_MOVIE, RECIEVE_NEW_MOVIE, RESET_NEW_MOVIE, ERROR_NEW_MOVIE} from '../constants.js';

const initialState = {
  isFetching: false,
  hasMovie: false,
  error: '',
  movie: {}
};

function newMovie (currentState = initialState, action) {
  let {type} = action;
  let newState;

  switch (type) {
    case REQUEST_NEW_MOVIE:
      newState = Object.assign({}, initialState);
      newState.isFetching = true;
      return newState;
    case RECIEVE_NEW_MOVIE:
      newState = Object.assign({}, initialState);
      newState.hasMovie = true;
      newState.movie = {title: action.title, year: action.year, rating: action.rating};
      return newState;
    case ERROR_NEW_MOVIE:
      newState = Object.assign({}, initialState);
      newState.error = action.error;
      return newState;
    case RESET_NEW_MOVIE:
      return initialState;
    default:
      return currentState;
  }
}

module.exports = newMovie;
