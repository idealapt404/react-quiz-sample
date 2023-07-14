import React, { useContext, useEffect } from 'react';
import { createContext, useReducer } from 'react';
import { ParentProps } from '../components/App';
import reducer, { initialState, QuestionState, QuestionType } from '../state/reducer';
import { ActionType } from '../state/action-types';
import { Action } from '../state/actions';

export interface ContextProps extends QuestionState {
  numQuestions: number;
  maxPossiblePoints: number;
  dispatch: (action: Action) => void;
};

const defaultValue: ContextProps = {
  ...initialState,
  numQuestions: 0,
  maxPossiblePoints: 0,
  dispatch: () => {},
}
const QuizContext = createContext<any>(defaultValue);

const QuizProvider: React.FC<ParentProps> = ({children}) => {
  const [
    { questions, status, index, answer, points, highScore, secondsRemaining },
    dispatch
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (acc: number, cur: QuestionType) => acc + cur.points, 0
  );

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({type: ActionType.DATA_RECEIVED, payload: data}))
      .catch((err) => dispatch({type: ActionType.DATA_FAILED}));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,
        dispatch,
      }}
      >
      {children}
    </QuizContext.Provider>
  );
}

const useQuiz = (): ContextProps => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("QuizContext was used outside of the QuizProvider")
  }
  return context;
}

export { QuizProvider, useQuiz }
