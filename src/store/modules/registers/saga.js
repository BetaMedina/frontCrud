import { takeLatest, all, call, put } from 'redux-saga/effects';
import api from '../../../service/api';
import {
  getAllRegistersSucess,
  deleteRegisterSuccess,
  createSuccess,
  updateRegisterSuccess,
  loading,
} from './action';

export function* getRegistersSaga() {
  const registers = yield call(api.get, `register`);
  if (registers) {
    yield put(getAllRegistersSucess(registers.data));
  }
}

export function* deleteRegisterSaga({ payload }) {
  yield put(loading(true));

  try {
    yield call(api.delete, `register/${payload}`);
    yield put(deleteRegisterSuccess());

    yield put(loading(false));
  } catch (err) {
    yield put(loading(false));
  }
}

export function* createRegisterSaga({ payload }) {
  yield put(loading(true));
  try {
    yield call(api.post, `register`, payload);

    yield put(createSuccess());
    yield put(loading(false));
  } catch (err) {
    yield put(loading(false));
  }
}

export function* updateRegister({ payload }) {
  const { id, register } = payload;
  yield put(loading(true));
  try {
    yield call(api.put, `register/${id}`, register);

    yield put(updateRegisterSuccess());
    yield put(loading(false));
  } catch (err) {
    yield put(loading(false));
  }
}

export default all([
  takeLatest('@register/GET_ALL_REGISTERS', getRegistersSaga),
  takeLatest('@register/DELETE_REGISTER', deleteRegisterSaga),
  takeLatest('@register/CREATE_REGISTER', createRegisterSaga),
  takeLatest('@register/UPDATE_REGISTER', updateRegister),
]);
