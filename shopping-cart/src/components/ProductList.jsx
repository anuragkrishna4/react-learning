import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import products from '../data/products.json';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Products</h2>
      <Link to="/cart">Go to Cart</Link>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
