import {connect} from 'react-redux';
import {fetchNewMovie} from '../actions/new-movie.js';
import NewMovieView from './NewMovieView';

function mapStateToProps (state) {
  let {error, isFetching, hasMovie} = state;
  let {title, year, rating} = state.movie;
  return {
    error: error,
    isFetching: isFetching,
    hasMovie: hasMovie,
    title: title,
    year: year,
    rating: rating
  };
}

function mapDispatchToProps (dispatch) {
  return {
    search: (title) => { dispatch(fetchNewMovie(title)); }
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(NewMovieView);
