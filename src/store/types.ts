export interface IGamesState {
  readonly popular_games: IGame[];
  readonly new_games: IGame[];
  readonly upcoming_games: IGame[];
  readonly searched_games: IGame[];
  readonly search_term: string;
}

export enum GameActionTypes {
  fetchGames = 'FETCH_GAMES',
  fetchGamesSuccess = 'FETCH_GAMES_SUCCESS',
  setSearchTerm = 'SET_SEARCH_TERM',
  fetchSearchedGame = 'FETCH_SEARCHED_GAME',
  ClearSearchedGame = 'CLEAR_SEARCHED_GAME',
}

export interface IGamesAction {
  type: GameActionTypes;
  payload: {
    popular_games: IGame[];
    new_games: IGame[];
    upcoming_games: IGame[];
    searched_games: IGame[];
    search_term: string;
  };
}

export interface IDetailsState {
  readonly game: IGame;
  readonly screenshots: IScreenshot[];
  readonly isLoading: boolean;
  readonly chosen_game_id?: number;
}

export enum DetailsActionTypes {
  setGameID = 'SET_GAME_ID',
  clearGameID = 'CLEAR_GAME_ID',
  getGameDetails = 'GET_GAME_DETAILS',
  loadingDetails = 'LOADING_DETAILS',
}

export interface IDetailsAction {
  type: DetailsActionTypes;
  payload: {
    game: IGame;
    screenshots: IScreenshot[];
    chosen_game_id?: number;
  };
}

export interface IGame {
  id: number;
  name: string;
  released: string;
  background_image: string;
  description_raw: string;
  rating: number;
  platforms: Platform[];
}

export interface IScreenshot {
  id: number;
  image: string;
}

export interface Platform {
  platform: {
    id: number;
    name: string;
  };
}
