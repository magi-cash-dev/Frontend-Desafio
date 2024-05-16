import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

export const fetchRandomJoke = () => {
  return api.get('/random-joke')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching joke:', error);
    });
};