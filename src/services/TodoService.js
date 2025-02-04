import axios from "axios";

const BASE_URL = "http://localhost:3000/todo";

const getTodo = () => {
  return axios.get(BASE_URL).then((res => {
    return res;
  }));
};

const getUserById = (userId) => {
  return axios.get(`${BASE_URL}/${userId}`);
};

const TodoPost = (req) => {
  return axios.post(`${BASE_URL}`, req);
};

const TodoDelete = (userId) => {
  console.log("bu kullanıcı:",userId)
  return axios.delete(`${BASE_URL}/${userId}`);
};

const TodoUpdate = (req) => {
  console.log("busranın id" , req)
  return axios.put(BASE_URL + "/put", req);
};

let TodoService = {
  getTodo,
  getUserById,
  TodoPost,
  TodoDelete,
  TodoUpdate,
};

export default TodoService;
