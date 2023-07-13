import { ActionType } from './action-types';
import { QuestionType } from './reducer';

export interface DataReceivedAction {
  type: ActionType.DATA_RECEIVED;
  payload: QuestionType[];
}

export interface DataFailedAction {
  type: ActionType.DATA_FAILED;
}

export interface StartAction {
  type: ActionType.START;
}

export interface NewAnswerAction {
  type: ActionType.NEW_ANSWER;
  payload: number;
}

export interface NextQuestionAction {
  type: ActionType.NEXT_QUESTION;
}

export interface FinishAction {
  type: ActionType.FINISH;
}

export interface RestartAction {
  type: ActionType.RESTART;
}

export interface TickAction {
  type: ActionType.TICK;
}

export type Action =
  | DataReceivedAction
  | DataFailedAction
  | StartAction
  | NewAnswerAction
  | NextQuestionAction
  | FinishAction
  | RestartAction
  | TickAction;
