import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backendinfra.herokuapp.com/'
});

export default api;