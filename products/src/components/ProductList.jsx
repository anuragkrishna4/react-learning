import React, { useEffect, useState, useCallback } from 'react';
import { fetchProducts } from '../api/fetchProducts';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import CategoryTabs from './CategoryTabs';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadProducts = useCallback(async () => {
    setLoading(true);
    const newProducts = await fetchProducts(page, category);
    setProducts(prev => [...prev, ...newProducts]);
    setLoading(false);
  }, [page, category]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const loadMore = () => setPage(prev => prev + 1);

  const observerRef = useInfiniteScroll(loadMore, loading);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setProducts([]);
    setPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <h2>Product List</h2>
      <CategoryTabs selected={category} onChange={handleCategoryChange} />
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h4>{product.name}</h4>
            <p>{product.category}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      <div ref={observerRef} style={{ height: 1 }}></div>
    </div>
  );
};

export default ProductList;
