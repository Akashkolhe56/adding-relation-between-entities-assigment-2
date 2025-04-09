// App.jsx
import React, { useState } from 'react';
import ProductCard from './components/ProductCard';

const initialProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality wireless sound.',
    image: 'https://via.placeholder.com/150',
    avgRating: 4.2,
    totalRatings: 5
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Track your fitness and notifications.',
    image: 'https://via.placeholder.com/150',
    avgRating: 3.8,
    totalRatings: 10
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts(prev =>
      prev.map(product => {
        if (product.id === productId) {
          const newTotal = product.totalRatings + 1;
          const newAvg = ((product.avgRating * product.totalRatings) + newRating) / newTotal;
          return {
            ...product,
            avgRating: newAvg,
            totalRatings: newTotal
          };
        }
        return product;
      })
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛍 Product Ratings</h1>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onRatingSubmit={handleRatingSubmit}
        />
      ))}
    </div>
  );
}

export default App;
