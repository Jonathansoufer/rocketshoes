import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rooSaga from './modules/rooSaga';
import rooReducer from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rooReducer, enhancer);

sagaMiddleware.run(rooSaga);

export default store;
