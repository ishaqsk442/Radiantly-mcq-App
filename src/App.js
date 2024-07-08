import React, { useState } from 'react';
import './App.css'; // Make sure to import the CSS file
import Question from './Question';
import Score from './Score';

const questions = [
  {
    question: 'What is the capital of Maharashtra?',
    options: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
    answer: 'Mumbai',
  },
  {
    question: 'What is the capital of Karnataka?',
    options: ['Bengaluru', 'Mysuru', 'Hubli', 'Mangalore'],
    answer: 'Bengaluru',
  },
  {
    question: 'What is the capital of Tamil Nadu?',
    options: ['Chennai', 'Coimbatore', 'Madurai', 'Salem'],
    answer: 'Chennai',
  },
  {
    question: 'What is the capital of West Bengal?',
    options: ['Kolkata', 'Darjeeling', 'Siliguri', 'Howrah'],
    answer: 'Kolkata',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
