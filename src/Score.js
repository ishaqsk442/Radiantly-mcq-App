import React from 'react';

function Score({ score, totalQuestions }) {
  return (
    <div>
      <h2>Your Score: {score}/{totalQuestions}</h2>
    </div>
  );
}

export default Score;
