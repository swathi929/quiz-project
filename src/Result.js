
import React from 'react';

const Result = ({ score, total }) => {
  return (
    <div className="result-container">
      <h2>Your Score: {score} / {total}</h2>
    </div>
  );
};

export default Result;
