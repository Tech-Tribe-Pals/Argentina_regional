import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api/posts`,
});

const createPost = async (data) => {
  const response = await api.post("/", { data });
  return response.data;
};

const uploadImg = async (data) => {
  const response = await api.post("/upload", data);
  return response.data;
};

const deleteImg = async (data) => {
  const response = await api.delete("/delete", { data })
  return response.data
}

const postsAPI = { createPost, uploadImg, deleteImg };

export default postsAPI;
