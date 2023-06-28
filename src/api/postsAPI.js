import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api/posts`,
  withCredentials: true,
});

const createPost = async () => {
    const response = await api.post('/')
    return response.data
}

const uploadImg = async (data) => {
    const response = await api.post('/upload', data)
    return response.data
}

const postsAPI = { createPost, uploadImg };

export default postsAPI;
