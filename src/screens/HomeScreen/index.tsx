import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { AreaInput, Card, Container, Header, Icon, SearchIcon, TextInput, Image } from './styles';

export default function HomeScreen({ navigation }: any) {
  const [input, setInput] = useState('');
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data);
    });
  }, [])
  console.log(products)
  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" />
        </TouchableOpacity>
      </Header>
      <AreaInput>
        <TextInput
          placeholder="Buscar produto"
          placeholderTextColor='#353840'
          value={input}
          onChangeText={text => setInput(text)}
        />
        <SearchIcon name="search" />
      </AreaInput>
      <FlatList
        data={products}
        // keyExtractor={({ _id }, i) => _id ?? i.toString()}
        numColumns={2}
        renderItem={({ item: products }) => (
          <Card>
            <Image
              source={{ uri: products?.image }}
            />
          </Card>
        )}
      />
    </Container>
  );
}
