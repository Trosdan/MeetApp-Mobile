import React, { useState, useMemo, useEffect, useCallback } from 'react';
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
    setPage(page + 1);
  }, [date, dispatch]);//eslint-disable-line

  const dateFormat = useMemo(() => {
    return format(date, "dd 'de' MMMM", {
      locale: pt,
    });
  }, [date]);

  const handlerNextDay = useCallback(() => {
    setDate(addDays(date, -1));
    setPage(1);
  }, [date]);

  const handlerPreviousDay = useCallback(() => {
    setDate(addDays(date, +1));
    setPage(1);
  }, [date]);

  function loadMoreMeetups() {
    if (loadInfinity) {
      dispatch(meetupsLoadRequest(date, page));
      setPage(page + 1);
    }
  }

  function subscriptionNewMeetup(id) {
    dispatch(subscriptionNewRequest(id));
  }

  function renderMeetup() {
    if (loading && !meetups.length) {
      return <ActivityIndicator size="large" />;
    }
    if (!meetups.length) {
      return <TextEmpty>Não existe Meetups :(</TextEmpty>;
    }
    return (
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
    );
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
        {renderMeetup()}
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
