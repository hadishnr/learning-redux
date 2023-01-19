import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import catSlice from './catSlice';
import catSaga from '../sagas/catSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: { cat: catSlice },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(catSaga);

export default store;
