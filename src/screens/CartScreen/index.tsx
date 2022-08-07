import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, ContainerList, Header, Icon, ImageList, Title, TitleList, TouchableOpacity } from './styles';

export default function CartScreen({ navigation }: any) {
  const [cartList, setCartList]: any = useState([]);

  useEffect(() => {
    getCartList();
  }, []);

  async function getCartList() {
    AsyncStorage.getItem('cartList').then((value: any) => {
      const products = JSON.parse(value);
      setCartList(products);
    });
  }

  async function handleRemoveProduct(id: number) {
    const updatedCartList = cartList.filter((cartList: { id: number; }) => cartList.id !== id);
    try {
      await AsyncStorage.setItem('cartList', JSON.stringify(updatedCartList));
      setCartList(updatedCartList);
    } catch (error) {
    }
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-left" style={{ paddingLeft: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" />
        </TouchableOpacity>
      </Header>
      <Title>{`produtos adicionados:`}</Title>
      <FlatList
        data={cartList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ContainerList key={item.id}>
            <ImageList source={{ uri: item?.image }} />
            <TitleList>{item?.name}</TitleList>
            <TouchableOpacity
              onPress={() => handleRemoveProduct(item?.id)}>
              <Icon name="trash-2" />
            </TouchableOpacity>
          </ContainerList>
        )
        }
      />
    </Container >
  );
}
