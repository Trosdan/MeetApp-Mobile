import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const TextEmpty = styled.Text`
  font-size: 25px;
  color: #9999;
  font-weight: bold;
`;

export const DateSelector = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 15px 0;
`;

export const DateText = styled.Text`
  font-size: 24px;
  color: #fff;
  margin: 0 10px;
`;

export const MeetupList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})`
  flex: 1;
`;
