import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import MeetupCard from '~/components/MeetupCard';
import Header from '~/components/Header';
import { Container, MeetupList } from './styles';

import {
  subscriptionLoadRequest,
  subscriptionDeleteRequest,
} from '~/store/modules/subscription/actions';

export default function Subscription() {
  const dispatch = useDispatch();

  const subscriptions = useSelector(state => state.subscription.subscriptions);
  const loading = useSelector(state => state.subscription.loading);

  useEffect(() => {
    dispatch(subscriptionLoadRequest());
  }, [dispatch]);

  function handlerSubscriptionLoad() {
    dispatch(subscriptionLoadRequest());
  }

  function subscriptionDeleteMeetup(id) {
    dispatch(subscriptionDeleteRequest(id));
  }

  return (
    <>
      <Header />
      <Container>
        {subscriptions.length ? (
          <MeetupList
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            refreshing={loading}
            onRefresh={handlerSubscriptionLoad}
            renderItem={({ item }) => (
              <MeetupCard
                data={item.Meetup}
                actionButtonFunc={() => subscriptionDeleteMeetup(item.id)}
                actionButtonText="Cancelar inscrição"
              />
            )}
          />
        ) : null}
      </Container>
    </>
  );
}

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
