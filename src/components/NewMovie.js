import React from 'react';
import './NewMovie.css';

module.exports = function ({title, year, rating}) {
  return (
    <div className='new-movie'>
      <h3>{title}</h3>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};
