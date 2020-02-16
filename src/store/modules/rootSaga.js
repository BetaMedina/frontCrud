import { all } from 'redux-saga/effects';
import registerSaga from './registers/saga';

export default function* rootSaga() {
  return yield all([registerSaga]);
}
