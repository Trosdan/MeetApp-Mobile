import React from 'react';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Image,
  ContentCard,
  HorizontalOrientation,
  Title,
  Date,
  Location,
  Organizer,
  ButtunSubcription,
} from './styles';

export default function MeetupCard({
  data: {
    title,
    location,
    dateFormat,
    User: { name },
    file: { url },
  },
  actionButtonFunc,
  actionButtonText,
}) {
  return (
    <Container>
      <Image
        source={{
          uri: url,
        }}
      />
      <ContentCard>
        <Title>{title}</Title>
        <HorizontalOrientation>
          <Icon name="event" size={20} color="#999999" />
          <Date>{dateFormat}</Date>
        </HorizontalOrientation>
        <HorizontalOrientation>
          <Icon name="location-on" size={20} color="#999999" />
          <Location>{location}</Location>
        </HorizontalOrientation>
        <HorizontalOrientation>
          <Icon name="person" size={20} color="#999999" />
          <Organizer>{name}</Organizer>
        </HorizontalOrientation>
        <ButtunSubcription onPress={actionButtonFunc}>
          {actionButtonText}
        </ButtunSubcription>
      </ContentCard>
    </Container>
  );
}

MeetupCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    dateFormat: PropTypes.string,
    location: PropTypes.string,
    User: PropTypes.shape({
      name: PropTypes.string,
    }),
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  actionButtonFunc: PropTypes.func.isRequired,
  actionButtonText: PropTypes.string.isRequired,
};
