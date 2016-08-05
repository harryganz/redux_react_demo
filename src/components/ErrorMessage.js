import React from 'react';
import './ErrorMessage.css';

module.exports = function ({error}) {
  return (
    <div className='error-msg'>
      <p>{error}</p>
    </div>
  );
};
