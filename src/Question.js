
import React from 'react';

const Question = ({ questionData, handleAnswer }) => {
  return (
    <div className="question-container">
      <h2>{questionData.question}</h2>
      <div className="answers-container">
        {questionData.answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
