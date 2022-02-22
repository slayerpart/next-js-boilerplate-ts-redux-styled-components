import { ActionCreator } from 'redux';

export type AvailableThemeType = 'DEFAULT';

export const SET_THEME = 'SET_THEME';

export type SetThemeActionType = ActionWithPayloadType<
  typeof SET_THEME,
  { name: AvailableThemeType }
>;

export const setThemeActionCreator: ActionCreator<SetThemeActionType> = (
  themeName: AvailableThemeType = 'DEFAULT',
) => ({
  type: SET_THEME,
  payload: {
    name: themeName,
  },
});
