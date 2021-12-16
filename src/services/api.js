import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yoneda-json-server.herokuapp.com/franquias/',
})

export default api;