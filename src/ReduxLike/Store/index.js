import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  slider: {
    value: ''
  },
};

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        [payload.key]: {
          ...state[payload.key],
          value: payload.value,
          formatted: payload.formatted,
        },
      };
    case 'RESET':
      return state;

    default:
      return state;
  }
};

const localState = JSON.parse(localStorage.getItem('localStore'));
export const Store = createContext();

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, localState || initialState);
  const value = { state, dispatch };
  useEffect(() => {
    localStorage.setItem('localStore', JSON.stringify(state));
  }, [state]);
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
