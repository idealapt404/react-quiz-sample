import React from 'react';
import { QuestionType } from '../state/reducer';
import { useQuiz } from '../contexts/QuizContext';
import { ActionType } from '../state/action-types';

export interface OptionsProps {
  question: QuestionType;
}

const Options: React.FC<OptionsProps> = ({ question }) => {
  const { answer, dispatch} = useQuiz();
  const hasAnswered = answer >= 0;
  const { options, correctOption } = question;

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: ActionType.NEW_ANSWER, payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default Options;
