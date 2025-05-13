import axios from 'axios';
export const fetchProducts = () => axios.get(
    'https://dummyjson.com/products'
);
