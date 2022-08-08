import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, ContainerList, Header, Icon, ImageList, Title, TitleList, TouchableOpacity } from './styles';
import LoadingComponent from '../../components/LoadingComponent';

export default function CartScreen({ navigation }: any) {
  const [loading, setLoading] = useState(true);
  const [cartList, setCartList]: any = useState([]);
  const unProducts = cartList.length;

  useEffect(() => {
    getCartList();
    setLoading(false)
  }, []);

  async function getCartList() {
    AsyncStorage.getItem('cartList').then((value: any) => {
      const products = JSON.parse(value);
      setCartList(products);
    });
  }

  async function handleRemoveProduct(id: number) {
    const updatedCartList = cartList.filter((cartList: { id: number; }) => cartList.id !== id);
    AsyncStorage.setItem('cartList', JSON.stringify(updatedCartList));
    setCartList(updatedCartList);
    getCartList();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  async function handleClearAll() {
    AsyncStorage.setItem('cartList', JSON.stringify([]));
    getCartList();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  if (loading) {
    return <LoadingComponent />
  } else {
    return (
      <Container>
        <Header>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}>
            <Icon name="arrow-left" style={{ paddingLeft: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleClearAll()}>
            <Icon name="trash-2" />
          </TouchableOpacity>
        </Header>
        <Title>{`${unProducts} produtos adicionados:`}</Title>
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
}
