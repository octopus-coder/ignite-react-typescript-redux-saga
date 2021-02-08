import axios, { AxiosResponse } from 'axios';
import { all, call, put, select } from 'redux-saga/effects';
import { ApplicationState } from '.';
import {
  gameDetailsURL,
  gameScreenshotURL,
  newGamesURL,
  popularGamesURL,
  searchGameURL,
  upcomingGamesURL,
} from '../services/api';
import { getGameDetails } from './actions/detailsAction';
import { fetchSearchedGames, loadGamesSuccess } from './actions/gamesAction';

export function* loadGamesSaga() {
  try {
    const [
      { data: popular_games },
      { data: upcoming_games },
      { data: new_games },
    ] = yield all([
      axios.get(popularGamesURL()),
      axios.get(upcomingGamesURL()),
      axios.get(newGamesURL()),
    ]);
    yield put(
      loadGamesSuccess(
        popular_games.results,
        upcoming_games.results,
        new_games.results
      )
    );
  } catch (e) {
    console.log(e);
  }
}

export function* fetchSearchedGameSaga() {
  const search_term = yield select(
    (state: ApplicationState) => state.games.search_term
  );

  try {
    const { data: searched_games }: AxiosResponse = yield call(
      axios.get,
      searchGameURL(search_term)
    );

    yield put(fetchSearchedGames(searched_games.results));
  } catch (e) {
    console.log(e);
  }
}

export function* loadDetailsSaga() {
  const game_id = yield select(
    (state: ApplicationState) => state.details.chosen_game_id
  );

  try {
    const [{ data: game }, { data: screenshots }]: AxiosResponse[] = yield all([
      axios.get(gameDetailsURL(game_id)),
      axios.get(gameScreenshotURL(game_id)),
    ]);

    yield put(getGameDetails(game, screenshots.results));
  } catch (e) {
    console.log(e);
  }
}
