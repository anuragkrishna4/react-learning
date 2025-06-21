import React from 'react';
import products from '../products.json';
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>All Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} width={150} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
