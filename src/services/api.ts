import axios from "axios";

export const api = axios.create({
  baseURL: "https://challenge-openbanking.herokuapp.com",
});
