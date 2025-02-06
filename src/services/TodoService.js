import axios from "axios";

const BASE_URL = "http://localhost:3000/todo";

const getTodo = () => {
  return axios.get(BASE_URL).then((res) => {
    return res;
  });
};

const getUserById = (userId) => {
  return axios.get(`${BASE_URL}/${userId}`);
};

const TodoPost = (data) => {
  return axios.post(`${BASE_URL}`, data);
};

const TodoDelete = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

const TodoUpdate = (req) => {
  return axios.put(`${BASE_URL}`, req);
};

let TodoService = {
  getTodo,
  getUserById,
  TodoPost,
  TodoDelete,
  TodoUpdate,
};

export default TodoService;
