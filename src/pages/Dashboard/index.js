import React, { useState, useMemo, useEffect } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { addDays, format, addHours } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Header from '~/components/Header';
import MeetupCard from '~/components/MeetupCard';
import {
  Container,
  TextEmpty,
  DateSelector,
  DateText,
  MeetupList,
} from './styles';

import { meetupsLoadRequest } from '~/store/modules/meetup/actions';
import { subscriptionNewRequest } from '~/store/modules/subscription/actions';

export default function Dashboard() {
  const dispatch = useDispatch();

  const [date, setDate] = useState(addHours(new Date(), -3));
  const [page, setPage] = useState(1);

  const meetups = useSelector(state => state.meetup.meetups);
  const loading = useSelector(state => state.meetup.loading);
  const loadInfinity = useSelector(state => state.meetup.loadInfinity);

  useEffect(() => {
    dispatch(meetupsLoadRequest(date, page));
  }, [date, dispatch, page]);

  const dateFormat = useMemo(() => {
    return format(date, "dd 'de' MMMM", {
      locale: pt,
    });
  }, [date]);

  function handlerNextDay() {
    setDate(addDays(date, -1));
    setPage(1);
  }

  function handlerPreviousDay() {
    setDate(addDays(date, +1));
    setPage(1);
  }

  function loadMoreMeetups() {
    if (loadInfinity) {
      setPage(page + 1);
    }
  }

  function subscriptionNewMeetup(id) {
    dispatch(subscriptionNewRequest(id));
  }

  return (
    <>
      <Header />
      <Container>
        <DateSelector>
          <TouchableOpacity onPress={handlerNextDay}>
            <Icon name="chevron-left" size={50} color="#fff" />
          </TouchableOpacity>
          <DateText>{dateFormat}</DateText>
          <TouchableOpacity onPress={handlerPreviousDay}>
            <Icon name="chevron-right" size={50} color="#fff" />
          </TouchableOpacity>
        </DateSelector>
        {meetups.length ? (
          <MeetupList
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <MeetupCard
                data={item}
                actionButtonFunc={() => subscriptionNewMeetup(item.id)}
                actionButtonText="Realizar inscrição"
              />
            )}
            onEndReached={loadMoreMeetups}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() =>
              !loading || <ActivityIndicator size="large" />
            }
          />
        ) : (
          <TextEmpty>Não existe Meetups :(</TextEmpty>
        )}
      </Container>
    </>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
