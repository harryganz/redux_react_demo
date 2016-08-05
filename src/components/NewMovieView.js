import React from 'react';
import NewMovie from './NewMovie';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import NewMovieForm from './NewMovieForm';

function NewMovieView ({error, isFetching, hasMovie, title, rating, year, search}) {
  let movie;
  if (error) {
    movie = <ErrorMessage error={error} />;
  } else if (isFetching) {
    movie = <Loading />;
  } else if (hasMovie) {
    movie = <NewMovie title={title} rating={rating} year={year} />;
  } else {
    movie = '';
  }

  return (
    <div>
      {movie}
      <NewMovieForm search={search} />
    </div>
  );
}

module.exports = NewMovieView;
