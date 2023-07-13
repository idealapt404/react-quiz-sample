import { Action } from './actions';
import { ActionType } from './action-types';

export type QuestionType = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

enum StateType {
  LOADING = 'loading',
  ERROR = 'error',
  READY = 'ready',
  ACTIVE = 'active',
  FINISHED = 'finished',
}

interface QuestionState {
  questions: QuestionType[];
  status: StateType;
  index: number,
  answer: string | null;
  points: number;
  highscore: number;
  secondsRemaining: number | null;
}

export const initialState = {
  questions: [],
  status: StateType.LOADING,
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const reducer = (state: QuestionState, action: Action) => {
  switch (action.type) {
    case ActionType.DATA_RECEIVED:
      return { ...state, status: StateType.READY, questions: action.payload };
    case ActionType.DATA_FAILED:
      return { ...state, status: StateType.ERROR };
    case ActionType.START:
      return { ...state, status: StateType.ACTIVE };
    case ActionType.NEW_ANSWER:
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question?.correctOption
            ? state.points + question.points
            : state.points,
      };
    case ActionType.NEXT_QUESTION:
      return { ...state, index: state.index + 1, answer: null };
    case ActionType.FINISH:
      return {
        ...state,
        status: StateType.FINISHED,
        highscore: state.points > state.highscore ? state.points : state.highscore,
      };
    case ActionType.RESTART:
      return { ...state, status: StateType.READY, questions: state.questions };
    case ActionType.TICK:
      return {
        ...state,
        secondsRemaining: state.secondsRemaining ? state.secondsRemaining - 1 : null,
        status: state.secondsRemaining === 0 ? StateType.FINISHED : state.status };
    default:
      throw new Error("Unknown action");
  }
}

export default reducer;
