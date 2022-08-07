import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  background-color: #00d900;
  align-items:  center;
  justify-content: space-between;
`;

export const Icon = styled(Feather)`
  color: #000000;
  font-size: 25px;
  padding-right: 15px;
`;

export const Title = styled.Text`
  font-size: 18px;
  padding-left: 15px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
`;

export const ContainerList = styled.View`
  flex: 1;
  width: 95%;
  height: 60px;
  flex-direction: row;
  background-color: #99d900;
  border-radius: 10px;
  align-items:  center;
  justify-content:space-between;
  margin: 5px;
`;

export const ImageList = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  margin-left: 10px;
`;

export const TitleList = styled.Text`
  max-width: 70%;
  font-size: 14px;
  padding-left: 15px;
`;