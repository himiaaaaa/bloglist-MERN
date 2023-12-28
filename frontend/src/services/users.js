import axios from 'axios'
const baseUrl = '/api/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const updateTheUser = async (updatedUserData) => {
  const response = await axios.put(`${baseUrl}/${updatedUserData.id}`, updatedUserData)
  return response.data
}

const deleteTheUser = async (id) => {

  const response = await axios.delete(`${baseUrl}/${id}`, { data: { id } })
  return response.data
}

export default { getAll, updateTheUser, deleteTheUser }


