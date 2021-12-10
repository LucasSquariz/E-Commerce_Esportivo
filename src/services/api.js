import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ctdcommerce-env.eba-pu3csziq.us-east-1.elasticbeanstalk.com'
});

export default api;