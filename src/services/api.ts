import axios from 'axios';

const api = axios.create({
  baseURL: 'http://joke-backend.herokuapp.com'
});

export default api;
