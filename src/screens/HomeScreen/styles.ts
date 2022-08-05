import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;
  background-color: #00d900;
  align-items:  flex-end;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  color: #000000;
  font-size: 25px;
  padding-right: 15px;
`;

export const AreaInput = styled.View`
  width: 90%;
  height: 48px;
  flex-direction: row;
  margin: 10px;
  background-color: #FFF;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 500px;
`;

export const TextInput = styled.TextInput`
  max-width: 90%;
  font-size: 16px;
`;

export const SearchIcon = styled(Feather)`
  color: #000000;
  font-size: 25px;
`;

export const Card = styled.View`
  /* width: 163px;
  height: 144px; */
  width: 150px;
  height: 150px;
  background-color: #FFFFFF;
  padding: 10px;
  margin: 6px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 20px;
  padding-top: 26px;
`;
