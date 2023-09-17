import React from 'react';

function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Load More
    </button>
  );
}

export default Button;
