import axios from "axios";

const API_URL = "http://localhost:4000";

const getAll = async () => {
  const res = await axios.get(API_URL + "/posts");
  return res.data;
};

const getById = async (_id) => {
  const res = await axios.get(API_URL + "/posts/id/" + _id);
  return res.data;
};

const deletePost = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/posts/" + _id, {
    headers: {
      authorization: user?.token,
    },
  });
  console.log(res.data)
  return res.data;
};


const authService = {
  getAll,
  getById,
  deletePost
};

export default authService;