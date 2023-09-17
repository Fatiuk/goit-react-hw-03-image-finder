import React, { Component } from 'react';
import * as PixabayAPI from '../../services/pixabay-api';
// ============ Section ============
import Section from '../Section/Section';
// ============ Searchbar ============
import Searchbar from '../Searchbar/Searchbar';
// ============ ImageGallery ============
import ImageGallery from 'components/ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
  };

  componentDidUpdate(_, prevState) {
    const nextQuery = this.state.searchQuery;
    const prevQuery = prevState.searchQuery;

    const nextPage = this.state.currentPage;
    const prevPage = prevState.currentPage;

    if (nextQuery !== prevQuery || nextPage !== prevPage) {
      this.updateImages();
    }
  }

  // Function that sets the state with the dataForm value upon submission.
  handleSubmit = dataForm => {
    this.setState({ searchQuery: dataForm.trim() });
  };

  updateImages = async () => {
    const data = await PixabayAPI.getImages(
      this.state.searchQuery,
      this.state.currentPage
    );

    console.log(this.state.searchQuery);
    console.log(this.state.currentPage);
    console.log(data);
    this.setState({
      images: [...data.hits],
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <Section>
          <ImageGallery images={this.state.images}></ImageGallery>
        </Section>
      </>
    );
  }
}
