import React from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { ActionType } from '../state/action-types';

const StartScreen: React.FC = () => {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: ActionType.START })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
