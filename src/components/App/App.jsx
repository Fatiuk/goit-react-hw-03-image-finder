import React, { Component } from 'react';
// ============ Section ============
import Section from '../Section/Section';
// ============ Searchbar ============
import Searchbar from '../Searchbar/Searchbar';

export default class App extends Component {
  state = {
    query: '',
  };
  // Function that sets the state with the dataForm value upon submission.
  handleSubmit = dataForm => {
    this.setState({ query: dataForm.trim() });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <Section></Section>
      </>
    );
  }
}
