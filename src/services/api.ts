import axios from 'axios';

export const products =  axios.get('https://fakestoreapi.com/products').then((response) => {
  console.log(response.data);
});