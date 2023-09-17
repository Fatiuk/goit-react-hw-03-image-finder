import React, { Component } from 'react';
import {
  SearchbarWrap,
  SearchbarForm,
  SearchbarButton,
  SearchbarSpan,
  SearchbarInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };
  // Function that updates the state based on user input
  handleChange = event => {
    const inputValue = event.target.value;
    this.setState({ query: inputValue });
  };
  // Function that passes the state to the App.jsx
  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.query.trim()) {
      return console.log(111);
    }
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <SearchbarWrap>
        <SearchbarForm onSubmit={this.handleSubmit}>
          <SearchbarButton type="submit">
            <SearchbarSpan></SearchbarSpan>
          </SearchbarButton>

          <SearchbarInput
            id="searchInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchbarForm>
      </SearchbarWrap>
    );
  }
}
