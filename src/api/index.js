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

export const User = (id) => {
  return APIService.get(`/users/${id}`);
};

export const Todos = () => {
  return APIService.get(`/todos`);
};

export const AddTodo = (data) => {
  return APIService.post(`/todos`, data);
};
