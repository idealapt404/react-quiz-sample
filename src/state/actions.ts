import { ActionType } from './action-types';

export interface DecAction {
  type: ActionType.DEC;
}

export interface IncAction {
  type: ActionType.INC;
}

export interface SetCountAction {
  type: ActionType.SET_COUNT;
  payload: number;
}

export interface SetStepAction {
  type: ActionType.SET_STEP;
  payload: number;
}

export interface ResetAction {
  type: ActionType.RESET;
}

export type Action =
  | DecAction
  | IncAction
  | SetCountAction
  | SetStepAction
  | ResetAction;
