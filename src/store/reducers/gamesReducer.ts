import { Reducer } from 'redux';
import { GameActionTypes, IGamesAction, IGamesState } from '../types';

const initialState: IGamesState = {
  popular_games: [],
  new_games: [],
  upcoming_games: [],
  searched_games: [],
  search_term: '',
};

const gamesReducer: Reducer<IGamesState, IGamesAction> = (
  state = initialState,
  action: IGamesAction
) => {
  switch (action.type) {
    case GameActionTypes.fetchGames:
      return { ...state };
    case GameActionTypes.fetchGamesSuccess:
      const { popular_games, new_games, upcoming_games } = action.payload;
      return {
        ...state,
        popular_games,
        new_games,
        upcoming_games,
      };
    case GameActionTypes.setSearchTerm:
      const { search_term } = action.payload;
      return {
        ...state,
        search_term,
      };
    case GameActionTypes.fetchSearchedGame:
      const { searched_games } = action.payload;
      return {
        ...state,
        searched_games,
      };
    case GameActionTypes.ClearSearchedGame:
      return {
        ...state,
        searched_games: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
