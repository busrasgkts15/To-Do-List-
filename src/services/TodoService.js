import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodoAll = () => {
  return axios.get(BASE_URL);
};

const getUserById = (userId) => {
  return axios.get(`${BASE_URL}/${userId}`);
};

const TodoPost = (req) => {
  return axios.post(`${BASE_URL}`, req);
};

const TodoDelete = (userId) => {
  return axios.delete(`${BASE_URL}/${userId}`);
};

const TodoUpdate = (req) => {
  return axios.put(BASE_URL, req);
};

let TodoService = {
  getTodoAll,
  getUserById,
  TodoPost,
  TodoDelete,
  TodoUpdate,
};

export default TodoService;
