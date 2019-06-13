import { createStore, compose, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;

// Configuração Antiga

// const middlewares = [];

// const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

// const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// middlewares.push(sagaMiddleware);

// const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

// const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)));

// sagaMiddleware.run(sagas);

// export default store;
