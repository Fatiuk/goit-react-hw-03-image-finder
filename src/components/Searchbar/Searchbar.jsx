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
      <SearchbarWrap class="searchbar">
        <SearchbarForm class="form">
          <SearchbarButton type="submit" class="button">
            <SearchbarSpan class="button-label"></SearchbarSpan>
          </SearchbarButton>

          <SearchbarInput
            id="searchInput"
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchbarForm>
      </SearchbarWrap>
    );
  }
}
