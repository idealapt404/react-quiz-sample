import React, { useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import { ActionType } from '../state/action-types';

const DateCounter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step} = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = () => {
    dispatch({type: ActionType.DEC});
  }

  const inc = () => {
    dispatch({type: ActionType.INC});
  }

  const defineCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: ActionType.SET_COUNT, payload: Number(e.target.value)});
  }

  const defineStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: ActionType.SET_STEP, payload: Number(e.target.value)});
  }

  const reset = () => {
    dispatch({type: ActionType.RESET});
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}


export default DateCounter;
