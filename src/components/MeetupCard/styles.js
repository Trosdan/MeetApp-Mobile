import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  width: 350px;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  height: 150px;
  align-self: stretch;
`;

export const ContentCard = styled.View`
  padding: 16px;
`;

export const HorizontalOrientation = styled.View`
  flex-direction: row;
  margin: 2px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;
export const Date = styled.Text`
  font-size: 14px;
  margin-left: 4px;
`;
export const Location = styled.Text`
  font-size: 14px;
  margin-left: 4px;s
`;
export const Organizer = styled.Text`
  font-size: 14px;
  margin-left: 4px;
`;
export const ButtunSubcription = styled(Button)`
  margin-top: 16px;
`;
