import { takeLatest, all, put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import { meetupsLoadSuccess, meetupsLoadFailure } from './actions';

export function* meetupsloadRequest() {
  try {
    const response = yield call(api.get, 'meetup');
    const data = response.data.map(meetup => {
      const dateFormat = format(
        parseISO(meetup.date),
        "dd 'de' MMMM', às 'HH'h'",
        {
          locale: pt,
        }
      );

      return { ...meetup, dateFormat };
    });
    yield put(meetupsLoadSuccess(data));
  } catch (err) {
    Alert.alert('Não foi possivel carregar os Meetups');
    yield put(meetupsLoadFailure());
  }
}

export default all([
  takeLatest('@meetup/MEETUPS_LOAD_REQUEST', meetupsloadRequest),
]);
