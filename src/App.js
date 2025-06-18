import React, { useState } from 'react';
import StarRating from './StarRating';

function App() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('general');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ feedback, rating, category }); // For demo purposes
    setSubmitted(true);
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '500px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333' }}>Feedback Form</h1>
      
      {submitted ? (
        <div style={{ 
          background: '#f0f8ff',
          padding: '20px',
          borderRadius: '5px',
          marginTop: '20px'
        }}>
          <h2 style={{ color: 'green' }}>Thank You!</h2>
          <p>We appreciate your {rating}-star feedback about {category}.</p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setFeedback('');
              setRating(0);
              setCategory('general');
            }}
            style={buttonStyle}
          >
            Submit Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={labelStyle}>Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={inputStyle}
            >
              <option value="general">General Feedback</option>
              <option value="bug">Bug Report</option>
              <option value="suggestion">Feature Suggestion</option>
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={labelStyle}>Your Rating:</label>
            <StarRating rating={rating} setRating={setRating} />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={labelStyle}>Your Feedback:</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={{ ...inputStyle, minHeight: '100px' }}
              maxLength={200}
              required
            />
            <div style={{ 
              textAlign: 'right', 
              fontSize: '0.8em',
              color: feedback.length === 200 ? 'red' : '#666'
            }}>
              {feedback.length}/200 characters
            </div>
          </div>

          <button 
            type="submit"
            disabled={rating === 0}
            style={{
              ...buttonStyle,
              opacity: rating === 0 ? 0.5 : 1,
              cursor: rating === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
}

// Reusable styles
const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold'
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  border: '1px solid #ddd',
  borderRadius: '4px'
};

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default App;