import React, { useEffect, useState, useMemo } from 'react';
import { Alert, FlatList, TouchableOpacity } from 'react-native';
import { AreaInput, Container, Header, Icon, SearchIcon, TextInput } from './styles';
import { CardComponent } from '../../components/CardComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllProducts } from '../services/api';
import LoadingComponent from '../../components/LoadingComponent';

export default function HomeScreen({ navigation }: any) {
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState('');
  const [products, setProducts]: any = useState({});
  const filterProduct = useMemo(() =>
    input !== '' ? products?.
      filter(({ title = '' }) =>
        title
          .toLowerCase()
          .includes(input.toLowerCase()))
      : products
    , [input, products]);

  const getProducts = async () => {
    try {
      setLoading(true);
      const reponse = await getAllProducts();
      setProducts(reponse?.data);
    } catch (error) {
      Alert.alert('Erro ao buscar dados');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  async function handleAddCartList(item: any) {
    const data = {
      id: JSON.stringify(new Date().getTime()),
      name: item.title,
      image: item.image,
    }
    try {
      let newProduct: any = [];
      await AsyncStorage.getItem('cartList').then((value: any) => {
        newProduct = JSON.parse(value)
        newProduct.push(data)
      });
      await AsyncStorage.setItem('cartList', JSON.stringify(newProduct));
      navigation.navigate('Cart');
    }
    catch (error) {
      Alert.alert('Erro ao salvar dados');
    }
  }

  if (loading) {
    return <LoadingComponent />
  } else {
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
          data={filterProduct}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <CardComponent
              onPress={() => handleAddCartList(item)}
              url={item?.image}
              title={item?.title}
            />
          )}
        />
      </Container>
    );
  }
}
