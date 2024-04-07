import axios from "axios";

const instance = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: "https://9j2wn3-8080.csb.app",
  timeout: 1000,
});

export default instance;
