import axios from "axios";

const httpClient = axios.create({
  baseURL: "/v1",
  headers: {
    "Content-type": "application/json",
  },
});

export default httpClient;
