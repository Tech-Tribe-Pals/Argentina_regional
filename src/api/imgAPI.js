import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api/img`,
});

const uploadImg = async (data) => {
  const response = await api.post("/upload", data);
  return response.data;
};

const deleteImg = async (data) => {
  const response = await api.post("/delete", data);
  return response.data;
};

const imgAPI = { uploadImg, deleteImg };

export default imgAPI;
