import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import NewMovieContainer from './NewMovieContainer';
import NewMovieFormContainer from './NewMovieFormContainer';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <NewMovieContainer />
        <NewMovieFormContainer />
      </div>
    );
  }
}

export default App;
