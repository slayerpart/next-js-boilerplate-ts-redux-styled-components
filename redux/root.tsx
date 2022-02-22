import { combineReducers } from 'redux';

import { themeReducer as theme } from './theme';

const rootReducer = combineReducers({
  theme,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
