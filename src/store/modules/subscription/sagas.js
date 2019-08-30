import { Alert } from 'react-native';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import {
  subscriptionLoadRequest as actionSubscriptionLoadRequest,
  subscriptionLoadSuccess,
  subscriptionLoadFailure,
  subscriptionDeleteSuccess,
} from './actions';

export function* subscriptionLoadRequest() {
  try {
    const response = yield call(api.get, 'subscription');

    const data = response.data.map(subscription => {
      const dateFormat = format(
        parseISO(subscription.Meetup.date),
        "dd 'de' MMMM', às 'HH'h'",
        {
          locale: pt,
        }
      );

      const url = String(subscription.Meetup.file.url).replace(
        'http://localhost:3333',
        api.defaults.baseURL
      );

      return {
        ...subscription,
        Meetup: { ...subscription.Meetup, dateFormat, file: { url } },
      };
    });

    yield put(subscriptionLoadSuccess(data));
  } catch (err) {
    yield put(subscriptionLoadFailure());
  }
}

export function* subscriptionNewRequest({ payload: { id } }) {
  try {
    yield call(api.post, `subscription/${id}`);
    yield put(actionSubscriptionLoadRequest());
    Alert.alert('Cadastro Realizado');
  } catch (err) {
    Alert.alert('Erro ao Realizar cadastro', `${err.response.data.error}`);
  }
}

export function* subscriptionDeleteRequest({ payload: { id } }) {
  try {
    yield call(api.delete, `subscription/${id}`);
    yield put(subscriptionDeleteSuccess(id));
  } catch (err) {
    Alert.alert('Erro ao Deletar cadastro');
  }
}

export default all([
  takeLatest('@subscription/LOAD_REQUEST', subscriptionLoadRequest),
  takeLatest('@subscription/NEW_REQUEST', subscriptionNewRequest),
  takeLatest('@subscription/Delete_REQUEST', subscriptionDeleteRequest),
]);
