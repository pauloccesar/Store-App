import axios from 'axios';

export async function getAllProducts() {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response;
}