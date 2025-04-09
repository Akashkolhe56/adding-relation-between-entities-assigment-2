import React from 'react';
import RatingWidget from './RatingWidget';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      marginBottom: '20px',
      borderRadius: '10px',
      width: '300px'
    }}>
      <img src={product.image} alt={product.name} width="100%" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Average Rating:</strong> {product.avgRating.toFixed(1)} ⭐</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;
