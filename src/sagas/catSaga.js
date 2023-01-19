import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess, getCatsFetch } from '../store/catSlice';

function* workGetCatsFetch() {
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
  const formattedCats = yield cats.json();
  const formattedCatsShort = formattedCats.slice(0, 10);
  yield put(getCatsSuccess(formattedCatsShort));
}

function* catSaga() {
  yield takeEvery(getCatsFetch.type, workGetCatsFetch);
}

export default catSaga;
