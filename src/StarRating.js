import React from 'react';

const StarRating = ({ rating, setRating }) => {
  return (
    <div style={{ display: 'flex', margin: '10px 0' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            cursor: 'pointer',
            color: rating >= star ? 'gold' : 'gray',
            fontSize: '24px'
          }}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;