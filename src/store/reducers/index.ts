import { combineReducers } from 'redux';
import gameDetailsReducer from './detailsReducer';
import gamesReducer from './gamesReducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  details: gameDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
