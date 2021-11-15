import { createStore } from 'redux';
import uniq from 'lodash/uniq';

export const ACTIONS = {
  ADD_TO_SELECTED_OPTIONS: 'ADD_TO_SELECTED_OPTIONS',
  REMOVE_FROM_SELECTED_OPTIONS: 'REMOVE_FROM_SELECTED_OPTIONS',
  CLEAR_SELECTED_OPTIONS: 'CLEAR_SELECTED_OPTIONS',
  SELECT_ALL_OPTIONS: 'SELECT_ALL_OPTIONS'
};

const initialState = {
  options: [],
  selectedOptions: []
};

const optionsReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTIONS.ADD_TO_SELECTED_OPTIONS: {
      const { option } = payload;
      const { selectedOptions } = state;
      const updatedOptions = uniq([...selectedOptions, option]);

      return {
        ...state,
        selectedOptions: [...updatedOptions]
      };
    }
    case ACTIONS.REMOVE_FROM_SELECTED_OPTIONS: {
      let updatedOptions = [];
      const { option } = payload;
      const { selectedOptions } = state;
      const index = selectedOptions.indexOf(option);
      selectedOptions.splice(index, 1);
      updatedOptions = selectedOptions;

      return {
        ...state,
        selectedOptions: [...updatedOptions]
      };
    }
    case ACTIONS.CLEAR_SELECTED_OPTIONS: {
      return {
        ...state,
        selectedOptions: []
      }
    }
    case ACTIONS.SELECT_ALL_OPTIONS: {
      const { optionsList } = payload;
      return {
        ...state,
        selectedOptions: [...optionsList]
      }
    }
    default:
      return state;
  }
};

export const createReduxStore = () => {
  const store = createStore(optionsReducer, initialState);
  return store;
};