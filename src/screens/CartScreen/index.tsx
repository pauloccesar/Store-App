import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, ContainerList, Header, Icon, ImageList, Title, TitleList, TouchableOpacity } from './styles';

export default function CartScreen({ navigation }: any) {
  const [cartList, setCartList]: any = useState([]);

  useEffect(() => {
    getCartList()
  }, []);

  async function getCartList() {
    AsyncStorage.getItem('cartList').then((value: any) => {
      const accounts = JSON.parse(value);
      setCartList(accounts)
    });
  }

  async function handleRemoveProduct(id: number) {
    const updatedCartList = cartList.filter((cartList: { id: number; }) => cartList.id !== id);
    try {
      let newProduct: any = [];
      await AsyncStorage.getItem('cartList').then((value: any) => {
        console.log(JSON.parse(value));
        newProduct = JSON.parse(value)
        newProduct.push(updatedCartList)
      });
      AsyncStorage.setItem('cartList', JSON.stringify(newProduct));
      navigation.navigate('Cart');
      setCartList(updatedCartList);
    } catch (error) {
    }
  }

  // const Delete = () => AsyncStorage.setItem('cartList', JSON.stringify([]));


  console.log("produto aqui", cartList)

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
          <ContainerList>
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
