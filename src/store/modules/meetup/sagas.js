import { takeLatest, all, put, call } from 'redux-saga/effects';
// import { format } from 'date-fns';
// import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import {
  meetupsLoadSuccess,
  meetupsLoadFailure,
  meetupLoadSuccess,
  meetupLoadFailure,
} from './actions';

export function* meetupsloadRequest() {
  try {
    const response = yield call(api.get, 'meetup');
    // const data = response.data.map(meetup => {
    //   const dateFormat = format(meetup.date, 'DD [de] MMMM[, às ]HH[h]', {
    //     locale: pt,
    //   });

    //   return { ...meetup, dateFormat };
    // });
    yield put(meetupsLoadSuccess(data));
  } catch (err) {
    // toast.error('Não foi possivel carregar os Meetups');
    yield put(meetupsLoadFailure());
  }
}

export function* meetuploadRequest({ payload: { id } }) {
  try {
    const response = yield call(api.get, `meetup/${id}`);
    // const dateFormat = format(response.data.date, 'DD [de] MMMM[, às ]HH[h]', {
    //   locale: pt,
    // });
    yield put(meetupLoadSuccess({ ...response.data, dateFormat }));
  } catch (err) {
    // toast.error('Não foi possivel carregar os Meetups');
    yield put(meetupLoadFailure());
    // history.push('/');
  }
}

export function* meetupCreateRequest({ payload: { meetup } }) {
  try {
    const response = yield call(api.post, 'meetup', meetup);
    // toast.done('Meetup criado');
    // history.push(`meetup/${response.data.id}`);
  } catch (err) {
    // toast.error('Não foi possivel criar o Meetup');
  }
}

export function* meetupUpdateRequest({ payload: { meetup } }) {
  try {
    yield call(api.put, `meetup/${meetup.id}`, meetup);
    // toast.success('Meetup Atualizado');
    // history.push(`meetup/${meetup.id}`);
  } catch (err) {
    // toast.error('Não foi possivel atualizar o Meetup');
  }
}

export function* meetupDeleteRequest({ payload: { id } }) {
  try {
    yield call(api.delete, `meetup/${id}`);
    // toast.success('Meetup Deletado');
    // history.push(`/`);
  } catch (err) {
    // toast.error('Não foi possivel Deletar o Meetup');
  }
}

export default all([
  takeLatest('@meetup/MEETUPS_LOAD_REQUEST', meetupsloadRequest),
  takeLatest('@meetup/MEETUP_LOAD_REQUEST', meetuploadRequest),
  takeLatest('@meetup/MEETUP_CREATE_REQUEST', meetupCreateRequest),
  takeLatest('@meetup/MEETUP_UPDATE_REQUEST', meetupUpdateRequest),
  takeLatest('@meetup/MEETUP_DELETE_REQUEST', meetupDeleteRequest),
]);
