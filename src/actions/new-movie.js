import {REQUEST_NEW_MOVIE, RECIEVE_NEW_MOVIE, RESET_NEW_MOVIE, OMDB_URL, ERROR_NEW_MOVIE} from '../constants.js';
import {get} from 'superagent';

function requestNewMovie () {
  return {type: REQUEST_NEW_MOVIE};
}

function receiveNewMovie (title, year, rating) {
  return {
    type: RECIEVE_NEW_MOVIE,
    title: title,
    year: year,
    rating: rating || 'NA'
  };
}

function errorNewMovie (msg) {
  return {
    type: ERROR_NEW_MOVIE,
    error: msg
  };
}

function resetNewMovie () {
  return {
    type: RESET_NEW_MOVIE
  };
}

function fetchNewMovie (title) {
  return function (dispatch) {
    dispatch(requestNewMovie());
    get(OMDB_URL)
      .query({t: title})
      .end(function (err, res) {
        if (err || !res.ok) {
          dispatch(errorNewMovie('Problem getting data from OMDB.'));
        }
        let data = res.body;
        if (data.Error) {
          dispatch(errorNewMovie('Could not find movie.'));
        } else {
          let {Title, Year, imdbRating} = data;
          dispatch(receiveNewMovie(Title, Year, imdbRating));
        }
      });
  };
}

module.exports = {
  fetchNewMovie: fetchNewMovie,
  resetNewMovie: resetNewMovie
};
