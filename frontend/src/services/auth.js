/* import axios from 'axios'
const baseUrl = '/api/login'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login } */


import axios from 'axios'

const registerUrl = '/api/auth/register'

const register = async (userData) => {
  const response = await axios.post(registerUrl, userData)
  return response.data
}

export default { register }
