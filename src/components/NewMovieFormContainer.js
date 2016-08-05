import React from 'react';
import {dispatch} from '../stores/movie-store.js';
import {fetchNewMovie} from '../actions/new-movie.js';
import NewMovieForm from './NewMovieForm';

module.exports = function () {
  return <NewMovieForm search={ (title) => { dispatch(fetchNewMovie(title)); } } />;
};
