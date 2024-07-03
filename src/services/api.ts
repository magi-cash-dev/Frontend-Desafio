import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/v1/jokes/',
});

export const getRandomJoke = async () => {
  const response = await api.get('random');

  return response.data;
};
