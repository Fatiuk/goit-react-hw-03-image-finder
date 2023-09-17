import React, { Component } from 'react';
import {
  GalleryItem,
  GalleryImage,
  GalleryInfo,
} from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    const {
      image: { webformatURL, tags, likes, views, comments, downloads },
    } = this.props; //   Get image (props) from prev component (ImageGallery.jsx)
    return (
      <GalleryItem>
        <GalleryImage src={webformatURL} alt={tags} loading="lazy" />
        <GalleryInfo>
          <p>
            <b>&#128077;</b>
            {likes}
          </p>
          <p>
            <b>&#128064;</b>
            {views}
          </p>
          <p>
            <b>&#128172;</b>
            {comments}
          </p>
          <p>
            <b>&#128229;</b>
            {downloads}
          </p>
        </GalleryInfo>
      </GalleryItem>
    );
  }
}
