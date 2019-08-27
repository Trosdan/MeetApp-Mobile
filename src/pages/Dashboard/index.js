import React, { useState, useMemo, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { addDays, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Header from '~/components/Header';
import MeetupCard from '~/components/MeetupCard';
import { Container, DateSelector, DateText, MeetupList } from './styles';

import { meetupsLoadRequest } from '~/store/modules/meetup/actions';

export default function Dashboard() {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());

  const meetups = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    dispatch(meetupsLoadRequest());
  }, [dispatch]);

  const dateFormat = useMemo(() => {
    return format(date, "dd 'de' MMMM", {
      locale: pt,
    });
  }, [date]);

  function handlerNextDay() {
    setDate(addDays(date, -1));
  }

  function handlerPreviousDay() {
    setDate(addDays(date, +1));
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
        <MeetupList
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <MeetupCard />}
        />
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
