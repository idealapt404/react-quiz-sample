import { Action } from './actions';
import { ActionType } from './action-types';

export type QuestionType = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export enum StateType {
  LOADING = 'loading',
  ERROR = 'error',
  READY = 'ready',
  ACTIVE = 'active',
  FINISHED = 'finished',
}

export interface QuestionState {
  questions: QuestionType[];
  status: StateType;
  secondsRemaining: number;
  index: number;
  answer: number;
  points: number;
  highScore: number;
}

export const initialState: QuestionState = {
  questions: [],
  status: StateType.LOADING,
  secondsRemaining: 0,
  index: 0,
  answer: -1,
  points: 0,
  highScore: 0,
};

const SECS_PER_QUESTION = 30;

const reducer = (state: QuestionState, action: Action) => {
  switch (action.type) {
    case ActionType.DATA_RECEIVED:
      return { ...state, status: StateType.READY, questions: action.payload };
    case ActionType.DATA_FAILED:
      return { ...state, status: StateType.ERROR };
    case ActionType.START:
      return {
        ...state,
        status: StateType.ACTIVE,
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      }
    case ActionType.NEW_ANSWER:
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question?.correctOption
            ? state.points + question?.points
            : state.points,
      }
    case ActionType.NEXT_QUESTION:
      return { ...state, index: state.index + 1, answer: -1 }
    case ActionType.FINISH:
      return {
        ...state,
        status: StateType.FINISHED,
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      }
    case ActionType.RESTART:
      return { ...initialState, status: StateType.READY, questions: state.questions }
    case ActionType.TICK:
      return {
        ...state,
        status: state.secondsRemaining === 0 ? StateType.FINISHED : state.status,
        secondsRemaining: state.secondsRemaining - 1,
      }
    default:
      throw new Error("Unknown action");
  }
}

export default reducer;
