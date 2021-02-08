import { Reducer } from 'redux';
import {
  DetailsActionTypes,
  IDetailsAction,
  IDetailsState,
  IGame,
} from '../types';

const initialState: IDetailsState = {
  game: {} as IGame,
  screenshots: [],
  isLoading: false,
};

const gameDetailsReducer: Reducer<IDetailsState, IDetailsAction> = (
  state = initialState,
  action: IDetailsAction
) => {
  switch (action.type) {
    case DetailsActionTypes.setGameID:
      const { chosen_game_id } = action.payload;
      return {
        ...state,
        chosen_game_id,
        isLoading: true,
      };
    case DetailsActionTypes.clearGameID:
      return {
        ...state,
        chosen_game_id: undefined,
      };
    case DetailsActionTypes.getGameDetails:
      const { game, screenshots } = action.payload;
      return {
        ...state,
        game,
        screenshots,
        isLoading: false,
      };
    case DetailsActionTypes.loadingDetails:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
