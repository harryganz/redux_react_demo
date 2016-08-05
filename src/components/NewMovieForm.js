import React, {Component} from 'react';
import './NewMovieForm.css';

class NewMovieForm extends Component {
  constructor (props) {
    super(props);

    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit (e) {
    e.preventDefault();
    let title = this.refs.title.value;
    this.props.search(title);
    this.refs.form.reset();
  }

  render () {
    return (
      <form className='new-movie-form' ref='form' onSubmit={this._onSubmit}>
        <input type='text' ref='title' placeholder='Enter Film Title' />
        <input type='submit' value='Search OMDB' />
      </form>
    );
  }
}

module.exports = NewMovieForm;
