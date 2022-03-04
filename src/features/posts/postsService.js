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

const create = async (postData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.post(API_URL + "/posts/" ,postData, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;

};

const deletePost = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/posts/" + _id, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const like = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(API_URL + "/posts/like/"+_id,{}, {
      headers: {
        authorization: user?.token,
      },
    } );
  return res.data;
};

const deslike = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(API_URL + "/posts/deslike/"+_id,{}, {
      headers: {
        authorization: user?.token,
      },
    } );
  return res.data;
};

const getPostByName = async (postTitle) => {
  const res = await axios.get(API_URL + "/posts/title/" + postTitle);
  return res.data;
};

const authService = {
  getAll,
  getById,
  deletePost,
  like,
  deslike, 
  create,
  getPostByName
};

export default authService;