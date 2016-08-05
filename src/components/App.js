import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import NewMovieContainer from './NewMovieContainer';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <NewMovieContainer />
      </div>
    );
  }
}

export default App;
