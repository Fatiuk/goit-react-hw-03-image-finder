import React, { Component } from 'react';
import {
  SearchbarWrap,
  SearchbarForm,
  SearchbarButton,
  SearchbarSpan,
  SearchbarInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  render() {
    return (
      <SearchbarWrap className="searchbar">
        <SearchbarForm className="form">
          <SearchbarButton type="submit" className="button">
            <SearchbarSpan className="button-label"></SearchbarSpan>
          </SearchbarButton>

          <SearchbarInput
            id="searchInput"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchbarForm>
      </SearchbarWrap>
    );
  }
}
