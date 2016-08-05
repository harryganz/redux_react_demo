import React from 'react';
import loading from '../assets/loading.gif';
import './Loading.css';

module.exports = function () {
  return (
    <div className='loading'>
      <img src={loading} alt="loading" />
    </div>
  );
};
