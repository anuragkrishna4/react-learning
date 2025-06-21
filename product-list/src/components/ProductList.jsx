import React, { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
import productsData from '../products.json';

const ProductList = () => {
  const [products] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const searchRef = useRef(null);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      filterProducts();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [search, category, minPrice, maxPrice]);

  const filterProducts = () => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== 'All') {
      result = result.filter(product => product.category === category);
    }

    if (minPrice !== '') {
      result = result.filter(product => product.price >= parseFloat(minPrice));
    }

    if (maxPrice !== '') {
      result = result.filter(product => product.price <= parseFloat(maxPrice));
    }

    setFilteredProducts(result);
  };

  return (
    <div>
      <h2>Product List</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          ref={searchRef}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Books</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
