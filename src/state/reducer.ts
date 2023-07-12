import { Action } from './actions';
import { ActionType } from './action-types';

interface CountState {
  count: number;
  step: number;
}

export const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state: CountState, action: Action) => {
  switch (action.type) {
    case ActionType.DEC:
      return { ...state, count: state.count - state.step };
    case ActionType.INC:
      return { ...state, count: state.count + state.step};
    case ActionType.SET_COUNT:
      return { ...state, count: action.payload };
    case ActionType.SET_STEP:
      return { ...state, step: action.payload };
    case ActionType.RESET:
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

export default reducer;
