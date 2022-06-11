import axios from 'axios';

export const api = () => {
  return axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });
};
