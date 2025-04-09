import React, { useState } from 'react';

const starStyle = {
  cursor: 'pointer',
  fontSize: '24px',
  margin: '0 3px'
};

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) {
      alert('Please select a rating between 1 and 5');
      return;
    }
    onRatingSubmit(productId, rating);
    setRating(0);
    setHovered(0);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          style={{
            ...starStyle,
            color: (hovered || rating) >= star ? '#ffcc00' : '#ccc'
          }}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
        >
          ★
        </span>
      ))}
      <div>
        <button onClick={handleSubmit} style={{ marginTop: '10px' }}>Submit Rating</button>
      </div>
    </div>
  );
};

export default RatingWidget;
