import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3><Link to={`/products/${product.id}`}>{product.name}</Link></h3>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;
