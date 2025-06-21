import React from 'react';
import products from '../data/products.json';
import { useWishlist } from '../hooks/useWishList';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { toggleWishlist, isWishlisted } = useWishlist();

  return (
    <div>
      <h2>Products</h2>
      <Link to="/wishlist">Go to Wishlist</Link>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>
              {product.name}
              <span
                onClick={() => toggleWishlist(product.id)}
                style={{ cursor: 'pointer', color: isWishlisted(product.id) ? 'red' : 'gray', marginLeft: '10px' }}
              >
                ❤️
              </span>
            </h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
