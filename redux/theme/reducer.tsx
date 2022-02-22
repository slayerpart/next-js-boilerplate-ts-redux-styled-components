import { AnyAction } from 'redux';

import { AvailableThemeType, SET_THEME } from './actions';

export type StateType = {
  theme: AvailableThemeType;
};

const initialState = {
  theme: 'DEFAULT' as const,
};

export const themeReducer = (
  state: StateType | undefined = initialState,
  action: AnyAction,
): StateType => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload.name,
      };
    default:
      return state;
  }
};
