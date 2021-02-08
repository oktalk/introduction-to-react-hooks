import React, { useContext } from 'react';
import { StoreProvider, Store } from './Store';

const Slider = function () {
  const { state, dispatch } = useContext(Store);

  const updateData = ({ key, value }) => {
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
        key,
        value,
      },
    });
  };

  return (
    <div>
      <input
        onChange={(e) => {
          updateData({ key: 'slider', value: e.target.value });
        }}
        type="range"
        id="cowbell"
        name="cowbell"
        min="0"
        max="100"
        value={state.slider?.value}
        step="10"
      />
      <label htmlFor="cowbell">Cowbell</label>
      <div></div>
    </div>
  );
};

const ReduxLike = () => {
  return (
    <StoreProvider>
      <Slider />
    </StoreProvider>
  )
}

export default ReduxLike;
