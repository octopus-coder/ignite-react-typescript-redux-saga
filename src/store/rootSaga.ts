import { all, takeLatest } from 'redux-saga/effects';
import { fetchSearchedGameSaga, loadDetailsSaga, loadGamesSaga } from './sagas';
import { DetailsActionTypes, GameActionTypes } from './types';

export default function* rootSaga() {
  return yield all([
    takeLatest(GameActionTypes.fetchGames, loadGamesSaga),
    takeLatest(GameActionTypes.setSearchTerm, fetchSearchedGameSaga),
    takeLatest(DetailsActionTypes.setGameID, loadDetailsSaga),
  ]);
}
