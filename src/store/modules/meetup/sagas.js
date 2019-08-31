import { takeLatest, all, put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { parseISO, format, addHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import {
  meetupsLoadSuccess,
  meetupsLoadFailure,
  meetupsLoadInfinitySuccess,
  meetupsLoadInfinityStop,
} from './actions';

export function* meetupsloadRequest({ payload }) {
  try {
    const { date, page } = payload;
    const response = yield call(api.get, 'meetup', {
      params: {
        date: format(date, 'yyyy-MM-dd'),
        page,
      },
    });
    const data = response.data.map(meetup => {
      const dateFormat = format(
        addHours(parseISO(meetup.date), -3),
        "dd 'de' MMMM', às 'HH'h'",
        {
          locale: pt,
        }
      );

      const url = String(meetup.file.url).replace(
        'http://localhost:3333',
        api.defaults.baseURL
      );

      return { ...meetup, dateFormat, file: { url } };
    });
    if (page === 1) {
      yield put(meetupsLoadSuccess(data));
    } else if (data.length) {
      yield put(meetupsLoadInfinitySuccess(data));
    } else {
      yield put(meetupsLoadInfinityStop());
    }
  } catch (err) {
    Alert.alert('Não foi possivel carregar os Meetups');
    yield put(meetupsLoadFailure());
  }
}

export default all([
  takeLatest('@meetup/MEETUPS_LOAD_REQUEST', meetupsloadRequest),
]);
