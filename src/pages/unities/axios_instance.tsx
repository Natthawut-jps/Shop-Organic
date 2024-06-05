import axios from "axios";

const instance = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: "https://api-shoporganic-ecommerce.onrender.com",
  timeout: 1000,
});

export default instance;
