import React from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { ActionType } from '../state/action-types';

const NextButton: React.FC = () => {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: ActionType.NEXT_QUESTION })}
        disabled={answer < 0}
      >
        Next
      </button>
    );
  else if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: ActionType.FINISH })}
        disabled={answer < 0}
      >
        Finish
      </button>
    )
  else
    throw new Error("index out of range");
}

export default NextButton;
