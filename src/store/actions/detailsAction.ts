import { DetailsActionTypes, IGame, IScreenshot } from '../types';

export function loadingGameDetails() {
  return {
    type: DetailsActionTypes.loadingDetails,
  };
}

export function getGameDetails(game: IGame, screenshots: IScreenshot[]) {
  return {
    type: DetailsActionTypes.getGameDetails,
    payload: {
      game,
      screenshots,
    },
  };
}

export function setGameID(chosen_game_id: number) {
  return {
    type: DetailsActionTypes.setGameID,
    payload: {
      chosen_game_id,
    },
  };
}
