import {connect} from 'react-redux';
import {fetchNewMovie} from '../actions/new-movie.js';
import NewMovieView from './NewMovieView';

function mapStateToProps (state) {
  let {error, isFetching, hasMovie} = state.newMovie;
  let {title, year, rating, poster} = state.newMovie.movie;
  return {
    error: error,
    isFetching: isFetching,
    hasMovie: hasMovie,
    title: title,
    year: year,
    rating: rating,
    poster: poster
  };
}

function mapDispatchToProps (dispatch) {
  return {
    search: (title) => { dispatch(fetchNewMovie(title)); }
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(NewMovieView);
