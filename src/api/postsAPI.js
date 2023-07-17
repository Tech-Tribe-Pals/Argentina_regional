import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api/posts`,
});

const createPost = async (data) => {
  const response = await api.post("/", { data });
  return response.data;
};

const getPosts = async () => {
  const response = await api.get("/");
  return response.data;
};

const filterPosts = async (filters) => {
  const response = await api.post("/filter", filters);
  return response.data;
};

const mostViews = async (filters) => {
  const response = await api.post("/views", filters);
  return response.data;
};

const findPost = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data;
};

const editPost = async (id, data) => {
  const response = await api.put(`/${id}`, data);
  return response.data;
};

const addView = async (id) => {
  const response = await api.post(`/views/${id}`);
  return response.data;
};

const deletePost = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};

const postsAPI = {
  createPost,
  getPosts,
  filterPosts,
  mostViews,
  findPost,
  editPost,
  addView,
  deletePost,
};

export default postsAPI;
