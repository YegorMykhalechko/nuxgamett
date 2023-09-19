import axios from "axios";

const APIService = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const Users = () => {
  return APIService.get("/users");
};
