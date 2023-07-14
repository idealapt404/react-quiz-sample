import React from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { ActionType } from '../state/action-types';

const NextButton: React.FC = () => {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (index < numQuestions - 1)
    return (
      <button
        className={`btn btn-ui ${answer < 0 ? 'disabled' : ''}`}
        onClick={() => dispatch({ type: ActionType.NEXT_QUESTION })}
      >
        Next
      </button>
    );
  else if (index === numQuestions - 1)
    return (
      <button
        className={`btn btn-ui ${answer < 0 ? 'disabled' : ''}`}
        onClick={() => dispatch({ type: ActionType.FINISH })}
      >
        Finish
      </button>
    )
  else
    throw new Error("index out of range");
}

export default NextButton;
