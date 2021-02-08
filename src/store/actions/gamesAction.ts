import { GameActionTypes, IGame } from '../types';

export function loadGames() {
  return {
    type: GameActionTypes.fetchGames,
  };
}

export function loadGamesSuccess(
  popular_games: IGame[],
  upcoming_games: IGame[],
  new_games: IGame[]
) {
  return {
    type: GameActionTypes.fetchGamesSuccess,
    payload: {
      popular_games,
      upcoming_games,
      new_games,
    },
  };
}

export function setSearchTerm(search_term: string) {
  return {
    type: GameActionTypes.setSearchTerm,
    payload: {
      search_term,
    },
  };
}

export function fetchSearchedGames(searched_games: IGame[]) {
  return {
    type: GameActionTypes.fetchSearchedGame,
    payload: {
      searched_games,
    },
  };
}

export function clearSearchedGames() {
  return {
    type: GameActionTypes.ClearSearchedGame,
    payload: {
      searched_games: [],
    },
  };
}
