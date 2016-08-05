import React, {Component} from 'react';
import store from '../stores/movie-store.js';
import NewMovie from './NewMovie';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

class NewMovieContainer extends Component {
  constructor (props) {
    super(props);
    this.state = store.getState();

    this.unsubscribe = null;
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(this._onChange);
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  _onChange () {
    this.setState(store.getState());
  }

  render () {
    if (this.state.error) {
      return <ErrorMessage error={this.state.error} />;
    } else if (this.state.isFetching) {
      return <Loading />;
    } else if (this.state.hasMovie) {
      let {title, rating, year} = this.state.movie;
      return <NewMovie title={title} rating={rating} year={year} />;
    } else {
      return <div></div>;
    }
  }
}

module.exports = NewMovieContainer;
