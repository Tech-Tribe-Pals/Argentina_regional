import axios from 'axios'

const api = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/api/user`
})

const login = async (data) => {
    const response = await api.post('/login', data)
    return response.data
}

const checkToken = async (token) => {
  try {
    const response = await api.post('/check-token', { token });
    return response.data;
  } catch (error) {
    console.log("Error al verificar el token:", error);
    return { valid: false };
  }
}

const authAPI = { login, checkToken }

export default authAPI