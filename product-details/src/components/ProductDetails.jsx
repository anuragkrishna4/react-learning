import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import products from '../products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/products">Products</Link> &gt; {product.name}
      </nav>

      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width={200} />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Stock:</strong> {product.stock}</p>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ProductDetail;
