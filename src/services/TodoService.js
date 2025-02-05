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

const TodoPost = (req) => {
  console.log("buss" , req)
  // return axios
  //   .post(`${BASE_URL}`, {
  //     userName: req.userName,
  //     department: req.department,
  //     title: req.title,
  //   })
  //   .then((response) => {
  //     console.log("Gönderi eklendi:", response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Hata oluştu:", error);
  //   });
};

const TodoDelete = (userId) => {
  return axios.delete(`${BASE_URL}/${userId}`);
};

const TodoUpdate = (req) => {
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
