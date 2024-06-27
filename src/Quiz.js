
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const quizData = [
  {
    question: ' 1. What is the primary purpose of ReactJS?',
    answers: ['Server-side scripting', 'Database management', 'Building user interfaces', 'Network security'],
    correct: 'Building user interfaces',
  },
  {
    question: '2. What is a component in React?',
    answers: ['A function that returns HTML', 'A reusable piece of UI', 'A method for managing state', 'An event handler'],
    correct: 'A reusable piece of UI',
  },
  {
    question: '3.Which hook is used to manage state in a functional component?',
    answers: ['useEffect', 'useState', 'useContext', 'useReducer'],
    correct: 'useState',
  },
  {
    question: '4. What does JSX stand for?',
    answers: ['JavaScript Syntax Extension', 'JavaScript XML', 'JavaScript and XHTML', 'JavaScript Extended Syntax'],
    correct: 'JavaScript XML',
  },
  {
    question: '5. How do you pass data from a parent component to a child component in React?',
    answers: ['Using state', 'Using props', 'Using context', 'Using events'],
    correct: 'Using props',
  },
  {
    question: '6. What is the use of the useEffect hook in React?',
    answers: ['To manage state', 'To handle side effects', 'To pass data between components', ' To create context'],
    correct: 'To handle side effects',
  },
  {
    question: '7. Which method is used to update the state in a class component?',
    answers: ['setState', 'updateState', 'changeState', 'modifyState'],
    correct: 'setState',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <Result score={score} total={quizData.length}/>
      ) : (
        <Question
          questionData={quizData[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
