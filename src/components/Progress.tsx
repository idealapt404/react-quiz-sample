import React from 'react';
import { useQuiz } from '../contexts/QuizContext';

const Progress: React.FC = () => {
  const { index, numQuestions, points, maxPossiblePoints, answer} = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;