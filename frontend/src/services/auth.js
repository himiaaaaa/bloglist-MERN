import axios from 'axios'

const registerUrl = '/api/auth/register'
const loginUrl = '/api/auth/login'

const register = async (userData) => {
  const response = await axios.post(registerUrl, userData)
  return response.data
}

const login = async (credentials) => {
  const response = await axios.post(loginUrl, credentials)
  return response.data
}

export default { register, login }
