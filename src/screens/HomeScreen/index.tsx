import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FlatList, TouchableOpacity } from 'react-native';
import { AreaInput, Card, Container, Header, HeaderModal, Icon, SearchIcon, TextInput, Title } from './styles';
import { CardComponent } from '../../components/CardComponent';

export default function HomeScreen({ navigation }: any) {
  const [input, setInput] = useState('');
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data);
    });
  }, [])

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
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CardComponent
            onPress={() => navigation.navigate('Cart')}
            url={item?.image}
            title={item?.title}
          />
        )}
      />
    </Container>
  );
}
