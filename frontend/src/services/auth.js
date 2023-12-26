import axios from 'axios'

const registerUrl = '/api/auth/register'
const loginUrl = '/api/auth/login'

const register = async (userdata) => {
  const response = await axios.post(registerUrl, userdata)
  return response.data
}

const login = async (credentials) => {

  const response = await axios.post(loginUrl, credentials)
  return response.data
}

export default { register, login }
