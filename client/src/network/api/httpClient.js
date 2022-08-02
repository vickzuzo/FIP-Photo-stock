import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://photo-stock-be.herokuapp.com/v1",
  headers: {
    "Content-type": "application/json",
  },
});

export default httpClient;
