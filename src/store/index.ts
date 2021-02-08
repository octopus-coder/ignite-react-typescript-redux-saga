import { applyMiddleware, createStore, Store } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { IDetailsState, IGamesState } from './types';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export interface ApplicationState {
  games: IGamesState;
  details: IDetailsState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
