import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  // baseURL: "https://y7ly4z-8080.csb.app",
  timeout: 1000,
});

export default instance;
