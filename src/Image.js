import React from 'react';

function Image({ product }) {
  return <img src={product.image} alt="product" style={{ width: '100%', borderRadius: '10px' }} />;
}

export default Image;