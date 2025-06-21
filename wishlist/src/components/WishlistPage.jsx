import React from 'react';
import products from '../data/products.json';
import { useWishlist } from '../hooks/useWishList';

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  const wishlistItems = products.filter(product => wishlist.includes(product.id));

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="product-grid">
          {wishlistItems.map(item => (
            <div key={item.id} className="product-card">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
