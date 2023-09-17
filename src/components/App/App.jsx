import React, { Component } from 'react';
// ============ Section ============
import Section from '../Section/Section';
// ============ Searchbar ============
import Searchbar from '../Searchbar/Searchbar';

export default class App extends Component {
  render() {
    return (
      <>
        <Searchbar></Searchbar>
        <Section></Section>
      </>
    );
  }
}
